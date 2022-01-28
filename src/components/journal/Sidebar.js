
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { startNewNote } from '../../actions/notes';
import { JournalEntries } from './JournalEntries';




export const Sidebar = () => {

  const dispatch = useDispatch();
  const {name} = useSelector(state => state.auth);
  
  const handleLogout=()=>{

    dispatch(startLogout())
  }


  const handleAddNew = ()=>{
    dispatch(startNewNote())
    
  }
  
  return (
  <aside className='journal__sidebar '>

      <div className='journal__sidebar-navbar '>
          <h3 className='marginTop-5'>
            <i className='far fa-moon'></i>
          <span className='journal__name'>{name}</span>
          </h3>
        <button 
        className='btn-navBar'
        onClick={handleLogout}
        >
            Cerrar Sesión
        </button>
      </div>

      <div className='journal__new-entry'
      onClick={handleAddNew}>
            <i className='far fa-calendar-plus fa-5x'></i>
            <p className='marginTop-5'> Nueva Entrada</p>
      </div>
      <JournalEntries />
  </aside>
  )
};