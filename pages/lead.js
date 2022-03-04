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
    const [txtEstado, setTxtEstado]= useState("")
    const [txtFecha, setFecha]= useState("")
    const [email, setEmail]=useState("")
    useEffect(async () => {
        console.log("obt: ", obtenerKeyLead())
        const x= obtenerKeyLead()
        const datos= x.split(",")
        console.log(datos[0])
        setEmail(datos[0])
        //----------------------
        let response= await fetch("/api/leads/[id]", {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: datos[0],
              fecha: datos[1],
              servicio: datos[2]
            }),
          })

        //---------------------
        //let response = await fetch("/api/leads")
        const data = await response.json()
        console.log("data: ", data.lead[0])
        setLista(data.lead[0])

        //---------------------------------------
        let response2= await fetch("/api/actividades", {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              tipo: "Lead",
              email: datos[0]
            }),
          })
          const data2 = await response2.json()
        console.log("data: ", data2.actividades)
        setActividades(data2.actividades)
    }, [])
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
    const butNuevoOnClick4 = (descripcion) => {
        //setModoFormulario("nuevo")
        const des=descripcion.split(",")
        console.log("datos: ", des)
        setDes(des[0])
        setActivity(des[1])
        setFecha(des[2])
        setDebeMostrarModal4(true)
        //setPosicion(pos)
    }
    const but=(descripcion)=>{
        const des=descripcion.split(",")
        setFecha(des[2])
    }
    const onModalClose4 = () => {
        setDebeMostrarModal4(false)
    }
    const butNuevoOnClick2 = (des) => {
        //setModoFormulario("nuevo")
        //location.href="/lead"
        //mos(des)
        setDes(des)
        setDebeMostrarModal2(true)
    }

    const onModalClose2 = () => {
        setDebeMostrarModal2(false)
    }
    const eliminarActividad=(estado)=>{
        const dt=estado.split(",")
        /*setDes(dt[0])
        setActivity(dt[1])
        setTxtEstado(dt[3])
        setFecha(dt[2])
        *///setDebeMostrarModal3(true)
        fetch("/api/leads", {
            method: 'DELETE',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              tipo: "Lead",
              email: email,
              fecha: dt[2]
            }),
        })
        location.href="/lead"

    }
    const butNuevoOnClick3 = (estado) => {
        const dt=estado.split(",")
        setDes(dt[0])
        setActivity(dt[1])
        setTxtEstado(dt[3])
        setFecha(dt[2])
        setDebeMostrarModal3(true)
        //setPosicion(pos)
    }

    const onModalClose3 = () => {
        setDebeMostrarModal3(false)
    }
    const actualizar=(txtPrioridad, txtEstadoL)=>{
        var daylead=new Date()
            const lfechas=lista[7].split("T")
            daylead=lfechas[0]
            console.log(daylead)
            console.log(txtPrioridad)
            console.log(txtEstadoL)
            fetch('/api/leads/[id]', {
                method: 'PUT',
                mode: 'cors',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email: lista[2],
                    lead_fecha: daylead,
                    servicio:lista[3],
                    prioridad: txtPrioridad,
                    estado: txtEstadoL
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
                <Cabecera nombre={lista[5]} editar={butNuevoOnClick2} editarLead={butNuevoOnClick2}></Cabecera>
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
                <Listado elimAct={eliminarActividad} actividades={actividades} editarAct={butNuevoOnClick3} editar2={but} editar={butNuevoOnClick4} editarLead={butNuevoOnClick}></Listado>
            </div>
            <PlantillaModal nombre={activity} descrip={descripcion} mostrar={debeMostrarModal4} ocultar={onModalClose4} modo="desactivity"></PlantillaModal>
            <PlantillaModal lis={lista} mostrar={debeMostrarModal} ocultar={onModalClose} modo="agregar"></PlantillaModal>
            <PlantillaModal onActualizarLead={actualizar} lis={lista}  mostrar={debeMostrarModal2} ocultar={onModalClose2} modo="estadoPrioridad"></PlantillaModal>
            <PlantillaModal lis={lista} fecha={txtFecha} estado={txtEstado} mostrar={debeMostrarModal3} ocultar={onModalClose3} modo="actividad"></PlantillaModal>
        </div>
    </div>
}
export default Lead