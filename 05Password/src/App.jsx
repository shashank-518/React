import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setlength] = useState(10);
  const [character, setCharacter] = useState(false);
  const [number, setNumber] = useState(false);

  return (
    <>
      <div class="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md space-y-6">
       <div class="flex">
    <input
      type="text"
      placeholder="Enter text"
      class="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button
      class="px-4 bg-blue-500 text-white font-medium rounded-r-md hover:bg-blue-600 transition"
    >
      Copy
    </button>
  </div>

        <div class="space-y-2">
          <label for="range" class="block text-gray-700 font-medium">
            Length
          </label>
          <input type="range" id="range" class="w-full accent-blue-500" />
        </div>

        <div class="flex items-center space-x-3">
          <input
            type="checkbox"
            id="character"
            class="w-5 h-5 accent-blue-500"
          />
          <label for="character" class="text-gray-700">
            Character
          </label>
        </div>

        <div class="flex items-center space-x-3">
          <input type="checkbox" id="number" class="w-5 h-5 accent-blue-500" />
          <label for="number" class="text-gray-700">
            Number
          </label>
        </div>
      </div>
    </>
  );
}

export default App;
