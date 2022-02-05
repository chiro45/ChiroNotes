import { mount } from "enzyme";
import { Provider } from "react-redux";
import { NoteScreen } from "../../../components/notes/NoteScreen";
import '@testing-library/jest-dom'
import thunk from "redux-thunk";
import configureStore from 'redux-mock-store';
import { activeNote } from "../../../actions/notes";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);


jest.mock('../../../actions/notes',()=>({
    activeNote: jest.fn()
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
        active: {
            id: 1234,
            title: 'title',
            body: 'body',
            date: 0
        },
        notes:[]
        
    }
};
const store = mockStore(initState)
store.dispatch= jest.fn();


describe('Pruebas en el <NoteScreen/>', () => {
    
    const wrapper = mount(
        <Provider store={store}>
        <NoteScreen/>
        </Provider>
    )
    
    test('debe de mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot()

    });


    test('debe de disparar el active note', () => {
      
        wrapper.find('input[name="title"]').simulate('change',{
            target: {
                name: 'title',
                value: 'hola de nuevo'
            }
        })

        expect(activeNote).toHaveBeenLastCalledWith(
            1234, {
                "body": "body",
                 "date": 0, "id": 1234,
                  "title": "hola de nuevo"
            }
            )

    });
    
    
});
