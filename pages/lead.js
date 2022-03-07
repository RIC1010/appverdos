import Activity from "../componets/actividad.component"
import Cabecera from "../componets/headdata.component"
import InfoType from "../componets/info.component"
import Navegador from "../componets/Navegador.component"
import { useEffect, useState } from "react"
import ButtonLink from "../componets/botonEnlace.component"
import Listado from "../componets/listaConDatos.component"
import PlantillaModal from "../componets/modal.component"
import { obtenerKeyLead } from "../dao/variable"
const Lead=()=>{
    /**/
    const [debeMostrarModal, setDebeMostrarModal] = useState(false)
    const [debeMostrarModal2, setDebeMostrarModal2] = useState(false)
    const [debeMostrarModal3, setDebeMostrarModal3] = useState(false)
    const [debeMostrarModal4, setDebeMostrarModal4] = useState(false)
    const [lista, setLista]= useState([])
    const [actividades, setActividades]=useState([])
    const [descripcion, setDes]= useState("")
    const [activity, setActivity]= useState("")
    const [txtEstado, setTxtEstado]= useState(0)
    const [txtFecha, setFecha]= useState("")
    const [email, setEmail]=useState("")
    const [estados, setEstados]=useState([])
    const [metodos, setMetodos]=useState([])
    const [estadosl, setEstadosL]=useState([])
    const [estadosa, setEstadosa]=useState([])
    const [prioridades, setPrioridades]=useState([])
    useEffect(async () => {
        const x= obtenerKeyLead()
        const datos= x.split(",")
        console.log(datos[0])
        //----------------------
        let response= await fetch("/api/leads/[id]", {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: datos[0]
            }),
          })
        const data = await response.json()
        console.log("data: ", data.lead[0])
        setLista(data.lead[0])

        //---------------------------------------
        let response2 = await fetch("/api/actividades", {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: datos[0]
            }),
        })
        const data2 = await response2.json()
        setActividades(data2.actividades)
        //---------------------------
        let response3 = await fetch("/api/estados")
        const data3 = await response3.json()
        setEstados(data3.estados)
        //-------------------------
        let response4 = await fetch("/api/metodos")
        const data4 = await response4.json()
        setMetodos(data4.metodos)
        //----------obtener estadoslead---------------
        let response5 = await fetch("/api/estadol")
        const data5 = await response5.json()
        console.log("estadosl: ", data5.estados)
        setEstadosL(data5.estados)
        //-----obtener prioridades---------
        let response6 = await fetch("/api/prioridades")
        const data6 = await response6.json()
        setPrioridades(data6.prioridades)
        //-----obtener estados actividad---
        let response7 = await fetch("/api/estadosa")
        const data7 = await response7.json()
        setEstadosa(data7.estados)
    }, [])
    const butNuevoOnClick = (pos) => {
        setDebeMostrarModal(true)
    }

    const onModalClose = () => {
        setDebeMostrarModal(false)
    }
    const butNuevoOnClick4 = (descripcion) => {
        const des=descripcion.split(",")
        console.log("datos: ", des)
        setDes(des[0])
        setActivity(des[1])
        setFecha(des[2])
        setDebeMostrarModal4(true)
    }
    const but=(descripcion)=>{
        const des=descripcion.split(",")
        setFecha(des[2])
    }
    const onModalClose4 = () => {
        setDebeMostrarModal4(false)
    }
    const butNuevoOnClick2 = (des) => {
        setDes(des)
        setDebeMostrarModal2(true)
    }

    const onModalClose2 = () => {
        setDebeMostrarModal2(false)
    }
    const eliminarActividad=(id)=>{
        fetch("/api/actividades", {
            method: 'DELETE',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: id
            }),
        })
        location.href="/lead"

    }
    const butNuevoOnClick3 = (estado) => {
        setTxtEstado(estado)
        setDebeMostrarModal3(true)
    }
    const [idact, setidact]=useState(0)
    const editarIdAct=(id)=>{
        setidact(id)
    }
    const onModalClose3 = () => {
        setDebeMostrarModal3(false)
    }
    const actualizar = (txtPrioridad, txtEstadoL) => {
        fetch('/api/leads/[id]', {
            method: 'PUT',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: lista[0],
                prioridad: parseInt(txtPrioridad),
                estado: parseInt(txtEstadoL)
            }),
        })
    }
    const listaClases=["nav-link","nav-link active","nav-link","nav-link"]
    return <div className="container">
        <Navegador lisClass={listaClases}></Navegador>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <ButtonLink nombre="Inicio leads" color="btn btn-link" path="/inicioleads" ></ButtonLink>
                <li class="breadcrumb-item active mt-2" aria-current="page">/ Lead1</li>
            </ol>
        </nav>
        <div className="card mt-2 bg-secondary bg-opacity-10">
            <div className="row mt-4 mb-4">
                <Cabecera nombre={lista[6]} editar={butNuevoOnClick2} editarLead={butNuevoOnClick2}></Cabecera>
                <InfoType datosLead={lista}></InfoType>   
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
                <Listado editarId={editarIdAct} elimAct={eliminarActividad} actividades={actividades} editarAct={butNuevoOnClick3} editar2={but} editar={butNuevoOnClick4} editarLead={butNuevoOnClick}></Listado>
            </div>
            <PlantillaModal nombre={activity} descrip={descripcion} mostrar={debeMostrarModal4} ocultar={onModalClose4} modo="desactivity"></PlantillaModal>
            <PlantillaModal metodos={metodos} estados={estados} lis={lista} mostrar={debeMostrarModal} ocultar={onModalClose} modo="agregar"></PlantillaModal>
            <PlantillaModal prioridades={prioridades} estados={estadosl} onActualizarLead={actualizar} lis={lista}  mostrar={debeMostrarModal2} ocultar={onModalClose2} modo="estadoPrioridad"></PlantillaModal>
            <PlantillaModal ide={idact} estados={estadosa} lis={lista} fecha={txtFecha} estado={parseInt(txtEstado)} mostrar={debeMostrarModal3} ocultar={onModalClose3} modo="actividad"></PlantillaModal>
        </div>
    </div>
}
export default Lead