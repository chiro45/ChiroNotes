
//definimos los tipos que vamos a ver en el state del redux

export const types ={
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
    
