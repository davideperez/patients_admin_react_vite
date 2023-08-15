import { useEffect } from "react"
import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente}) => {

  useEffect(()=> {
    if (pacientes.length > 0) {
      console.log("Se ha cargado un nuevo paciente")
    }
  },[pacientes])

  return (
    <div className=" md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll ">

      {pacientes && pacientes.length ? (
        <>
          <h2 className=" font-black text-center text-3xl">Listado Pacientes</h2>
          <p className="txt-xl mt-5 mb-10 text-center">
            Administra tus {''}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>
    
          { pacientes.map( (paciente) => (
            <Paciente 
              key = { paciente.id }
              paciente = { paciente }
              setPaciente = { setPaciente }
            />
          ))}
        </>
      ) : (
        <>
          <h2 className=" font-black text-center text-3xl">No hay pacientes</h2>
          <p className="txt-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes {''}
            <span className="text-indigo-600 font-bold">y apareceran aquí</span>
          </p>
        </>
      )}
      
    </div>
  )
}

export default ListadoPacientes