import React, { useState } from 'react';
import 'firebase/auth';
import './Login.css';
import {FaFacebook, FaGoogle} from 'react-icons/fa'
import { Auth } from './Auth';
import { useHistory } from 'react-router-dom';




const Login = () => {
    const auth = Auth();
    const history = useHistory();
    return (
        <div className="login">
            <h3 onClick={() => history.push('/')} className="navbar-brand btn">Aircnc</h3>
            <button onClick={auth.googleSignIn} className='btn-brand mb-4'><i className='mr-2'><FaGoogle/></i> Continue With Google</button>
            <button onClick={auth.fbSignIn} className='btn-brand'><i className='mr-2'><FaFacebook/></i> Continue With Facebook</button>
        </div>
    );
};

export default Login;