import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThemeBtn from './Components/Toggle'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-red-100' >DArk Mode Toggle</h1>

    <ThemeBtn/>
    <Card/>
    
    </>
  )
}

export default App
