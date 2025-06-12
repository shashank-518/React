import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoContextProvider } from './Contexts/TodoContext'
import TodoForm from './Components/TodoForm'

function App() {
  const [Todos, setTodos] = useState([])

  const addTodo = (todo)=>{
    setTodos((prev)=> [ {id: Date.now() , ...todo} ,...prev])
  }

  const updateTodo = (id,todo)=>{
    setTodos((prev) => prev.map((prevTodo)=> (prevTodo.id === id  ? todo : prevTodo)) )
  }

  const deleteTodo = (id)=>{
    setTodos((prev)=> prev.filter((prevTodo) => prevTodo.id !== id))
  }

  const toggleTodo = (id)=>{
    setTodos((prev)=> prev.map((prevTodo)=> (prevTodo.id === id ? {...prevTodo , complete :!prevTodo.complete} : prevTodo)))
  }

  useEffect(()=>{
    const todo = JSON.parse(localStorage.getItem("todos"))
    if(todo && todo.length > 0){
      setTodos(todo)
    }
  } , [])

  useEffect(()=>{

    localStorage.setItem('todos' , JSON.stringify(Todos))

  } , [Todos])

  return (

    <TodoContextProvider value={{Todos , addTodo ,updateTodo ,deleteTodo , toggleTodo}} >

      <TodoForm/>
    </TodoContextProvider>

  )
}

export default App
