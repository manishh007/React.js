import { useState } from 'react'
import { InputBox } from './components'
import useCurrenyinfo from './hooks/useCurrencyinfo'

function App() {
  const [amount, setAmount] = useState(1)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedamount, setConvertedAmount] = useState(0)

  const currencyinfo = useCurrenyinfo(from)
  console.log('currencyinfo:', currencyinfo); // <-- Add this line
  const options = Object.keys(currencyinfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedamount)
    setConvertedAmount(amount)
    // Optionally, trigger conversion here if needed
  }

  const convert = () => {
    if (!currencyinfo[to] || isNaN(amount) || amount <= 0) {
      setConvertedAmount(0)
      return
    }
    setConvertedAmount((amount * currencyinfo[to]).toFixed(2))
  }

  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/1188751/pexels-photo-1188751.jpeg')`,
      }}
    >
      <div className="w-full max-w-md mx-auto border border-gray-600 rounded-lg p-5 backdrop-blur-sm bg-white/30">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert()
          }}
        >
          <div className="w-full mb-1">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
            />
          </div>
          <div className="relative w-full h-0.5">
            <button
              type="button"
              aria-label="Swap currencies"
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              onClick={swap}
            >
              swap
            </button>
          </div>
          <div className="w-full mt-1 mb-4">
            <InputBox
              label="To"
              amount={convertedamount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            disabled={!currencyinfo[to] || isNaN(amount) || amount <= 0}
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App
