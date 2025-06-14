import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Home/home.jsx'
import About from './About/About.jsx'
import Contact from './Contact/Contact.jsx'
import Users from './Users/Users.jsx'
import Github, { fetchapicall } from './Github/Github.jsx'
import Personal from './Github/Personal.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout/>} >
      <Route path='' element = {<Home/>}  />
      <Route path='about' element = {<About/>} /> 
       <Route path='contact' element = {<Contact/>}  />
      <Route path='User/:id' element = {<Users/>} /> 
       <Route loader = {fetchapicall} path='github' element = {<Github/>} />
      
      <Route path='users/:username' element={<Personal/>} />

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
