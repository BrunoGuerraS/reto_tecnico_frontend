import { useState } from 'react'
import { createContext } from 'react'
export const userContext = createContext()

function UserContextProvider({children}) {
    const [token, setToken] = useState(window.localStorage.getItem('token')??null)
    return (
        <userContext.Provider value={{token, setToken}}>
            {children}
        </userContext.Provider>
    )
}

export default UserContextProvider