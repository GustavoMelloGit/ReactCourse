import useInput from '../hooks/useInput';

const SimpleInput = (props) => {
  const {
    value: enteredName, 
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    handleChangeValue: nameChanged,
    handleInputBlur: nameBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '');
  
  const nameInputClasses = !nameInputHasError ? 'form-control': 'form-control invalid';
  
  let formIsValid = false;
  if(enteredNameIsValid) formIsValid = true;

  const handleFormSubmission = event => {
    event.preventDefault(); 
    if(!enteredNameIsValid) return; 
    resetNameInput();
  }

  return (
    <form onSubmit={handleFormSubmission}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text' 
          id='name' 
          onChange={nameChanged}
          onBlur={nameBlurHandler}
          value={enteredName} 
          />
        {nameInputHasError && <p className="error-text">Nome inválido</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
