import { useEffect, useState } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
  const [ pacientes, setPacientes ] = useState([JSON.parse(localStorage.getItem('pacientes')) ?? []])
  const [ paciente, setPaciente ] = useState({})

 //Loads the last pacientes array from localstorage to the react state.
 
useEffect(()=>{
  const obtenerLS = () => {
    const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []
    setPacientes(pacientesLS)
  }

  obtenerLS()
},[])
 
  //Saves in localStorage the pacientes array, each time it is modified.
  useEffect(()=> {
    localStorage.setItem('pacientes', JSON.stringify( pacientes ))
  },[pacientes])

  const eliminarPaciente = id => {
    const pacientesActualizado = pacientes.filter( pacienteActual => pacienteActual.id !== id)
    setPacientes(pacientesActualizado)
  }
  
  return (
    <div className="container mx-auto mt-20">
    <Header />
    
    <div className="mt-12 md:flex">
      <Formulario
        pacientes = { pacientes }
        setPacientes = { setPacientes }
        paciente = { paciente }
        setPaciente = { setPaciente }

      />
      <ListadoPacientes
        pacientes = { pacientes }
        setPaciente = { setPaciente }
        eliminarPaciente = { eliminarPaciente }
      />
    </div>

    </div>
  )
}

export default App