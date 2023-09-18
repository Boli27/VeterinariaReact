import { useState, useEffect } from "react"
import ListadoPacientes from "./components/ListadoPacientes"
import Formulario from "./components/Formulario"
import Header from "./components/Header"

function App() {

  const [pacientes, setPacientes] = useState(
    JSON.parse(localStorage.getItem("pacientes")) || []
  )

  const guardar = () => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes))
  }

  const borrarLocal = ()=>{
    localStorage.removeItem("pacientes")
    setPacientes([]);
  }

  useEffect(() => {
    guardar()
  }, [pacientes])

  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
        <Formulario pacientes={pacientes} setPacientes={setPacientes} borrarLocal={borrarLocal}/>
        <ListadoPacientes pacientes={pacientes} setPacientes={setPacientes}/>
      </div>

    </div>
  )
}

export default App