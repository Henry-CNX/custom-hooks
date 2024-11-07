import { useState } from "react";

export const useForm = ( initialForm = {} ) => {

    const [formState, setformState] = useState( initialForm );

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setformState({
            ...formState,
            [ name ]: value,
        });
    };

    const onResetForm = () => {
        setformState( initialForm );
    };

    //Aquí se exponen las funciones para que puedan ser usadas en FormWhitCustomHook.jsx
    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}