import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Text from '../text.json';
import { selectLenguage } from '../redux/Actions';


const SelectLenguage = ({positionAbsolute}) => {
    const dispatch = useDispatch();
    const lenguages = Text.lenguage
    const [value, setValue] = useState('en');


    const handlerLenguage = () => { dispatch(selectLenguage(value))}


    useEffect(() => {
        handlerLenguage();
    }, [value])
    return(
        <select value={value} onChange={(e) => setValue(e.target.value)} className={ positionAbsolute && 'select-lng' }>
            {lenguages.map((element, key) => {
                return (<option value={element} key={key}>{element}</option>)
            })}
        </select>    
    )
}

export default SelectLenguage;