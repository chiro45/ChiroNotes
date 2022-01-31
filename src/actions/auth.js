import Swal from 'sweetalert2'


import { types } from "../types/types"
import {firebase, googleAuthProvider} from '../firebase/firebaseConfing'
import { finishLoading, startLoading } from "./ui"
import { noteLogout} from './notes'
//acciones que son usadas en el auth




export const startLoginEmailPassword = (email,password)=>{
    return(dispatch)=>{
        
        dispatch(startLoading())
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then( ({ user }) =>{


            dispatch(login(user.uid, user.displayName))
            
            
        dispatch(finishLoading())

        })
        .catch(e => {
        Swal.fire("Error","El usuario o contraseña son incorrectos","error")
    })
}}
export const startRegisterWhithEmailPasswordName = (email,password, name)=>{
    return(dispatch)=>{
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then( async({ user })=>{

            await user.updateProfile({
                displayName: name

            })

            dispatch(
                login(user.uid, user.displayName)
             )
            
         
        })
        .catch(e => {
            Swal.fire("Error","El usuario ya ha sido registrado","error")
        
    })

}}


export const startGoogleLogin = ()=>{
    return (dispatch)=>{
       firebase.auth().signInWithPopup(googleAuthProvider) 
       .then(({ user })=>{

           dispatch(
               login(user.uid, user.displayName, user.photoURL),

               console.log(user.photoURL)
                 
               )
            })
            
       
       
       
    }
}


export const login = (uid, displayName, photoURL)=>{
        return{
            type: types.login,
            payload: {
                uid,
                photoURL,
                displayName,
            }
        }
}


export const startLogout = () =>{
    return async(dispatch)=>{
        firebase.auth().signOut()

        dispatch(logout())
        
        dispatch(noteLogout())
    }
}

export const logout = () =>({
    type: types.logout
})


