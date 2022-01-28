import Swal from "sweetalert2";


import { db } from "../firebase/firebaseConfing";

import { types } from "../types/types";

import {loadNotes} from '../helpers/loadNotes'
import { fileUpload } from "../helpers/fileUpload";




export const startNewNote = ()=>{
    return async (dispatch, getState)=>{       //el getState nos trae todo el state de la aplicacion
        const {uid} = getState().auth;   
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }
        const doc =  await db.collection(`${uid}/journal/notes`).add(newNote)     
        
        dispatch(activeNote(doc.id, newNote))

        dispatch(addNewNote(doc.id, newNote))
    }
}

export const activeNote = (id,note )=>({
        type: types.notesActive,
        payload: {
            id,
            ...note
        }
});

export const addNewNote = (id, note)=>({
        type: types.notesAddNew,
        payload:{
            id,
            ...note
        }
})


export const startLoadingNotes = (uid) =>{
    return async (dispatch)=>{
        const notes = await loadNotes(uid)
      
        dispatch(setNotes(notes))
    }
}
export const setNotes = (notes)=>({
    type: types.notesLoad,
    payload: notes
})


 export const startSaveNote = (note)=>{
    return async(dispatch, getState)=>{
        try {
            const {uid} = getState().auth;
        if(!note.url){
            delete note.url;
        }
        const noteToFirestore ={...note}

        delete noteToFirestore.id;

        if(note.title.length > 1){
        await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);

        dispatch(refreshNote(note.id,note ))

        Swal.fire('Guardado!', note.title, "success")
        }else{
            Swal.fire('Deberia tener un titulo!', note.title, "error")
        }

        } catch (error) {
            Swal.fire('Error en el guardado!',"hubo un problema, intenta nuevamente", "error")
        }


    }
}

export const refreshNote = (id, note) =>({
    type: types.notesUpdated,
    payload:{
        id,
        note:{
                id,
                ...note
        }

        
    }
})


export const startUploading =(file) =>{
    return async(dispatch, getState)=>{
        const {active:activeNote} = getState().notes

        Swal.fire({
            title: 'Subiendo...',
            text: 'Por Favor Espere...',
            allowOutsideClick: false,
            didOpen:()=>{
                Swal.showLoading()
            }
            
        });
       
        const fileUrl = await fileUpload(file)
        activeNote.url = fileUrl;
        dispatch(startSaveNote(activeNote))

        Swal.close();
    }
}


export const startDeleting = (id)=>{
    return async(dispatch, getState)=>{
        
        const uid = getState().auth.uid;

        await db.doc(`${uid}/journal/notes/${id}`).delete();

        dispatch(deleteNote(id))

        Swal.fire('Eliminado!','', "success")
    }
}


export const deleteNote = (id)=>({
    type: types.notesDelete,
    payload: id
})


export const noteLogout = () =>({
    type: types.notesLogoutCleaning
   
})
