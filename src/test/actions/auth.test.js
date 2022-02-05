import configureStore from 'redux-mock-store' 
//importamos nuestro middleware
import thunk from 'redux-thunk';
import { login, logout, startLoginEmailPassword, startLogout } from '../../actions/auth';

import { types } from '../../types/types';


const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initState = {
   
};

let store = mockStore(initState);






describe('Pruebas con las acciones del Auth', () => {
    

    beforeEach(()=>{
        store = mockStore(initState)
    })

    test('login y logout deben crear la accion respectiva', () => {

     const loginAction = login('123', 'luciano', 'www.photo.com')

     const logoutAction = logout()


        expect(loginAction).toEqual(
            {
                type: types.login,
                payload: { uid: '123', photoURL: 'www.photo.com', displayName: 'luciano' }
            }
      );


            expect(logoutAction).toEqual(
            {
                 type: types.logout
                 
            }
      );
   
    });


    test('debe de realizar el logout', async() => {
      
        
        await store.dispatch(startLogout())

        const actions = store.getActions()

        

        expect(actions[0]).toEqual( { type: types.logout } )
        expect(actions[1]).toEqual( { type: types.notesLogoutCleaning } )

    });
    test('debe de inicial el starLoginWithEmailAndPassword', async() => {
      
        await store.dispatch( startLoginEmailPassword('rogelio@gmail.com', 'lucianodavid45'))
        
        const actions = store.getActions()

        expect(actions[0]).toEqual({ type: '[UI] Start Logading' })

    });

});
