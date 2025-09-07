import { useState } from 'react'

function App() {
  const [color, setColor] = useState("red")

  return (
    <div className="fixed inset-0 duration-1900  transition-colors"
      style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-20">
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-5 py-5 rounded-2xl '>
          <button
            onClick={() => setColor("red")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "red" }}>RED</button>
          <button
            onClick={() => setColor("blue")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "blue" }}>BLUE</button>
          <button
            onClick={() => setColor("white")}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{ backgroundColor: "white" }}>WHITE</button>
          <button
            onClick={() => setColor("orange")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "orange" }}>ORANGE</button>
          <button
            onClick={() => setColor("green")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "green" }}>GREEN</button>
          <button
            onClick={() => setColor("purple")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "purple" }}>PURPLE</button>
          <button
            onClick={() => setColor("yellow")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "yellow" }}>YELLOW</button>
          <button
            onClick={() => setColor("gray")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "gray" }}>GRAY</button>
        </div>
      </div>
    </div>
  )
}

export default App
