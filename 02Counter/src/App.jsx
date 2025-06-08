import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let counter = 15
  return (

    <>
      <h1>Learn React with shashank</h1>
      <h3>Counter : {counter}</h3>

      <button>Add Counter</button> {"  "}
      <button>Sub Counter</button>

    </>
  )
}

export default App
