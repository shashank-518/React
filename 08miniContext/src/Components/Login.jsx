import React from 'react'
import { useState , useContext } from 'react'
import UserContext from '../Context/UserContext'

const Login = () => {

    const [username , setusername] = useState('')
    const [password , setPassword] = useState('')

    const {setUser} = useContext(UserContext)


    const submitHandler = (e)=>{
        e.preventDefault()
        setUser({username , password})
    }

  return (
    <div>
      <h1>Login Page</h1>
      <input
       value={username}
       onChange={(e)=> {setusername(e.target.value)}}
       type="text"
       placeholder='Username'
       />
       {"  "}
        <input
       value={password}
       onChange={(e)=> {setPassword(e.target.value)}}
       type="password"
       placeholder='Password'
       />

       <button onClick={submitHandler}  >Submit</button>

    </div>
  )
}

export default Login
