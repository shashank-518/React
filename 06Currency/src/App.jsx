import { useState } from 'react'
import InputBox from './components/Inputbox'
import useCurrencyinfo from './hooks/useCurrencyinfo'


function App() {

  const [amount , setamount] = useState(0)
  const [converted , setconverted] = useState(0)
  const [from , setfrom] = useState("usd")
  const [to , setto] = useState("inr")

  const currencyinfo = useCurrencyinfo(from)

  console.log(currencyinfo);
  

  const options = Object.keys(currencyinfo)

  const swap = ()=>{
    setto(from)
    setfrom(to)
    setamount(converted)
    setconverted(amount)
  }

  const change = ()=>{
      setconverted(amount * currencyinfo[to])
  }




  return (
    <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('${'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'})`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           change()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount = {amount}
                                onAmountChange={(amount) => (setamount(amount))}
                                currencyOptions = {options} 
                                onCurrencyChange={(currency) => (setfrom(currency))}
                                selectCurrency={from}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount = {converted}
                                onAmountChange={(amount) => (setconverted(amount))}
                                currencyOptions = {options} 
                                onCurrencyChange={(currency) => (setto(currency))}
                                selectCurrency={to}
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert 
                        </button>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default App
