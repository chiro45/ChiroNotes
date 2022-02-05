import { types } from "../../types/types";


describe('Prueba sobre el types', () => {
    
    
 const types1 ={
    //types login
    login: '[auth] Login',
    logout: '[auth] Logout',

    //uiErrors
    uiSetError: '[UI] Set Error',
    uiRemoverError: '[UI] Remove Error ',
    //loadings
    uiStartLoading: '[UI] Start Logading',
    uiFinishLoading: '[UI] Finish Loading',
    //notes
    notesAddNew: '[Notes] New Note',
    notesActive: '[Notes] Active Note',
    notesLoad: '[Notes] Load Notes',
    notesUpdated: '[Notes] Updated Note',
    notesFileUrl: '[Notes] Update Image url',
    notesDelete: '[Notes] Delete',
    notesLogoutCleaning: '[Notes] Logout Cleaning'

}
     test('deben ser exactamente iguales', () => {
      
        expect(types).toEqual(types1)


    });
    
});
