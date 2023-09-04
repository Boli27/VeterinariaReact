const Alerta =({error,mensaje}) =>{
    return(

        //evaluar el error recibido en el componente, donde si el error es true tendra estilos de un error 
        //si es false tendra estilos de un exito 
        //el mensaje es personalizado dependiendo la situacion donde la aleta sea llamada 
        <div className={`${error ? 'bg-red-600':'bg-indigo-600'} 
        text-white text-center p-3 uppercase font-bold mb-3 rounded-lg`}>{mensaje}</div>
    )
}

export default Alerta