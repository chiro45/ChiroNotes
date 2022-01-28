import { types } from "../../types/types"




//declaramos un inialState

const intialState = {
    notes:[],
    active:null
}
//este reducer es para las notas, es decir nos ayuda a saber el tipo y el retorno

export const noteReducer = (state = intialState, action)=>{

    switch (action.type) {

         case types.notesAddNew:
         return{
                ...state,
                notes:[action.payload,...state.notes]
         }
         case types.notesActive:
         return {
            ...state,   
            active:{
                ...action.payload

            }
         }
         case types.notesLoad:
             return{ 
                ...state,
                notes:[...action.payload]
             }
        case types.notesUpdated:      //cuando se updatea
            return{
                ...state,           //retornamos el state
                notes: state.notes.map( //y hacemos un map de las notas si el id de la nota es igual devolvemos el payload.note 
                    note => note.id === action.payload.id           //sino solo devolvemos la nota actual
                            ? action.payload.note
                            : note
                )
            }

        case types.notesDelete:        //en el caso de eliminar una nota nos retorna el state, la activa en null 
            return{                     // y las notas recibe un nuevo arreglo sin la nota eliminada
            ...state,
            active: null,
            notes: state.notes.filter(note=> note.id !== action.payload)

            }

        case types.notesLogoutCleaning: //cuando el usuario deloguea todo debe ser limpiado
            return{
                ...state,
                active:null,
                notes: []
            }   
        default:        //siempre se debe retornar un state
            return state
    }


}