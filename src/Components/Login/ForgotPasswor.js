import React from 'react';
import { useForm } from 'react-hook-form';
import {Link} from 'react-router-dom'
import { Auth } from './Auth';

const ForgotPasswor = () => {
    const auth = Auth();
    console.log(auth.loginError);
    
    const {register, handleSubmit, watch, errors} = useForm();
    const onSubmit = data => {
        auth.passwordReset(data.email)
    };

    return (
        <div className='login-inner'>
            <p className="text-uppercase text-white mb-3">Send email for password reset</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <input name="email" type="email" className="form-control" ref={register({ required: true, validate: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i })} placeholder="Email" />
                    {errors.name && <span className="text-danger"><small>Email is required</small></span>}
                </div>
                <input type="submit" className="btn btn-success w-100 mt-2" value="SEND EMAIL" />
                {
                    auth.loginError && <p className="text-danger text-center"><small>{auth.loginError}</small></p>
                }
                <Link to="/" className="text-white mt-5">Go Home</Link>
            </form>
        </div>
    );
};

export default ForgotPasswor;