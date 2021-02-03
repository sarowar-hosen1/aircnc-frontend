import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { isSign } from '../../../redux/actions/action'
import { useSelector, useDispatch } from 'react-redux';
import './Navbar.css';

const Navbar = () => {
    const logged = useSelector(state => state.logged);
    const dispatch = useDispatch()
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <Link to='/' className="navbar-brand">Aircnc</Link>
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
                            <Link to='/' className="nav-link">Help</Link>
                        </li>
                        {
                            logged.name ?
                                <img style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '20px' }} src={logged.photo} alt="User" />
                                :
                                <li className="nav-item">
                                    <Link to='/login' className="nav-link">Login</Link>
                                </li>

                        }
                        {
                            logged.name ?
                                <li className="nav-item">
                                    <Link onClick={() => dispatch(isSign(""))} className="nav-link btn-brand">Sing Out</Link>
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