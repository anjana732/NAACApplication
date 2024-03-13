import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Auth from './components/Auth'
import MyHomePage from './components/MyHomePage'
import Dashboard
 from './components/Dashboard'
import './App.css'

function App() {
 

  return (
    <>
    {error && <p className="error">{error}</p>}
      {loading ? <h2>Loading...</h2> : <> {user ? <Dashboard /> : <Auth />} </>}
     </>
  )
}

export default App
