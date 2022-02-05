import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm';
import validator  from 'validator';
import {startRegisterWhithEmailPasswordName} from '../../actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';




export const RegisterScreen = () => {
    const dispatch = useDispatch();
    const {msgError} = useSelector(state=>state.ui)

    const [formValues, handleInputChange] = useForm({           //utilizamos el coustomHook para el manejo del formulario 
        name: 'fernando',                                               //declaramos el initialState
        email: 'fernando@gmail,cim',
        password: '123123',
        password2: '123123',
    });

    const {name, email , password, password2} = formValues;     //desestructuracion de los datos
    const handleRegister = (e)=>{
        e.preventDefault();
        if(isFormValid()){
            dispatch(startRegisterWhithEmailPasswordName(email, password, name)) //si no hay errores en el form se realiza la operacion

        }
    }

    
    const isFormValid = ()=>{                                                           //realiza la verificacion de los datos
        if(name.trim().length < 5 ){
            dispatch(setError('El nombre de usuario debe ser mayor a 5 caracteres'))
            return false;
        } else if(!validator.isEmail(email)){
            dispatch(setError('El email es incorrecto'))
            return false;
        }else if(password !== password2 || password.length < 8){
            dispatch(setError('La contraseña es menor a 8 caracteres o estas no coinciden'))
            return false;
        }
        dispatch(removeError())
        return true;
    }
    return (
        <div>
            <h3 className='auth__title'>ChiroNotes <i className="  far fa-edit"></i></h3>
                
            
            <form
             onSubmit={handleRegister}
             className={`animate__animated animate__fadeIn animate__faster`}>

                 {    
                  msgError &&                   //realiza la comprobacion para mostrar en pantalla los errores o no
                 
                 <div className='auth__alert-error'>    
                 <p>{`${msgError}`}</p>
                 </div>
                     
                 }
            <input
            className='auth__input'
            type='text'
            placeholder='Nombre'
            name='name'
            autoComplete='off'
            onChange={handleInputChange}
            />
            <input
            className='auth__input'
            type='text'
            placeholder='Email'
            name='email'
            autoComplete='off'
            onChange={handleInputChange}
            />
            <input
            className='auth__input'
            type='text'
            placeholder='Contraseña'
            name='password'
            onChange={handleInputChange}
            />
            <input
            className='auth__input'
            type='text'
            placeholder='Confirma tu Contraseña'
            name='password2'
            onChange={handleInputChange}
            />

            <button
            type='submit'
            className='btn btn-primary btn-block marginBottom-5'
           
            >Registrarse <i className=' icons fa fa-sign-in-alt'></i>
            </button>
            
            
            <Link to='/auth/login'
            className='link '>
              ¿Ya te has Registrado?
            </Link>

            </form>


        </div>
    )
}
