import { useState } from 'react'
import './App.css'

function App() {

  let [count, setcount] = useState(1)

  // let count = 2;

  function add() {

    if (count < 10) {
      // count = count + 1;
      setcount(count + 1)
      console.log("value changed", count);
    }
  }

  function dec() {

    // count = count + 1;
    if (count > 0) {
      setcount(count - 1)
      console.log("value changed", count);
    }

  }

  return (
    <>
      <h1>Manifesting This:</h1>
      <h2>Counter : {count}</h2>

      <div className="buttons">
        <button
          onClick={add}>Inc</button>
        <button
          onClick={dec}>Dec</button>
      </div>
    </>
  )
}

export default App
