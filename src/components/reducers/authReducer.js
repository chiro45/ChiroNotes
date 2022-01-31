import { types } from "../../types/types";


//eeste reducer nos ayuda al login del user

export const authReducer = (state={}, action) => {
    switch(action.type){
        case types.login:
            return{
                uid: action.payload.uid,                //en el caso de que el login sea correcto retonra el uid y el name
                name: action.payload.displayName,
                photoURL: action.payload.photoURL
            }
            case types.logout:                          //el logount vuelve al state inicial con un objeto vacio
                return {}
                
            default: 
            return state                                //siempre debe de retornar un state
    }       
};
