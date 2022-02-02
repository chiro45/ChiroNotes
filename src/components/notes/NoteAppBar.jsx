import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote, startUploading } from '../../actions/notes';
import moment from 'moment'
export const NoteAppBar = ({date}) => {
    const {active:note} = useSelector(state => state.notes)

    //declaramos el dispatch
    const dispatch = useDispatch();
    //evento que dispara el gurdarNote
    const handleSave =()=>{
        dispatch(startSaveNote(note))
    }
    //obtenemos el bottton
    const handlePictureClick= () =>{
        document.getElementById('fileSelector').click()
    }

    //evento que detecta que cambie
    const handleFileChange = (e)=>{
            const file = e.target.files[0];
            //si el file existe emtonces se produce el disparo de actualizacion
            if (file){
                dispatch(startUploading(file))
            }
    }

    const handleNav = ()=>{

       
        const  nav = document.getElementById('sidebar')
        const  navT = document.getElementById('navT')
        const  navT2 = document.getElementById('navT2');

        if(!nav.classList.contains('hidden')){

            nav.classList.add('hidden') 
            navT.classList.add('hidden') 
            navT2.classList.remove('hidden');
            
        }else{
            navT.classList.remove('hidden') 
            nav.classList.remove('hidden');
            navT2.classList.add('hidden');
            
        }

        

    }
    
    
  return (
    <div className='notes__appbar'>
        <div 
        className='notes__nav-toggle'
        onClick={handleNav}>
            <span className='nav-toggle appBar' id='navT'><i className=" fas fa-times "></i></span>
            <span className='nav-toggle appBar hidden' id='navT2'><i className="fas fa-bars"></i></span>
        </div>
        <span className='appBar'> <i className="fas fa-calendar-day"></i>  {moment().format('L')}</span>
        <input id='fileSelector'
               type='file'
               name='file'
               style={{display: 'none'}}
               onChange={handleFileChange}
        />
        <div>
            <button className='btn appBar'
            onClick={handlePictureClick}>Foto</button>
        
            <button className='btn appBar'
            onClick={handleSave}>Guardar</button>
        </div>
    

    </div>)
};
