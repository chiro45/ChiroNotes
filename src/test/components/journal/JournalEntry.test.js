import { JournalEntry } from "../../../components/journal/JournalEntry";


import {mount} from 'enzyme'
import { Provider } from "react-redux";

import thunk from "redux-thunk";

import configureStore from 'redux-mock-store';
import { activeNote } from "../../../actions/notes";


const middlewares = [thunk];
const mockStore = configureStore(middlewares);




const initState = {
    
};

let store = mockStore(initState);
store.dispatch= jest.fn();

const nota  = {
    id: '1',
    title:'hola',
    body:'mundo',
    date: 0,
    url: 'https//chirolardo'
}


describe('Pruebas en el <JournalEntry/>', () => {
    const wrapper = mount(
        <Provider store={store}>
            
                  <JournalEntry {...nota}/>
            
        </Provider>
)
    test('debe de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot()
    });
   
    
    test('cuando hago click en la nota dispare la nota activa', () => {
      wrapper.find('.journal__entry').prop('onClick')();


      expect(store.dispatch).toHaveBeenCalledWith(
          activeNote(nota.id, {...nota}))
    });
    
});
