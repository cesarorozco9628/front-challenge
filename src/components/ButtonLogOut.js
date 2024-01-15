import React from 'react';
import Text from '../text.json';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'wouter';
import { logOut } from '../redux/Actions'; 


const ButtonLogOut = () => {
    const [ ,setLocation ] = useLocation();
    const dispatch = useDispatch();
    const lenguage = useSelector((state) => state.lenguage); 
    const COPYS = Text[lenguage].logout;

    const handlerLogOut = () => {
        dispatch(logOut());
        setLocation('/login');
        localStorage.removeItem('data_user')
    }


    return(
        <div className='col-12 d-flex justify-content-center'>
            <button className='btn' onClick={handlerLogOut}>
                { COPYS?.button }
            </button>
        </div>
    )
}

export default ButtonLogOut;