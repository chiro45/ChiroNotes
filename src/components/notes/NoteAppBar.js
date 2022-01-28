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

    
    
  return (
    <div className='notes__appbar'>
  
        <span className='appBar'>{moment().subtract(10, 'days').calendar()}</span>
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
