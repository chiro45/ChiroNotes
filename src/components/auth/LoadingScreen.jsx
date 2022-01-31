import React from 'react';

export const LoadingScreen = () => {
  return (
    <div className='auth__main'>
    <div className='auth__box-container'>
        <h2 className='auth__loading-title'>Cargando <i className=" spinner fas fa-spinner"></i></h2>
    </div>
    </div>
  );
};
