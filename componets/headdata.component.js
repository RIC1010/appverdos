import ButtonLink from "./botonEnlace.component"
const Cabecera =(props)=>{
    const MostrarOcultar2=()=>{
        props.editarLead()
    }
    return <div className="container col-3">
        <div className="col mx-4">
            <h1>{props.nombre}</h1>
            <ButtonLink nombre="editar" editar={MostrarOcultar2} 
                                        color="btn btn-warning me-2 mt-1" modo="cliente" />
        </div>
    </div>
}
export default Cabecera