import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {
  

  return (
   <UserContextProvider>
      <h1>Hello This is a page to learn about context API</h1>
      <Login/>
      <Profile/>
   </UserContextProvider>
  )
}

export default App
