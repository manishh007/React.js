import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Card from './Components/card.jsx'

const obj = {
  age: 22,
  city: "New Delhi",
  country: "India"
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Card name="Delhi" />
    <Card name="Kolkata" detail="located in south east" />
    <Card name="Benaras" detail="situated in Uttar Pradesh" />

  </StrictMode>,
)
