import ButtonLink from "../componets/botonEnlace.component"
import Listado from "../componets/listaConDatos.component"
import ListadoLeads from "../componets/listaLeads.component"
import Navegador from "../componets/Navegador.component"
import { useState, useEffect } from "react"
import PlantillaModal from "../componets/modal.component"
const InicioLeads=()=>{
    const listaClases=["nav-link","nav-link active","nav-link","nav-link"]
    const [lista, setLista] = useState([])
    const [listaServicios, setServicios]= useState([]);

    const obtenerServiciosHTTP= async()=>{
        let response = await fetch("/api/servicios")
        const data = await response.json()
        return data
    }
    useEffect(async () => {
        let response = await fetch("/api/leads")
        const data = await response.json()
        console.log(data)
        setLista(data.leads)

        const dataServicios = await obtenerServiciosHTTP()
        setServicios(dataServicios.servicios)
    }, [])
    const [debeMostrarModal2, setDebeMostrarModal2] = useState(false)
    /*
    */
    const butNuevoOnClick2 = () => {
        setDebeMostrarModal2(true)
    }
    const onModalClose2 = () => {
        setDebeMostrarModal2(false)
    }
    const insertarLead=(txtNombre, txtApellido, 
        txtEmail, txtServicio,txtTelefono, txtEmpresa, txtCargo)=>{
        fetch('/api/externos', {
            method: 'PUT',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                nombre: txtNombre,
                apellido: txtApellido,
                email: txtEmail,
                id_servicio:parseInt(txtServicio),
                telefono: parseInt(txtTelefono),
                empresa:txtEmpresa,
                cargo:txtCargo,
                id_usuario:100,
                id_estado:100,
                id_prioridad: 100
            }),
        })
        location.href="/inicioleads"
    }
    const inputOnChange= async(event)=>{
        if(event.target.value!=""){
            const lead={
                nombre: event.target.value
            }
            const resp = await fetch("/api/leads", {
                method : "PUT",
                body : JSON.stringify(lead)
            })
            const data= await resp.json()
            console.log(data.leads)
            setLista(data.leads)
        }else{
            let response = await fetch("/api/leads")
            const data = await response.json()
            console.log(data)
            setLista(data.leads)
        }
        
    }
    return <div className="container">
        <Navegador lisClass={listaClases}></Navegador>
        <h1>Leads </h1>
        <div className="row">
            <div className="col-3 mb-2">
                    <input onChange={inputOnChange} type="input" placeholder="buscar" className="form-control" />
            </div>
            <div className="col-7"/>
            <div className="col mb-2">
                    <button onClick={butNuevoOnClick2} className="btn btn-success">+Agregar</button>
            </div>
        </div>
        <ListadoLeads leads={lista}></ListadoLeads>
        <PlantillaModal servicios={listaServicios} onInsertar={insertarLead} mostrar={debeMostrarModal2} ocultar={onModalClose2} modo="lead"></PlantillaModal>
    </div> 
}
export default InicioLeads