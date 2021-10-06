import React, { useContext } from "react";
import AuthContext from "../../context/auth";

import classes from "./Navigation.module.css";

const Navigation = () => {
  const user = useContext(AuthContext);
  return (
    <nav className={classes.nav}>
      <ul>
        {user.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {user.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {user.isLoggedIn && (
          <li>
            <button onClick={user.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
