import React from 'react';
import { Redirect } from "wouter";
import {useSelector} from 'react-redux';



const ProtectedRoute = ({children}) => {

 const login = useSelector((state) => state.login);

    return(
        <>
            { login ? children : <Redirect to='/login'/>}
        </>
    );
}

export default ProtectedRoute;