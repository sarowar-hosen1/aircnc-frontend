import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {useSelector} from 'react-redux';

const PrivateRoute = ({children, ...rest}) => {
    const logged = useSelector(state => state.logged);

    return (
        <Route
            {...rest}
            render={({ location }) =>
            logged.name ? (
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