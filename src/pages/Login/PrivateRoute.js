
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({isLoading,user, children, ...rest }) => {

    let location = useLocation();
    if (isLoading) { return <h1>Loading...</h1> }

    if (user) {
        return children
    }
    return (<Navigate to="/login" state={{ from: location }} replace />
    )
};

export default PrivateRoute;