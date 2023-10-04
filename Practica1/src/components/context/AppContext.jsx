import React from 'react'
import { createContext } from 'react'

const person = {
    id: 1,
    name: "Rick",
    lastName: "Sanchez",
    age: 70,
    city: "Seattle",
    Country: "USA",
    school: "MIT",
}

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    return (
        <AppContext.Provider value={person}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider; 
