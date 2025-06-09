import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (

     <div
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/4497591/pexels-photo-4497591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }}
    >
      <h1 className=" bg-red-600 text-white text-4xl font-bold">Hello World</h1>
    </div>

  )
}

export default App
