import useInput from "../hooks/useInput";

const BasicForm = (props) => {
  const {
    handleChangeValue: handleFirstNameChange,
    handleInputBlur: handleFirstNameBlur,
    hasError: firstNameHasError,
    reset: resetFirstName,
    value: firstNameValue
  } = useInput(value => value.trim() !== '');

  const {
    handleChangeValue: handleLastNameChange,
    handleInputBlur: handleLastNameBlur,
    hasError: lastNameHasError,
    reset: resetLastName,
    value: lastNameValue
  } = useInput(value => value.trim() !== '');

  const {
    handleChangeValue: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
    reset: resetEmail,
    value: emailValue
  } = useInput(value => value.includes('@'));

  const resetValues = () => {
    resetEmail();
    resetFirstName();
    resetLastName();
  }

  const handleFormSubmit = event => {
    event.preventDefault();
    resetValues();
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div className='control-group'>
        <div className={`form-control ${firstNameHasError && 'invalid'}`}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            onChange={handleFirstNameChange}
            onBlur={handleFirstNameBlur}
            value={firstNameValue}
          />
          {firstNameHasError && <p className="error-text">First name invalid</p>}
        </div>
        <div className={`form-control ${lastNameHasError && 'invalid'}`}>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='name'
            onChange={handleLastNameChange}
            onBlur={handleLastNameBlur}
            value={lastNameValue}
          />
          {lastNameHasError && <p className="error-text">Last name invalid</p>}
        </div>
      </div>
      <div className={`form-control ${emailHasError && 'invalid'}`}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          type='text'
          id='name'
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          value={emailValue}
        />
        {emailHasError && <p className="error-text">E-mail invalid</p>}
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
