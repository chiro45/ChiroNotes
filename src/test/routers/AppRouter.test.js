import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import '@testing-library/jest-dom';

import { AppRouter } from '../../routers/AppRouter';
import { act } from '@testing-library/react';

import { firebase } from '../../firebase/firebaseConfing'
import { login } from '../../actions/auth';


jest.mock('../../actions/auth',()=>({
    login: jest.fn()
}))


const middlewares = [thunk];
const mockStore = configureStore(middlewares);


const initState = {
    auth: {},
    ui: {
        loading: false,
        msgError: null
    },
    notes:{
        active:{
            id: 'ABC',
            
        },
        notes:[]
        
    }
};

let store = mockStore(initState);
store.dispatch= jest.fn();



describe('Pruebas en<AppRouter/>', () => {

    test('debe de llamar el login si estoy autenticado', async() => {


        let user
        
        
        await act(async()=>{
            
            const userCredential = await firebase.auth().signInWithEmailAndPassword('luciano@gmail.com', '123456')
            user = userCredential.user;

            const wrapper = mount( 
                <Provider store={ store }>
                    <MemoryRouter>
                        <AppRouter /> 
                    </MemoryRouter>
                </Provider>
            
            )
        })

        expect(login).toHaveBeenCalledWith('2iKt5X6RkmYM4jz7M829mq9jckJ3', null, null);


        
    });
    
});
