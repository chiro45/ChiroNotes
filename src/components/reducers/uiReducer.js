import { types } from "../../types/types"

//el reducer se encarga de las acciones del la interfaz
//declaramos el initialState
const initialState ={
    loading: false,
    msgError: null
}

export const uiReducer = (state = initialState,action)=>{
    switch(action.type){
        case types.uiSetError:          
            return{                 //retorna el state y el msgError
                ...state,
                msgError: action.payload
        } 
        case types.uiRemoverError:
            return{
                ...state,           //retorna el state y el msgError en null (quiere decir que esta perfecto)
                msgError: null
            }
        case types.uiStartLoading:
            return{
                ...state,
                loading: true
            }
     case types.uiFinishLoading:
                return{
                    ...state,
                    loading: false
                }

        default:                    //siempre debe de retornar un state
        return state
    }
}