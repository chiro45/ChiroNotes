import React, { useEffect, useRef } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { activeNote, startDeleting } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';

import { NoteAppBar } from './NoteAppBar';

export const NoteScreen = () => {


  const {active:note} = useSelector(state => state.notes)

  const dispatch = useDispatch();
  
  const activeId = useRef(note.id)

  const [formValues, handleInputChange, reset]=useForm(note)

  useEffect(()=>{
     
   if(note.id !== activeId.current){
     reset(note)
     activeId.current = note.id
   }

  },[note, reset])
 
  useEffect(()=>{
     
    dispatch(activeNote(formValues.id, {...formValues}))
 
   },[formValues , dispatch])


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
     
          <button 
          className='btn btn-danger'
          onClick={handleDelete}
          >Borrar Nota</button>
        
    </div>
  );
};
