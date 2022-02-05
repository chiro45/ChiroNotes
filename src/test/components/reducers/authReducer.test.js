import { authReducer } from "../../../components/reducers/authReducer";
import { types } from "../../../types/types";


describe('Pruebas en el authReducer', () => {
    test('Debe de retornar el valor por defecto', () => {
      
        const state = authReducer({},{})

        expect(state).toEqual({})


    });
    test('Debe de retornar el loggin', () => {
      const initiaState = {}
      const action = {
          type: types.login,
          payload: {
            uid: 123123123,
            photoURL: '222',
            displayName: 'luciano'
          }
      };
        const state = authReducer(initiaState, action)

        expect(state).toEqual(
            {
            uid: 123123123,
            photoURL: '222',
             name: 'luciano'
            }
        )


    });
    test('Debe de retornar el logout', () => {
        const initiaState = {
            uid: 123123123,
            photoURL: '222',
             name: 'luciano'
            }
        const action = {
            type: types.logout,
            payload: {}
        };
          const state = authReducer(initiaState, action)
  
          expect(state).toEqual({})
  
  
      });
        
});
