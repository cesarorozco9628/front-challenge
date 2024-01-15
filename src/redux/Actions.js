import axios from "axios";
import Text from '../text.json';

export const ACTIONS_TYPE = {
    loginAccess: 'LOGIN_ACCESS',
    logOut: 'LOG_OUT',
    UserUpdate: 'USER_UPDATE',
    showEye:'SHOW_EYE',
    inputPassword:'INPUT_PASSWORD',
    lenguage:'LENGUAGE',
    countries:'COUNTRIES',
    Error: 'ERROR'
}

export const loginSuccess = () => {
    return {
        type: ACTIONS_TYPE.loginAccess,
    }
}

export const logOut = () => {
    return {
        type: ACTIONS_TYPE.logOut,
    }
}
export const UserUpdate = (value) => {
    return {
        type: ACTIONS_TYPE.UserUpdate,
        payload: value,
    }
}

export const showEye = (value) => {
    return {
        type: ACTIONS_TYPE.showEye,
        payload: value,
    }
}

export const inputPassword = (value) => {
    return {
        type: ACTIONS_TYPE.inputPassword,
        payload: value,
    }
}

export const selectLenguage = (value) => {
    return {
        type: ACTIONS_TYPE.lenguage,
        payload: value,
    }
}

export const setDataCountries = (value) => {
    return {
        type: ACTIONS_TYPE.countries,
        payload: value,
    }
}

export const ErrorPetition = (value) => {
    return {
        type: ACTIONS_TYPE.Error,
        payload: value,
    }
}


export const get_countries_all = async (dispatch, setLoading) => {
    axios.get(Text.LINK_API_REST)
        .then((response) => {
            const position = 0;        
            const data = response.data.map(element => {
                let key_currency = Object.keys(element.currencies)[position];

                // Verificar si las propiedades necesarias están presentes
                const name = element.name?.common || 'N/A';
                const capital = element.capital?.[position] || 'N/A';
                const continent = element.continents?.[position] || 'N/A';

                return {
                    name,
                    capital,
                    continent,
                    population: element.population || 'N/A',
                    currency: element.currencies[key_currency]?.name || 'N/A'
                };
            });
            setLoading(false);
            dispatch(setDataCountries(data))
        }).catch((error) => {
            dispatch(ErrorPetition(error));
        })
}