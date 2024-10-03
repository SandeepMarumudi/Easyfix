import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/navbar'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <CustomNavbar/>

    </>
  )
}

export default App
