import React from 'react';
import { useSelector } from 'react-redux'; 
import { Link } from 'wouter';



const PageNotFound = () => {
    const login = useSelector((state) => state.login)
 
    return(
        <div className='d-flex flex-sm-wrap  vw-100 vh-100 justify-content-center align-items-center container'>
            <div className='my-auto w-100'>
                <div className='font-error-page col-12 d-flex justify-content-center'>
                    <p>404</p>
                </div> 
                <div className='col-12'>
                    <h1 className='text-center'>Ups algo salio mal...</h1>
                    <p className='text-center'>No hemos encontrado la pagina que buscas, asegurate de estar en la liga correcta.</p>
                    <div className='col-12 d-flex justify-content-center'>
                        <div className='btn'>
                            {login ? 
                                <Link href='/'>Home</Link>
                                :
                                <Link href='/login'>Inicia sesión</Link>
                            }
                        </div>
                    </div>
                </div>    
            </div>
        </div>
    );
}

export default PageNotFound;