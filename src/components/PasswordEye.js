import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showEye, inputPassword } from '../redux/Actions';
import close_eye from '../img/closed-eye.png';
import open_eye from '../img/open-eye.png';



const PasswordEye = () => {
    const dispatch = useDispatch();
    const eye_state = useSelector((state) => state.showEye );
    const [passwordState, setPasswordState] = useState(eye_state);

    const handlePasswordState = () => {
        if(passwordState){
            dispatch(showEye(passwordState))
            dispatch(inputPassword('text'))
        }else{
            dispatch(showEye(passwordState))
            dispatch(inputPassword('password'))
        }
    }


    useEffect(() => {
        handlePasswordState();
    }, [passwordState])
    return(
        <div className='position-eye-password'>
            {eye_state ?
                <div onClick={() => setPasswordState(!passwordState)}>
                    <img src={open_eye} alt='icon_hide_password' className='eye-password'/>
                </div>
                
                :
                <div onClick={() => setPasswordState(!passwordState)}>
                    <img src={close_eye} alt='icon_show_password' className='eye-password'/>
                </div>
            }
        </div>
    )
}   


export default PasswordEye;