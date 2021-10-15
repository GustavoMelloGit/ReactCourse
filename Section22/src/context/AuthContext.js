import { createContext, useState } from "react";

const AuthContext = createContext({
    token: '',
    isLoggedIn: false,
    logIn: (token) => { },
    logOut: () => { }
});

export const AuthContextProvider = props => {
    const [token, setToken] = useState(null);

    const userLogged = localStorage.getItem('@profile_token');

    const logInHandler = token => {
        localStorage.setItem('@profile_token', token);
        setToken(token);
    }

    const logOutHandler = () => {
        localStorage.removeItem('@profile_token');
        setToken(null);
    }

    const contextValue = {
        token,
        isLoggedIn: userLogged,
        logIn: logInHandler,
        logOut: logOutHandler,
    }
    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;