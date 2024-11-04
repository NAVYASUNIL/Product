import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Addproduct from './Components/Addproduct'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
  
  <Routes>
    <Route path='/home' element={<Home/> }/>
    <Route path='/add' element={ <Addproduct/>}/>
  </Routes> 
    </>
  )
}

export default App
