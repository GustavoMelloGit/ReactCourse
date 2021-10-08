import { useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);

  const handleNameInput = event => {
    setEnteredName(event.target.value);
    if (!enteredName.trim()) {
      setEnteredNameIsValid(false);
    }else{
      setEnteredNameIsValid(true)
    }
  }

  const handleFormSubmission = event => {
    event.preventDefault();

    setEnteredName('');
  }

  const nameInputClasses = enteredNameIsValid && enteredNameIsTouched ? 'form-control': 'form-control invalid'

  return (
    <form onSubmit={handleFormSubmission}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={handleNameInput} value={enteredName} onClick={()=>setEnteredNameIsTouched(true)} />
        {!enteredNameIsValid && enteredNameIsTouched && <p className="error-text">Nome inválido</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
