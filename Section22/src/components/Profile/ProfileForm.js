import { useContext, useRef, useState } from 'react';
import API_KEY from '../../api';
import AuthContext from '../../context/AuthContext';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { token } = useContext(AuthContext);
  const passwordRef = useRef();

  const handleFormSubmit = event => {
    event.preventDefault();

    const enteredPassword = passwordRef.current.value;
    if (enteredPassword.trim().length < 6) {
      alert('Invalid password');
      return;
    }

    setIsLoading(true);
    fetch(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`, {
      method: 'POST',
      body: JSON.stringify({
        idToken: token,
        password: enteredPassword,
        returnSecureToken: false
      }),
      headers: { 'Content-Type': 'application/json' }
    }).then(response => {
      setIsLoading(false);
      if (response.ok) {
        return response.json()
      }
      else {
        return response.json().then(data => {
          let errorMessage = "SignUp failed!";
          if (data && data.error && data.error.message) {
            errorMessage = data.error.message;
          }
          throw new Error(errorMessage);
        });
      }
    }).catch(error => {
      alert(error);
    });
  }
  return (
    <form className={classes.form} onSubmit={handleFormSubmit}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={passwordRef} />
      </div>
      <div className={classes.action}>
        <button type="submit">Change Password</button>
        {!isLoading && <p>Password changed with success!</p>}
      </div>
    </form>
  );
}

export default ProfileForm;
