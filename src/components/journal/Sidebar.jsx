import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { startNewNote } from '../../actions/notes';
import { JournalEntries } from './JournalEntries';




export const Sidebar = () => {
 // declaramos el dispatch del redux
  const dispatch = useDispatch();
  //extraemos el name del stores del state.auth
  const {name , photoURL} = useSelector(state => state.auth);

  const [state, setstate] = useState(false);
 
  
 
  
  const handleLogout=()=>{

    dispatch(startLogout())
  }

  //activa el disparo del tartnNewNote
  const handleAddNew = ()=>{
    dispatch(startNewNote())
    
  }
  
  const handleNav = ()=>{
    setstate(!state)
    

}

  return (
    <>
    
  <aside  className={state ?'journal__sidebar hidden' : 'journal__sidebar '} id='sidebar'>
        
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
  <div 
        className={state ? 'notes__nav-toggle sale1'  : 'notes__nav-toggle entra1'}
        onClick={handleNav}>
            <span className={state ?'nav-toggle appBar hidden' : 'nav-toggle appBar  '} ><i className=" fas fa-times "></i></span>
            <span className={state ?'nav-toggle appBar entra' : 'nav-toggle appBar hidden'} ><i className="fas fa-bars"></i></span>
  </div>
  </>
  )
};
