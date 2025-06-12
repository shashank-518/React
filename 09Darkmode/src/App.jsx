import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThemeBtn from './Components/Toggle'
import Card from './Components/Card'
import { ThemeProvider } from './Context/Theme'

function App() {
  const [ThemeValue , setThemeValue] = useState('light')

  const darkTheme = ()=>{
    setThemeValue('dark')
  }

  const lightTheme = ()=>{
    setThemeValue('light')
  }

  useEffect(()=>{

    document.querySelector('html').classList.remove("dark","light")
    document.querySelector('html').classList.add(ThemeValue)

  }, [ThemeValue])

  return (
    <ThemeProvider value={{ThemeValue , darkTheme , lightTheme}} >
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    </ThemeProvider>
  )
}

export default App
