import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'wouter';
import Text from '../text.json'
import SelectLenguage from '../components/SelectLenguage';
import { loginSuccess } from '../redux/Actions';
import FormUserLoginUpdate from '../components/FormUserLogin';




const Login = () => {
    const type_password = useSelector((state) => state.inputPassword );
    const lng = useSelector((state) => state.lenguage);
    const user = useSelector( state => state.User);
    const [error_form, setErrorForm] = useState(false);
    const text = Text[lng].login;
    const dispatch = useDispatch();
    const [, setLocation] = useLocation();    


    const save_data_session = (data, data_storage) => {
        data && localStorage.setItem('data_user', JSON.stringify(data));        
        dispatch(loginSuccess());
        setLocation('/home');
    }
    

    const handleAuthSessionRender = () => {
        const data_user = localStorage.getItem('data_user');
        if(data_user){
            save_data_session(false, JSON.parse(data_user));
        }
    }

    const handleLogin = (e) => {
        const {email, password} = e;
        if(email === user.email && password === user.password){
            save_data_session({email, password})
        }else{
            setErrorForm(true)
        }
    }

    

    useEffect(() => {
        handleAuthSessionRender();
    }, [])
   

    return (
        <div className='d-flex flex-wrap flex-column vw-100 vh-100'>
           <div className='col-md-6 col-12 h-100 container d-flex flex-column justify-content-center align-items-center position-relative bg-card'>
                <SelectLenguage positionAbsolute={true}/>
                <div className='col-12 d-flex justify-content-center'>
                    <p className='header-log'>{text?.header}</p>
                </div>
                <FormUserLoginUpdate
                    text={text}
                    type_password={type_password}
                    handleLogin={handleLogin}
                    isLogin={true}
                    stateErrorForm={error_form}
                />
           </div>
           {/* Imagen de login en desktop */}
            <div className='d-none d-lg-block col-6 h-100 bg-login-side'></div>
        </div>
    );
}

export default Login;