import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./context/auth";

function App() {
  const user = useContext(AuthContext);
  return (
    <>
      <MainHeader />
      <main>
        {!user.isLoggedIn && <Login />}
        {user.isLoggedIn && <Home />}
      </main>
    </>
  );
}

export default App;
