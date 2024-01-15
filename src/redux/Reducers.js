import { ACTIONS_TYPE } from './Actions';

const INITIAL_STATE = {
    login: false,
    User: {
        email:'user_master@gmail.com',
        password:'user_password'
    },
    showEye:false,
    inputPassword:'password',
    Error:'',
    countries:[],
    lenguage:'en',
}

const ReducerUser = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ACTIONS_TYPE.loginAccess:
            return {
                ...state,
                login: true,
            }
        case ACTIONS_TYPE.logOut:
            return {
                ...state,
                login: false,
            }
        case ACTIONS_TYPE.UserUpdate:
            return {
                ...state,
                User: action.payload
            }
        case ACTIONS_TYPE.Error:
            return {
                ...state,
                Error:action.payload
            }
        case ACTIONS_TYPE.showEye:
            return {
                ...state,
                showEye:action.payload
            }
        case ACTIONS_TYPE.inputPassword:
            return {
                ...state,
                inputPassword:action.payload
            }
        case ACTIONS_TYPE.lenguage:
            return {
                ...state,
                lenguage:action.payload
            }  
        case ACTIONS_TYPE.countries:
            return {
                ...state,
                countries:action.payload
            } 
        default:
            return state;    
    }
}

export default ReducerUser;