import firebase from 'firebase'
import 'firebase/auth';
import firebaseConfig from '../../Config/firebaseConfig';
import { useHistory, useLocation } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { useState } from 'react';
firebase.initializeApp(firebaseConfig);



export const Auth = () => {
    const [loggedInfo, setLoggedInfo] = useLocalStorage('userInfo', null)
    const [errors, setErrors] = useState(null);
    const [passReset, setPassReset] = useState(false);


    const location = useLocation()
    const history = useHistory();
    const { from } = location.state || { from: { pathname: "/" } };

    //create user
    const createUser = (name, email, password) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((result) => {
                var user = firebase.auth().currentUser;
                user.updateProfile({
                    displayName: name,
                }).then(function () {
                    const { displayName, email, emailVerified } = result.user;
                    const signIn = { name: displayName, email, emailVerified }
                    setLoggedInfo(JSON.stringify(signIn))
                    history.replace(from)
                })
            })
            .catch((error) => {
                var errorMessage = error.message;
                setErrors(errorMessage)
            });

    }

    //Sign in with email and password
    const signInWithEmailPassword = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(result => {
                const { displayName, email, emailVerified } = result.user;
                const signIn = { name: displayName, email, emailVerified };
                setLoggedInfo(JSON.stringify(signIn))
                history.replace(from);
            })
            .catch(err => {
                setErrors(err.message)
            })
    }

    //Google
    const googleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const { displayName, email, photoURL } = result.user
                const signIn = { name: displayName, email, photo: photoURL };
                setLoggedInfo(JSON.stringify(signIn))
                history.replace(from)
            })
            .catch((error) => {
                setErrors(error.message)
            })
    }

    //Facebook
    const fbSignIn = () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const { displayName, photoURL, email } = result.user
                const signIn = { name: displayName, email, photo: photoURL };
                setLoggedInfo(JSON.stringify(signIn))
                history.replace(from);
            })
            .catch((error) => {
                setErrors(error.message);
            })
    }


    //Signout user
    const signOut = () => {
        firebase.auth().signOut()
        .then(() => {
            setLoggedInfo(null);
        }).catch((error) => {
            setErrors(error.message);
        })
    }
    //password reset
    const passwordReset = (email) => {
        const auth = firebase.auth();
        auth.sendPasswordResetEmail(email)
            .then(() => {
                setPassReset(true);
            }).catch((error) => {
                setErrors(error.message);
            })
    }

    return {
        loggedInfo,
        errors,
        createUser,
        signInWithEmailPassword,
        googleSignIn,
        fbSignIn,
        signOut,
        passwordReset,
    }
}