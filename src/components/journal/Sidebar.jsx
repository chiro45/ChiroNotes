
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { startNewNote } from '../../actions/notes';
import { JournalEntries } from './JournalEntries';




export const Sidebar = () => {
 // declaramos el dispatch del redux
  const dispatch = useDispatch();
  //extraemos el name del stores del state.auth
  const {name , photoURL} = useSelector(state => state.auth);


  const state = useSelector(state => state);
 
  
 
  
  const handleLogout=()=>{

    dispatch(startLogout())
  }

  //activa el disparo del tartnNewNote
  const handleAddNew = ()=>{
    dispatch(startNewNote())
    
  }
  
  return (
  <aside className='journal__sidebar ' id='sidebar'>

      <div className='journal__sidebar-navbar '>
          <div className='journal__containerName'>
          
          {
             (photoURL)
              ? <div >  <img className='journal__img' src={photoURL}/> <p className='journal__name'>{name}</p></div>
              : <div >  <i className=" journal__img fas fa-user"></i> <p className='journal__name'>{name}</p></div>
              // : <span className='journal__name'>   {name}</span>
          }
          </div>
      </div>

      <div className='journal__new-entry'
      onClick={handleAddNew}>
            <i className='far fa-calendar-plus fa-5x'></i>
            <p className='marginTop-5'> Nueva Entrada</p>
      </div>
      <JournalEntries />
        <button 
        className='btn-navBar'
        onClick={handleLogout}
        >
            Cerrar Sesión <i className="fas fa-sign-out-alt"></i>
        </button>
  </aside>
  )
};
