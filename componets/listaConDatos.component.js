import ButtonLink from "./botonEnlace.component"
const Listado = (props) => {
    const navegar = (txtpagina) => {
        location.href =txtpagina
    }
    const MostrarOcultar=(event)=>{
        console.log("desc: ", event.target.id)
        props.editar(event.target.id)
    }
    const MostrarOcultar2=()=>{
        props.editarLead()
    }
    const butOnclickEdit=(event)=>{
        const estado= event.target.id
        console.log("estadx: ", event.target.id)
        const dt=estado.split(",")
        props.editarAct(estado)
        //props.editar2(event.target.id)
    }
    const butOnclickElim=(event)=>{
        const estado= event.target.id
        console.log("estadx: ", event.target.id)
        const dt=estado.split(",")
        props.elimAct(estado)
        //props.editar2(event.target.id)
        
    }
    return <div className="row container">
        <div className="col"/>
        <div className="table-wrapper-scroll-y my-custom-scrollbar">
                <table className="table table-bordered table-striped mb-0">
                    <thead>
                        <tr>
                            <th>Método</th>
                            <th>Fecha</th>
                            <th>Estado</th>
                            <th>+</th>
                        </tr>
                    </thead>
                    <tbody id="data_actividades">
                        {
                            props.actividades.map((actividad) => {
                                return <tr >
                                    <td>
                                        <button id={actividad.descripcion+","+actividad.metodo} className="btn btn-link" onClick={MostrarOcultar}>{actividad.metodo}</button>
                                    </td>
                                    <td>{actividad.fecha}</td>
                                    <td>{actividad.estado}</td>
                                    <td>
                                        <button id={actividad.descripcion+","+actividad.metodo+","+actividad.fecha+","+actividad.estado} className="btn btn-warning me-1 mt-1" onClick={butOnclickEdit}>editar</button>
                                        <button id={actividad.descripcion+","+actividad.metodo+","+actividad.fecha+","+actividad.estado} className="btn btn-danger mt-1" onClick={butOnclickElim}>eliminar</button>
                                        
                                    </td>    
                                
                                </tr>
                            })
                        }
                    </tbody>
                </table>
        </div>
        <div className="col"/>
    </div>
}
export default Listado

/*<td>
                                        <button type="button" className="btn btn-warning" onClick={() => {
                                            props.onEditarTrato(trato.id)
                                        }}>
                                            editar
                                        </button>
                                        <button type="button" className="btn btn-danger" onClick={() => {
                                            props.onEliminarTrato(trato.id)
                                        }}>
                                            eliminar
                                        </button>
                                    </td> */