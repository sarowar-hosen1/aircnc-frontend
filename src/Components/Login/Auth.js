import firebase from 'firebase'
import 'firebase/auth';
import firebaseConfig from '../../firebaseConfig';
import { useDispatch } from 'react-redux';
import { isSign } from '../../redux/actions/action'
import { useHistory, useLocation } from 'react-router-dom';
firebase.initializeApp(firebaseConfig);



export const Auth = () => {

    const location = useLocation()
    const history = useHistory();
    const dispatch = useDispatch();
    const { from } = location.state || { from: { pathname: "/" } };


    //Google
    const googleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const { displayName, email, photoURL } = result.user
                const signIn = { name: displayName, email, photo: photoURL };
                dispatch(isSign(signIn))
                history.replace(from)
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    //Facebook
    const fbSignIn = () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const { displayName, photoURL, email } = result.user
                const signIn = { name: displayName, email, photo: photoURL };
                dispatch(isSign(signIn))
                history.replace(from);
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    return {
        googleSignIn,
        fbSignIn,
        
    }
}