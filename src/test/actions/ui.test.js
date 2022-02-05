import { finishLoading, removeError, setError, startLoading } from "../../actions/ui";
import { types } from "../../types/types";



describe('Pruebas en el action ui', () => {
    
    
    
    test('const todas la acciones deben funcionar', () => {
      
        const action = setError('auxilio')

        expect(action).toEqual({
            type: types.uiSetError,
            payload: 'auxilio'
        })

        const removeErrorAction = removeError();
        const startLoaddingAction = startLoading();
        const  finishLoadingAction = finishLoading()  ;      

        expect(removeErrorAction).toEqual({
            type: types.uiRemoverError
        }) 
        expect(startLoaddingAction).toEqual({
            type: types.uiStartLoading
        }) 
        expect( finishLoadingAction).toEqual({
            type: types.uiFinishLoading
        })
    });
    
});
