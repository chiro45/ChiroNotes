import { uiReducer } from "../../../components/reducers/uiReducer";
import { types } from "../../../types/types";




describe('Pruebas sobre el uiReducer', () => {
    const initialState ={
        loading: false,
        msgError: null
    }

    test('debe de retornar el valor default', () => {
        
        const state = uiReducer(initialState, {})


        expect(state).toEqual(initialState)



    });


    test('Deberia de mostrar el error', () => {
        const action ={
            type: types.uiSetError,
            payload:{
                err: 'error'
            }
        }
        const state = uiReducer(initialState, action)
        
        expect(state).toEqual({ loading: false, msgError: { err: 'error' } })
        
    });
    test('Deberia de remover el error', () => {
        const action ={
            type: types.uiRemoverError,
            payload:{}
        }
        
        const state = uiReducer(initialState, action)
       
        expect(state).toEqual({ loading: false, msgError: null })
        
    });

    test('deberia de inicializar el loading', () => {
        const action ={
            type: types.uiStartLoading,
            payload:{
                loading:true
            }
        }
        const state = uiReducer(initialState, action)
        expect(state).toEqual( { loading: true, msgError: null })



    });
    test('deberia de finalizar el loading', () => {
        const action ={
            type: types.uiFinishLoading,
            payload:{
                loading:false
            }
        }
        const state = uiReducer(initialState, action)
        expect(state).toEqual( { loading: false, msgError: null })



    });
    
    
    

});
