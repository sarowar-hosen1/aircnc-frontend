import React, { useState } from 'react';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import facebook from '../../images/google.png';
import google from '../../images/facebook.png'
import { Link } from 'react-router-dom';
import { Auth } from './Auth';
import './Login.css';

const Login = () => {
    const auth = Auth()
    console.log(auth.errors);
    const [returnUser, setReturnUser] = useState(true);
    const [passType, setPassType] = useState(false)

    return (
        <div className="login">
            <div className="login-inner">
                {
                    returnUser ?
                    <SignInForm returnUser={returnUser} passType={passType} setPassType={setPassType}></SignInForm>
                    :
                    <SignUpForm returnUser={returnUser} passType={passType} setPassType={setPassType}></SignUpForm>
                }
                <div className="d-flex justify-content-between my-3">
                    {
                        returnUser ?
                        <Link to="/forgot-password">Forgot Password</Link>
                        :
                        <Link>Do you have an account?</Link>
                    }
                    <Link onClick={() => setReturnUser(!returnUser)}>{returnUser ? "SIGN UP" : "SIGN IN"}</Link>
                </div>
                
                <hr className="hr"/>
                <p className='text-center text-white'>or</p>
                <div className="d-flex justify-content-center">
                    <img onClick={() => auth.googleSignIn()} src={google} alt=""/>
                    <img onClick={() => auth.fbSignIn()} src={facebook} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Login;