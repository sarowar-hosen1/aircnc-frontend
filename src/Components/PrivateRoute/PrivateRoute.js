import React from 'react';
import { Redirect, Route } from 'react-router-dom';


const PrivateRoute = ({children, ...rest}) => {
    const logged = JSON.parse(localStorage.getItem('userInfo'));

    return (
        <Route
            {...rest}
            render={({ location }) =>
            logged ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
};

export default PrivateRoute;