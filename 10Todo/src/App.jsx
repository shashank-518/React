import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoContextProvider } from './Contexts/TodoContext'

function App() {
  const [Todos, setTodos] = useState([])

  const addTodo = (todo)=>{
    setTodos((prev)=> [ {id: Date.now() , ...todo} ,...prev])
  }

  const updateTodo = (id,todo)=>{
    setTodos((prev) => prev.map((prevTodo)=> (prevTodo.id === id  ? todo : prevTodo)) )
  }

  return (

    <TodoContextProvider value={{Todos , addTodo ,updateTodo ,deleteTodo , toggleTodo}} >

      <h1 className='bg-red-800' >Todo App</h1>
    </TodoContextProvider>

  )
}

export default App
