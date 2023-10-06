import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState('');

    const onLogin = (userName, password) => {
        if (userName === 'Diego' && password === '1234') {
            setUser(userName)
        } else {
            alert('Usuario o contraseña incorrectos')
        }
    }

    const values = {
        user,
        onLogin
    }

    return (
        <AuthContext.Provider value={{ values }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthContextProvider };