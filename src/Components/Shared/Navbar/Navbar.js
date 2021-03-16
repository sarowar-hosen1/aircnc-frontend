import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../images/Aircnc-logo.png'
import { Auth } from '../../Login/Auth';
import './Navbar.css';

const Navbar = () => {
    const loggedInfo = JSON.parse(localStorage.getItem('userInfo'));
    const auth = Auth();

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <Link to='/' className="navbar-brand"><img src={logo} alt="" /></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to='/' className="nav-link">Host your home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className="nav-link">Host your experience</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/login' className="nav-link">Help</Link>
                        </li>
                        {
                            loggedInfo ?
                                <li className="nav-item">
                                    <Link className="nav-link font-weight-bold text-uppercase text-success">{loggedInfo.name}</Link>
                                </li>
                                :
                                <li className="nav-item">
                                    <Link to='/login' className="nav-link">Login</Link>
                                </li>

                        }
                        {
                            loggedInfo ?
                                <li className="nav-item">
                                    <Link onClick={() => auth.signOut()} className="nav-link btn-brand">Sing Out</Link>
                                </li>
                                :
                                <li className="nav-item">
                                    <Link to='/login' className="nav-link btn-brand">Sing Up</Link>
                                </li>

                        }

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;