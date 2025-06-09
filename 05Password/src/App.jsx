import { useState , useCallback ,useEffect} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setlength] = useState(6);
  const [character, setCharacter] = useState(false);
  const [number, setNumber] = useState(false);
  const [password , setPassword] = useState('')


  const generatePassword = useCallback(()=>{


    let alphabets = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let numbers = '0123456789';
    let symbols = '!@#$%^&*()_+-=[]{}|;:",.<>?/`~';
    let pass = ""

    if (character) {
      alphabets+=symbols
    }
    if(number){
      alphabets+=numbers
    }


    for (let i = 0; i < length; i++) {
      let chara = Math.floor(Math.random()* alphabets.length + 1)
      pass+= alphabets.charAt(chara)
    }

    setPassword(pass)

  }, [length,number,character])

  useEffect(()=>{
    generatePassword()
  } , [length,number,character])
  



  return (
    <>
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md space-y-6">
       <div className="flex">
    <input
      type="text"
      value={password}
      readOnly
      placeholder="Password"
      className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button
      className="px-4 bg-blue-500 text-white font-medium rounded-r-md hover:bg-blue-600 transition"
    >
      Copy
    </button>
  </div>

        <div className="space-y-2">
          <label htmlFor="range" className="block text-gray-700 font-medium">
            Length : {length}
          </label>
          <input 
          type="range" 
          id="range"
           className="w-full accent-blue-500"
            min={6}
             max={20}
              value={length}
              onChange={(e)=> setlength(e.target.value)}
              />
        </div>

        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            defaultChecked={character}
            id="character"
            onChange={()=>{setCharacter((prev)=>!prev)}}
            className="w-5 h-5 accent-blue-500"
          />
          <label htmlFor="character" className="text-gray-700">
            Character
          </label>
        </div>

        <div className="flex items-center space-x-3">
          <input
           type="checkbox" 
           defaultChecked={number}
           id="number" 
           onChange={()=>{setNumber((prev)=>!prev)}}
           className="w-5 h-5 accent-blue-500" />
          <label htmlFor="number" className="text-gray-700">
            Number
          </label>
        </div>
      </div>
    </>
  );
}

export default App;
