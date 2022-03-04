import Navegador from "../componets/Navegador.component";
import ButtonLink from "../componets/botonEnlace.component";
import Listado from "../componets/listaConDatos.component";
import { obtenerTratos } from "../dao/tratos";
import { useEffect, useState } from "react";
import Cabecera from "../componets/headdata.component";
import InfoType from "../componets/info.component";
import PlantillaModal from "../componets/modal.component";
const ClienteView =()=>{
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
    const listaClases=["nav-link","nav-link","nav-link active","nav-link"]
    return <div className="container">
        <Navegador lisClass={listaClases}></Navegador>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <ButtonLink nombre="Inicio clientes" color="btn btn-link" path="/Inicioclientes" ></ButtonLink>
                <li class="breadcrumb-item active mt-2" aria-current="page">/ Lead1</li>
            </ol>
        </nav>
        <div className="card mt-2 bg-secondary bg-opacity-10">
            <div className="row mt-4 mb-4">
                <Cabecera nombre="Empresa#" editar={butNuevoOnClick2} editarLead={butNuevoOnClick}></Cabecera>
                <InfoType></InfoType>   
            </div>
            <ButtonLink nombre="Marcar lead como ganado" editar={butNuevoOnClick} color="btn btn-primary" modo="cliente" />
        </div>
        <hr></hr>
        <div className="card container border-secondary">
            <h2 className="text mb-2">Acercamientos</h2>
            <div className="col">
                <ButtonLink nombre="+ Agregar" editar={butNuevoOnClick} color="btn btn-success bg-opacity-25" modo="cliente" />    
            </div>
            <div data-spy="scroll" class="scrollspy-example mt-4" data-target="#list-example" data-offset="0">
                <Listado actividades={listaActividades} editar={butNuevoOnClick2} editarLead={butNuevoOnClick}></Listado>
            </div>
            <PlantillaModal mostrar={debeMostrarModal} ocultar={onModalClose} modo="agregar"></PlantillaModal>
            <PlantillaModal mostrar={debeMostrarModal2} ocultar={onModalClose2} modo="mostrar"></PlantillaModal>
        </div>
    </div>
}
export default ClienteView;