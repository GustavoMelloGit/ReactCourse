import { useState } from "react";

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const handleChangeValue = event => {
        setEnteredValue(event.target.value);
    }
    const handleInputBlur = event => {
        setIsTouched(true);
    }

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    }
    return {
        value: enteredValue,
        hasError,
        isValid: valueIsValid,
        handleChangeValue,
        handleInputBlur,
        reset
    }
}

export default useInput;