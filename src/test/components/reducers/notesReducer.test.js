
import { act } from "@testing-library/react";
import { noteReducer } from "../../../components/reducers/notesReducers";
import { types } from "../../../types/types";



describe('Pruebas en el notesReducer', () => {
    
  const intialState = {
    notes:[],
    active:null
  }
    test('debe de retornarl el estado por defecto', () => {
      const state = noteReducer(intialState, {})

      expect(state).toEqual({notes:[],active:null})
    });


    test('debe re retornar la nota activa', () => {
      const action = {
        type: types.notesActive,
        payload: {
            id: 12312312,
        }
      }  


      const state = noteReducer( intialState, action)
      expect(state).toEqual({notes: [], active: { id: 12312312 }})
    });


    test('debe limpiar todo cuando se desloguea', () => {
      const state  = {
        active: true,
        notes: [1,2,3,4]
      }
      const action = {
        type: types.notesLogoutCleaning
      }

      const state1 = noteReducer(state,action)
      expect(state1).toEqual({
        active: null,
        notes: []
      })


    });
    
    
    
    


});
