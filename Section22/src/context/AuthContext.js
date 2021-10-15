import { createContext, useState } from "react";

let logoutTimer;

const AuthContext = createContext({
    token: '',
    isLoggedIn: false,
    logIn: (token) => { },
    logOut: () => { }
});


const calculateRemainigTime = expirationTime => {
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(expirationTime).getTime();

    const remainingTime = adjExpirationTime - currentTime;

    return remainingTime;
}

const retireveStoredToken = () => {
    const storedToken = localStorage.getItem('@profile_token');
    const storedTime = localStorage.getItem('@profile_time');

    const remainingTime = calculateRemainigTime(storedTime);

    if (remainingTime <= 3600) {
        localStorage.removeItem('@profile_token');
        localStorage.removeItem('@profile_time');
        return null;
    }

    return {
        token: storedToken,
        duration: remainingTime
    }
}
export const AuthContextProvider = props => {
    const [token, setToken] = useState(null);

    const userLogged = retireveStoredToken();

    const logOutHandler = () => {
        localStorage.removeItem('@profile_token');
        localStorage.removeItem('@profile_time');
        setToken(null);
        if (logoutTimer) {
            clearTimeout(logoutTimer);
        }
    }

    const logInHandler = (token, expirationTime) => {
        localStorage.setItem('@profile_token', token);
        localStorage.setItem('@profile_time', expirationTime);
        setToken(token);
        const remainingTime = calculateRemainigTime(expirationTime);
        logoutTimer = setTimeout(logOutHandler, remainingTime);
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