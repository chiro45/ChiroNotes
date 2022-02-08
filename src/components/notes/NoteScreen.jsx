import  { useEffect, useRef } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { activeNote, startDeleting } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';

import { NoteAppBar } from './NoteAppBar';

export const NoteScreen = () => {

  //extraemos el active del state 
  const {active:note} = useSelector(state => state.notes)
  // declaramos el dispatch
  const dispatch = useDispatch();
  //nos retorna un el id mutable
  const activeId = useRef(note.id)
  //utilizamos el useForm y mandamos la nota como el intialState
  const [formValues, handleInputChange, reset]=useForm(note)
  //el useEffect nos 
  useEffect(()=>{
          //si el id de la nota es diferente al actual
        if(note.id !== activeId.current){
          //resetea la nota
          reset(note)
          //y le cambiamos el id
          activeId.current = note.id
        }

  },[note, reset])
  //cuando se produzca un cambio en el formValues
  useEffect(()=>{
     //se produce el 
    dispatch(activeNote(formValues.id, {...formValues}))
 
   },[formValues , dispatch])

   //desestructuramos los datos del formValue
  const {body, title, id} = formValues;


  const handleDelete=()=>{

    
    dispatch(startDeleting(id))
    
  }



  return (
    <div className='notes__main-content animate__animated animate__fadeInRight animate__fast'>
        <NoteAppBar/>

        <div className='notes__content '>
                <input
                type='text'
                placeholder='Agrega un titulo'
                className='notes__title-input'
                autoComplete='off'
                value={title}
                name='title'
                onChange={handleInputChange}
                ></input>
                <textarea
                placeholder='Qué paso hoy?'
                className='notes__textarea'
                value={body}
                name='body'
                onChange={handleInputChange}
                  >
                </textarea>

               {
                  (note.url) &&
                  <div className='notes__image'>
                  <img
                  src={note.url}
                  alt='imagen'

                  ></img>
                </div>
                } 

        </div>
     

        <div className='journal__containerButton'>
          <button 
          className='btn btn-danger'
          onClick={handleDelete}
          >Borrar Nota</button>
        </div>
    </div>
  );
};
