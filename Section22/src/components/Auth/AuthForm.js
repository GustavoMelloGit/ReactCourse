import { useState, useRef, useContext } from 'react';
import { useHistory } from 'react-router';
import API_KEY from '../../api';
import AuthContext from '../../context/AuthContext';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const auth = useContext(AuthContext);
  const history = useHistory();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
    emailRef.current.value = '';
    passwordRef.current.value = '';
  };

  const fetchLink = isLogin ? `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}` :
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    //VALIDATION
    if (enteredEmail.trim().length === 0) {
      alert('Digite um e-mail válido')
      return;
    }
    else if (enteredPassword.trim().length < 6) {
      alert('Digite uma senha válida')
      return;
    }

    //FETCH DATA
    setIsLoading(true);
    fetch(fetchLink, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true
      }),
      headers: { 'Content-Type': 'application/json' }
    }).then(response => {
      setIsLoading(false);

      if (response.ok) {
        return response.json();
      } else {
        return response.json().then(data => {
          let errorMessage = "SignUp failed!";
          if (data && data.error && data.error.message) {
            errorMessage = data.error.message;
          }
          throw new Error(errorMessage);
        });
      }
    }).then(data => {
      const expirationTime = new Date(new Date().getTime() + (+data.expiresIn * 1000));
      auth.logIn(data.idToken, expirationTime.toString());
      history.replace('/');
    }).catch(error => {
      alert(error);
    })
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordRef} />
        </div>
        <div className={classes.actions}>
          {!isLoading && <button type="submit">{isLogin ? 'Login' : 'Create Account'}</button>}
          {isLoading && <p>Loading...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
