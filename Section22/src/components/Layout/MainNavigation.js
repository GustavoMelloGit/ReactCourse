import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const { isLoggedIn, logOut } = useContext(AuthContext);

  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn &&
            <li>
              <Link to='/auth'>Login</Link>
            </li>
          }
          {isLoggedIn &&
            <>
              <li>
                <Link to='/profile'>Profile</Link>
              </li>
              <li>
                <button onClick={() => logOut()}>Logout</button>
              </li>
            </>
          }
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
