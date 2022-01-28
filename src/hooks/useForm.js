import { useState } from 'react';


export const useForm = ( initialState = {} ) => {
    
    const [formValues, setValues] = useState(initialState);             //declara el useState para el form

    const reset = (newState = initialState) => {                                               
        setValues( newState );
    }


    const handleInputChange = ({ target }) => {                         //toma el target y detecta el cambio del input al mandarse

        setValues({
            ...formValues,
            [ target.name ]: target.value
        });

    }

    return [ formValues, handleInputChange, reset ];

}