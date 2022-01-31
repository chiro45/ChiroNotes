import React from 'react';
import { Provider } from 'react-redux';


import { AppRouter } from "./routers/AppRouter"
import { store } from './store/store';

export const JournalApp = () => {
    return (
                        // el provider es un componente de redux que hace que el store este disponible a cualquier
                        //componente que necesite acceder al store es un componente de orden superior
        <>  
           <Provider store={store}>
                    <AppRouter/>
           </Provider>
        </>
    )
}





