import { Sidebar } from "../../../components/journal/Sidebar";

import {mount} from 'enzyme'
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import thunk from "redux-thunk";
import '@testing-library/jest-dom'
import configureStore from 'redux-mock-store';

import { startNewNote } from "../../../actions/notes";
import { startLogout } from "../../../actions/auth";
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock("../../../actions/auth",()=>({
    startLogout : jest.fn()
}))
jest.mock('../../../actions/notes',()=>({
    startNewNote: jest.fn()
}))


const initState = {
    auth: {
        uid:'123123',
        name:'luciano',
        photoURL: null
    },
    ui: {
        loading: false,
        msgError: null
    },
    notes:{
        active: null,
        notes:[]
        
    }
};

let store = mockStore(initState);
store.dispatch= jest.fn();


describe('Pruebas en el <Sidebar/>', () => {
    const wrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                      <Sidebar/>
                </MemoryRouter>
            </Provider>
    )
    
    test('debe de mostrarse correctamente', () => {
      expect(wrapper).toMatchSnapshot()
    });
    test('debe de llamar el startLogout', async() => {
        
            wrapper.find('button').prop('onClick')()

            expect(startLogout).toHaveBeenCalled()
      });
      test('debe de llamar el startNewNote', () => {
            wrapper.find('.journal__new-entry').prop('onClick')()

            expect(startNewNote).toHaveBeenCalled()
      });
        
});
