import React, { HTMLAttributes, createContext, useEffect, useState } from "react"

const AuthContext = createContext({
    isLoggedIn: false,
    onLogout: () => { },
    onLogin: (email: string, password: string) => { }
});

export const AuthContextProvider = ({ children }: HTMLAttributes<HTMLElement>) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const userLoggedInInfo = localStorage.getItem('isLoggedIn')

        if (userLoggedInInfo === '1') {
            setIsLoggedIn(true)
        }
    }, [])

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn')
        setIsLoggedIn(false)
    }

    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', '1')
        setIsLoggedIn(true)
    }

    return <AuthContext.Provider
        value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler }}
    >
        {children}
    </AuthContext.Provider>
}

export default AuthContext;

