import { useState } from 'react';

    
export const useForm = ( initialState = {} ) => {
    //utilizamo el useState  para darle el initialState
    const [formValues, setValues] = useState(initialState);             //declara el useState para el form
    //el reSet nos ayuda a resetear el state
    const reset = (newState = initialState) => {                                               
        setValues( newState );
    }

    //toma el e.target cuando hay un cambio
    const handleInputChange = ({ target }) => {                         //toma el target y detecta el cambio del input al mandarse
        //luego introduce el cambio
        setValues({//spread para no modificar nada accidentalmente
            ...formValues,// el elemento con el target.name
            [ target.name ]: target.value //obtiene su nuevo valor
        });

    }
    //exportamos
    return [ formValues, handleInputChange, reset ];

}