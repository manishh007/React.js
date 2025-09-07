import { useState, useCallback, useEffect, useRef } from 'react'
// import './App.css'

function App() {

  const [length, setLength] = useState(8)
  const [allownum, setAllownum] = useState(false)
  const [allowchar, setAllowchar] = useState(false)
  const [password, setPassword] = useState("")

  const passref = useRef(null)

  const generatePassword = useCallback(() => {

    let pass = ""
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if (allownum) chars += "0123456789"
    if (allowchar) chars += "!@#$%^&*()_+~`|}{[]:;?><,./-="

    for (let i = 1; i <= length; i++) {
      let str = Math.floor(Math.random() * chars.length + 1)
      pass += chars.charAt(str)
    }

    setPassword(pass)

  }, [length, allownum, allowchar, setPassword])

  const copytoclipboard = useCallback(() => {
    passref.current?.select()
    window.navigator.clipboard.writeText(password);
  }, [password

  ])

  useEffect(() => {

    generatePassword()

  }, [length, allownum, allowchar])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-lg px-6 py-5 my-10 rounded-2xl text-gray-900 bg-gradient-to-r from-amber-200 to-amber-100">
        <h2 className="text-2xl font-bold text-center text-amber-800 mb-4"> Password Generator</h2>
        <div className="flex shadow-md rounded-xl mb-4 overflow-hidden border border-amber-400">
          <input
            type="text"
            value={password}
            className="outline-2 w-full py-2 px-3 bg-white text-amber-800 font-medium tracking-wide"
            placeholder="Enter-password"
            readOnly
            ref={passref}
          />
          <button
            onClick={copytoclipboard()}
            className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-3'>
          <div className='flex items-center gap-x-2'>
            <input type="range"
              min={8}
              max={16}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label >Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-2'>
            <input type="checkbox"
              defaultChecked={allownum}
              id="numberinput"
              onChange={() => { setAllownum((prev) => !prev) }}
            />
            <label> Numbers</label>
          </div>
          <div className='flex items-center gap-x-2'>
            <input type="checkbox"
              defaultChecked={allowchar}
              id="charinput"
              onChange={() => { setAllowchar((prev) => !prev) }}
            />
            <label> Characters</label>
          </div>
        </div>
      </div>
    </>

  )
}

export default App
