import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Tryme() {
  return (
    <h1>try me as a app</h1>
  )
}

const element = (
  <a href="https://youtube.com" target='_blank'>YOUTUBE</a>
)

const reactelment = React.createElement(
  'a',
  {
    'href': 'https://google.com', 'target': '_blank'
  },
  'google'
)

ReactDOM.createRoot(document.getElementById('root')).
  render(
    // <>
    //   <Tryme />
    //   <App />
    // </>,

    // element

    reactelment

  )
