const Formulario = () => {
    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

            <p className="text-lg mt-5 text-center mb-5">Añade Pacientes y <span className="text-indigo-600 font-bold">Administralos</span></p>

            <form className="bg-white shadow-sm rounded-lg py-10 px-5">

                <div className="mb-5">
                    <label htmlFor="nombre" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
                    <input type="text" className="shadow-lg border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md" placeholder="Nombre de la Mascota" name="nombre" id="nombre" value="" />
                </div>

                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
                    <input type="text" className="shadow-lg border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md" placeholder="Nombre del Propietario" name="propietario" id="propietario" value="" />
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email Propietario</label>
                    <input type="email" className="shadow-lg border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md" placeholder="Email Propietario" name="email" id="email" value="" />
                </div>

                <div className="mb-5">
                    <label htmlFor="fecha_alta" className="block text-gray-700 uppercase font-bold">Fecha Alta</label>
                    <input type="date" className="shadow-lg border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md" name="fecha_alta" id="fecha_alta" value="" />
                </div>

                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>
                    <textarea className="shadow-lg border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md" placeholder="Sintomas de la Mascota" name="sintomas" id="sintomas" value="" />
                </div>

                <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 hover:cursor-pointer transition-all" value="Agregar Paciente" />

            </form>

        </div>
    )
}

export default Formulario