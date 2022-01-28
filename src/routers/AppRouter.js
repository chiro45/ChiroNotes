import React, { useEffect, useState } from 'react'
import {firebase} from '../firebase/firebaseConfing'
//importarmos lo necesario de reactRouter
import{
    BrowserRouter as Router,
    Switch,
    Redirect
    
} from 'react-router-dom'
import { JournalScreen } from '../components/journal/JournalScreen'
import { AuthRouter } from './AuthRouter'
import { useDispatch } from 'react-redux'
import { login } from '../actions/auth'
import { LoadingScreen } from '../components/auth/LoadingScreen'
import {  PrivateRoutes } from './PrivateRoutes'
import { PublicRoutes } from './PublicRoutes'
import { startLoadingNotes } from '../actions/notes'




export const AppRouter = () => {
    //declaramos el disparo
    const dispatch = useDispatch()
    //hacemos un "cheking" => esto es para hacer handar el loadingScreen
    const [cheking, setCheking] = useState(true);

    const [isLoggedIn, setisLoggedIn] = useState(false);    //nos permite saber si esta autenticado o no


    useEffect(()=>{
        firebase.auth().onAuthStateChanged( async(user)=>{ // el observable detecta el cambio en el auth
            if(user?.uid){ //evalua si existe el uid sino se sale
                dispatch(login(user.uid, user.displayName))
                setisLoggedIn(true)
                //hacemos el disparo para la carga de las notas
                dispatch(startLoadingNotes(user.uid))
               

            }else{
                setisLoggedIn(false)
            }
            setCheking(false)
        });
    },[dispatch, setCheking, setisLoggedIn]) // la dependencia vacia solo se ejecuta una vez 

    if(cheking){
        return(
            <LoadingScreen/>
        )
    }
    return (
        //Router es un higth order compounten que 
        <Router>
            <div>   
               
            <Switch>

                <PublicRoutes
                    isAuthenticated={isLoggedIn}
                    path='/auth'
                    component={AuthRouter}
                />

                <PrivateRoutes
                    exact
                    isAuthenticated={isLoggedIn}
                    path='/'
                    component={JournalScreen}
                />

                <Redirect to="/auth/login" />
                
            </Switch>

            </div>


        </Router>
    )
}
