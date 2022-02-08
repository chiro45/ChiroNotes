import  { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth'
import { useForm } from '../../hooks/useForm';
import validator  from 'validator';
import { removeError, setError } from '../../actions/ui';



export const LoginScreen = () => {
                   
    const [show, setShow] = useState(false);                            //uso el state para mostrar la contraseña o no
    const {msgError} = useSelector(state=>state.ui)                     //usamos el hook use selector para extraer el msgError del store
    const dispatch = useDispatch();                                     //extraemos el useDispatch


    const [formValues, handleInputChange] = useForm({                   //coustomHook para el manejo del formulario
        email: '',
        password:''
    });

    const {email, password} = formValues;                               //desestructuracion de los datos
    
    const isFormValid = ()=>{                                           //validacion del formulario
        if(!validator.isEmail(email)){
            dispatch(setError('El email es incorrecto'))
            return false;
        }else if( password.length < 8){
            dispatch(setError('La contraseña es menor a 8 caracteres o estas no coinciden'))
            return false;
        }
        dispatch(removeError())
        
        return true;
    }

    const handleLogin = (e)=>{                                           //realiza el envio del formulario, si tiene errores los muestra y sino realiza el dispatch
       e.preventDefault();
       if(isFormValid()){
        dispatch(startLoginEmailPassword(email, password))

       }
    }

    const handleGoogleLogin = ()=>{                                      //en el caso del login con google nos permite realizarla
        dispatch(startGoogleLogin())
    }
    const showOrHiddenPassword = ()=> setShow(!show);                    //funcion para mostrar o no la contraseña

    return (
       
        
        <div>
        
            <h3 className='auth__title'>ChiroNotes <i className=" far fa-edit"></i></h3>
        
        <form onSubmit={handleLogin} className={`animate__animated animate__fadeIn animate__faster`}>
            {    
              msgError &&                                           //realiza la operacion logica para la muestra o no de los errores
             
             <div className='auth__alert-error'>
             <p>{`${msgError}`}</p>
             </div>
                 
             }
        
        <input
        className='auth__input'
        type='text'
        placeholder='Email'
        name='email'
        autoComplete='off'
        value={email}
        onChange={handleInputChange}
        />
        <input
        className='auth__input'
        type={show ? 'text' : 'password'}
        placeholder='Contraseña'
        name='password'
        value={password}
        onChange={handleInputChange}
        />
        <div className='auth__checkbox'>
        <p className='auth__show-passwd'>Mostrar contraseña</p>
        <input type='checkbox'
         onChange={showOrHiddenPassword}/>
        </div>

        <button
        type='submit'
        className='btn btn-primary btn-block'
      
        >Ingresar <i className=' icons fas fa-arrow-right'></i>
        </button>
        
        <div className='auth__social-networks'>
            <p><b></b></p>
             
        <div className="google-btn" 
        onClick={handleGoogleLogin}
        >
            <div className="google-icon-wrapper">
                <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
            </div>
                 <p className="btn-text">
                <b>Ingresa con google</b>
                     </p>
        </div>
        </div>
        <Link to='/auth/register'
        className='link'>
           Crear una cuenta nueva <i className="icons fa fa-angle-double-right"></i>
        </Link>

        </form>

             
    </div>
    
   
    )
}
