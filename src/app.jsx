import { useState } from 'react'
import './app.css'
import Header from './Components/Header'
import { Outlet } from 'react-router-dom'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
