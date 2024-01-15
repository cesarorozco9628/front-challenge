import React from "react";
import Menu from "../components/Menu";
import { useDispatch, useSelector } from "react-redux";
import Text from '../text.json';
import FormUserLoginUpdate from "../components/FormUserLogin";
import { UserUpdate } from "../redux/Actions";


const SettingsPages = () => {
    const dispatch = useDispatch();
    const type_password = useSelector((state) => state.inputPassword );
    const lenguage = useSelector( state => state.lenguage );
    const COPYS = Text[lenguage].login
   

    const handlerUpdate = (e) => {
        const {email, password} = e;
        dispatch(UserUpdate({email, password}));
    
    }

    return(
        <div className=' d-flex flex-wrap'>
            <Menu/>
            <div className='col-md-10 col-12 container pb-3'>
                <div className='px-3 pt-4'>
                    <h1>{Text[lenguage].home.title}</h1>
                </div>
                <FormUserLoginUpdate
                    text={COPYS}
                    handleLogin={handlerUpdate}
                    type_password={type_password}

                />
            </div>
        </div>
        
    )
}

export default SettingsPages;