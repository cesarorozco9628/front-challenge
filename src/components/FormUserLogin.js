import React from "react";
import { useForm } from "react-hook-form";
import PasswordEye from "./PasswordEye";


const FormUserLoginUpdate = ({handleLogin, text, stateErrorForm, type_password, isLogin}) => {
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const { register,handleSubmit, formState: { errors },} = useForm();
    

    return (
        <form onSubmit={handleSubmit(handleLogin)} className='col-12 d-flex flex-column justify-content-center align-items-center'>
            {stateErrorForm && 
                <div className="error-message-container" >
                    <div className="error-message" >{text?.errorForm}</div>
                </div>
            }
            
            {/* Input de Email */}
            <div className="mb-4 position-relative col-12 col-md-10 col-lg-6">
                <input 
                    type="text"
                    className="form-control col-10" 
                    {...register("email", { pattern: { value: regexEmail, message: text?.emailError }} )}
                    placeholder={text?.placeholder_email}
                    id="id_email" 
                    />
                {errors.email && <p className='error-message-field'>{errors.email.message}</p>}
            </div>
            {/* Input de Password */}
            <div className="mb-4 col-12 col-md-10 col-lg-6 position-relative">
                <input 
                    type={type_password}
                    className="form-control"
                    {...register("password", { required:text.passwordError })}
                    placeholder={text.placeholder_password}
                    id='id_password' 
                />
                <PasswordEye/>
                {errors.password && <p className='error-message-field'>{errors.password.message}</p>}
            </div>
            <button type="submit" id='id_btn_login' className='btn btn-primary col-12 col-md-10 col-lg-6 '>
                {isLogin ? text.login : text.Update}
            </button>
        </form>
    )
}

export default FormUserLoginUpdate;