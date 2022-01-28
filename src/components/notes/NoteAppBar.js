import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote, startUploading } from '../../actions/notes';
import moment from 'moment'
export const NoteAppBar = ({date}) => {
    const {active:note} = useSelector(state => state.notes)
    const dispatch = useDispatch();

    const handleSave =()=>{
        dispatch(startSaveNote(note))
    }

    const handlePictureClick= () =>{
        document.getElementById('fileSelector').click()




    }


    const handleFileChange = (e)=>{
            const file = e.target.files[0];
            if (file){
                dispatch(startUploading(file))
            }
    }

    
    
  return (
    <div className='notes__appbar'>
  
        <span>{moment().subtract(10, 'days').calendar()}</span>
        <input id='fileSelector'
               type='file'
               name='file'
               style={{display: 'none'}}
               onChange={handleFileChange}
        />
        <div>
            <button className='btn'
            onClick={handlePictureClick}>Foto</button>
        
            <button className='btn'
            onClick={handleSave}>Guardar</button>
        </div>
    

    </div>)
};
