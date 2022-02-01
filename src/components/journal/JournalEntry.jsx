import React from 'react';
import moment from 'moment'
import PropTypes from 'prop-types';


import 'moment/locale/es'
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';

export const JournalEntry = ({id,date,title,body,url}) => {
    const dispatch = useDispatch()
    const noteDate = moment(date);
    //click event sobre alguna de las notas
    const handleEntryClick = ()=>{

        //realizamos el disparo mandando el id y los demas datos de la nota
        dispatch(activeNote(id,{
            date,title,body,url
        })

        );
    }
   
    return (
      <div className='journal__entry pointer animate__animated animate__fadeInRight animate__fast'
      onClick={handleEntryClick}>
      { //en el caso de que la nota tenga imagen entonces se muestra el div
          url &&
      <div className='journal__entry-picture'
      style={{
          backgroundSize:'cover',
          backgroundImage:`url(${url})`,
      }}>
              
      </div>
    }
        
        <div className='journal__entry-body'>
        <p className='journal__entry-title'>
            {title}
        </p>
        <p className='journal__entry-content'>
            {body}
        </p>
        </div>

        <div className='journal__entry-date-box'>
            <span>{noteDate.format('dddd')}</span>
            <h4>{noteDate.format('Do')}</h4>
        </div>
      </div>
  )
};



JournalEntry.propTypes ={
    id: PropTypes.string,
    date: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
    url: PropTypes.string
}