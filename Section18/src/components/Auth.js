import { useRef } from 'react';
import classes from './Auth.module.css';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth';

const Auth = () => {
  const emailRef = useRef();
  const passworfRef = useRef();
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (!emailRef.current.value && !passworfRef.current.value) return;

    dispatch(authActions.logIn());
    emailRef.current.value = '';
    passworfRef.current.value = '';
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={handleSubmit}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' ref={emailRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' ref={passworfRef} />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );

};

export default Auth;
