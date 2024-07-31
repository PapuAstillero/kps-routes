import { useEffect, useState } from 'react'
import './App.css'
import Home from "./Componentes/Home"
import Alumnos from "./Componentes/InfoAlumnos"
import Error from './Componentes/Error'
import { Routes, Route } from "react-router-dom"


function App() {
  const [alumnos, setAlumnos] = useState()
  useEffect(() => {
    fetch("http://localhost:3000/students").then(res => res.json()).then(data => setAlumnos(data))
  }, [])
  console.log(alumnos)
  return (
    <>
      <Routes>
        <Route path="/" element={<Home data={alumnos} />} />
        <Route path="/infoalumnos" element={<Alumnos data={alumnos} />} />
        <Route path="/Error" element={<Error />} />
      </Routes>
    </>
  )
}

export default App
