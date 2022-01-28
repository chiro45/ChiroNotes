
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
          
          <span className='journal__name'><i className="fas fa-user"></i> {name}</span>
          </h3>
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
