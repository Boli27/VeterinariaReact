import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPacientes, setPaciente, setEditando}) => {
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">Administra tus <span className="text-indigo-600 font-bold">Pacientes y Citas</span></p>

            {
                pacientes.length === 0 ?
                    <div className="bg-red-500 p-5 text-center mt-2 ml-10 rounded-xl">
                        <p className="text-white text-xl uppercase">Aún no hay pacientes registrados</p>
                    </div> :
                    pacientes.map((paciente) => (
                        <Paciente
                            key={paciente.id}
                            paciente={paciente}
                            pacientes={pacientes}
                            setPacientes={setPacientes}
                            setEditando={setEditando}
                            setPaciente={setPaciente}

                        />
                    ))
            }

        </div>

    )
}

export default ListadoPacientes;