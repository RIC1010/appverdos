import Navegador from "../componets/Navegador.component"
import ButtonLink from "../componets/botonEnlace.component"
import { useState } from "react"
import Listado from "../componets/listaConDatos.component"
const Servicios=()=>{
    const [debeMostrarModal, setDebeMostrarModal] = useState(false)
    const [debeMostrarModal2, setDebeMostrarModal2] = useState(false)
    const listaActividades=[{id: 1, fecha: "24/02/22", hora:"14:00:00",metodo:"Llamada", estado: "Realizado"}
    , {id: 2, fecha: "21/02/22", hora:"11:00:00",metodo:"Llamada", estado: "Realizado"},
    {id: 1, fecha: "24/02/22", hora:"14:00:00",metodo:"Llamada", estado: "Realizado"},
    {id: 1, fecha: "24/02/22", hora:"14:00:00",metodo:"Llamada", estado: "Realizado"}
    
    ]
    /*useEffect(()=>{
        setListaActividades("obtenerActividad()")
    }, [])*/
    const butNuevoOnClick = (pos) => {
        //setModoFormulario("nuevo")
        setDebeMostrarModal(true)
        //setPosicion(pos)
    }

    const onModalClose = () => {
        setDebeMostrarModal(false)
    }
    const butNuevoOnClick2 = (pos) => {
        //setModoFormulario("nuevo")
        setDebeMostrarModal2(true)
        //setPosicion(pos)
    }

    const onModalClose2 = () => {
        setDebeMostrarModal2(false)
    }
    const listaClases=["nav-link","nav-link","nav-link","nav-link active"]
    return <div className="container">
        <Navegador lisClass={listaClases}></Navegador>
        <h1>Servicios</h1>
        <div className="row">
            <div className="col-3 mb-2">
                    <input type="input" placeholder="buscar" className="form-control" />
            </div>
            <div className="col-7"/>
            <div className="col mb-2">
                    <ButtonLink color="btn btn-success" nombre="+ Agregar" path="/inicioleads"></ButtonLink>
            </div>
        </div>
        <Listado actividades={listaActividades} editar={butNuevoOnClick2} editarLead={butNuevoOnClick}></Listado>
    </div>
}
export default Servicios