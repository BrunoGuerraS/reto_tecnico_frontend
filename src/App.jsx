import { ChakraProvider, Box } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserContextProvider from './context/userContext'
import { Dashboard } from './pages/Dashboard/Dashboard'
import { Login } from './pages/Login/Login'

export const App = () => {
  return (
    <BrowserRouter>
    <ChakraProvider>
        <UserContextProvider>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/dashboard' element={<Dashboard />}/>
            </Routes> 
        </UserContextProvider>
    </ChakraProvider>
    </BrowserRouter>
  )
}
