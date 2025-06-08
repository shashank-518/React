import { useState } from "react";

function App() {

  const [color, setColor] = useState('olive')


  return (
    <>
      <div className="w-full h-screen flex items-center justify-center" style={{backgroundColor:color}} >
        <div className="flex gap-4 justify-center items-center p-6 bg-gray-100 rounded-xl shadow-md">
          <button onClick={()=>{setColor('red')}}  className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300">
            Red
          </button>
          <button  onClick={()=>{setColor('green')}} className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300">
            Green
          </button>
          <button  onClick={()=>{setColor('blue')}} className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
            Blue
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
