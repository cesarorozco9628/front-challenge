import React, { useState } from 'react';
import ButtonLogOut from './ButtonLogOut';
import { Link } from 'wouter';
import Text from '../text.json'
import { useSelector } from 'react-redux';
import SelectLenguage from './SelectLenguage';
import IconMenu from '../img/icon_menu.png';
import IconClose from '../img/icon_close.png'




const Menu = () => {
    const lenguage = useSelector(state => state.lenguage);
    const user = useSelector( state => state.User);
    const [isActive, setIsActive] = useState(false);
    const COPYS = Text[lenguage].menu;
    
    const handlerMenuMobile = () => {
        setIsActive(!isActive)   
    }

    return(
        <div className='col-lg-2'>
            <div className='d-lg-none icon-menu-mobile' id='id_icon_menu_mobile' onClick={handlerMenuMobile}>
                <img src={IconMenu} alt='icon_menu' width={30}/>
            </div>
            
            <div className={`col-12 vh-100 bg-menu d-lg-block
                    ${isActive ? 'fullscreen-menu active' : 'd-none'}`} 
                    id='id_menu'
                >

                <div className='px-2 py-3 mb-3'>
                    <div className='d-flex col-12 justify-content-center mb-2 position-relative'>
                        <div className='profile-user d-flex justify-content-center align-items-center'>
                            <span className='letter-user'>U</span>
                        </div>

                        <div className='position-absolute d-md-none icon-close-menu' onClick={handlerMenuMobile}>
                            <img src={IconClose} alt='icon_close' width={20}/>
                        </div>
                    </div>

                    <p className='text-center'>{user?.email}</p>
                </div>
                <nav className='mb-4' onClick={handlerMenuMobile}>
                    <Link to='/home' className='ps-3 py-2 mb-2 col-12 item-menu d-block'>{COPYS?.main}</Link>
                    <Link to='/settings'  className='ps-3 py-2 mb-2 col-12 item-menu d-block'>{COPYS?.settings}</Link>
                </nav>
                <div className='col-12 d-flex ps-3 mb-5'>
                    <p className='pe-1'>{COPYS.lenguage}</p>
                    <SelectLenguage />
                </div>


                <ButtonLogOut/>
            </div>
        </div>
        
    );
}

export default Menu;