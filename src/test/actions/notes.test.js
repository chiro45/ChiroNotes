


/** * @jest-environment node */
import configureStore from 'redux-mock-store' 
//importamos nuestro middleware
import thunk from 'redux-thunk';
import { startLoadingNotes, startNewNote, startSaveNote, startUploading} from '../../actions/notes';
import { db } from '../../firebase/firebaseConfing';
import { fileUpload } from '../../helpers/fileUpload';
import { types } from '../../types/types';

jest.mock('../../helpers/fileUpload',()=>({
    fileUpload: jest.fn(()=>{
        return 'https://hola-mundo.com/cosa.jpg'
    })
}))
const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initState = {
    auth: {
        uid: 'uid-test'
    },
    notes: {
        active: {
            id: 'sCKNiJkJOfRJZ5I6Oqg2',
            title: 'titulo',
            body: 'cuerpo'
        }
    }
};

let store = mockStore(initState);


describe('Pruebas en el notes.js', () => {


    beforeEach(()=>{
        store = mockStore(initState)
    })



    test('debe de crear una nueva nota starNewNote', async() => {
        
         await store.dispatch(startNewNote());

        const actions = store.getActions()
       

        expect(actions[0]).toEqual({
            type: types.notesActive,
            payload:{
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number)
            }
        }
        )
        expect(actions[1]).toEqual({
            type: types.notesAddNew,
            payload:{
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number)
            }
        }
        )

        const docId = actions[0].payload.id;
        

        await db.doc(`/uid-test/journal/notes/${docId}`).delete();

    });
  
     test('startLoadingNotes debe cargar las notas', async() => {
        
         await store.dispatch( startLoadingNotes('uid-test') );
         const actions = store.getActions();

         expect( actions[0] ).toEqual({
             type: types.notesLoad,
             payload: expect.any(Array)
         });

         const expected = {
             id: expect.any(String),
             title: expect.any(String),
             body: expect.any(String),
             date: expect.any(Number),
         }

        // expect( actions[0].payload[0] ).toMatchObject( expected );


     })


     test('startSaveNote debe de actualizar la nota', async() => {

         const note = {
            id: 'sCKNiJkJOfRJZ5I6OqgW',
             title: 'titulo2',
             body: 'body'
         };

         await store.dispatch( startSaveNote( note ) );

         const actions = store.getActions();
         // console.log(actions);
         expect( actions[0].type ).toBe( types.notesUpdated );

         const docRef = await db.doc(`/uid-test/journal/notes/${ note.id }`).get();

         expect( docRef.data().title ).toBe( note.title );
        
     })


    
    
    //  test('startUploading debe de actualizar el url del entry', async() => {


    //     const file = new File([],'file.jpg')
        
    //     await store.dispatch(startUploading(file))

    //     const docRef = await db.doc(`/uid-test/journal/notes/${ initState.notes.active.id }`)

    //     expect(docRef.data().url).toBe('https://hola-mundo.com/cosa.jpg')

    //  })
     
    

    
    


})
