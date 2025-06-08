import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  

  const addOne = ()=>{
    // wont work
    // setCount(count+1)
    // setCount(count+1)
    // setCount(count+1)
    // setCount(count+1)

    // this will work
    setCount((prev)=> prev+1)
    setCount((prev)=> prev+1)
    setCount((prev)=> prev+1)
    setCount((prev)=> prev+1)

  }
  const subOne = ()=>{
    setCount(count-1)
  }

  return (

    <>
      <h1>Learn React with shashank</h1>
      <h3>Counter : {count}</h3>

      <button onClick={addOne} >Add Counter</button> {"  "}
      <button onClick={subOne} >Sub Counter</button>

    </>
  )
}

export default App
