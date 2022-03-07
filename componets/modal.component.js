import { Modal, Button, Card } from "react-bootstrap"
import { useEffect, useState } from 'react';
const PlantillaModal=(props)=>{
    const [txtNombre, setTxtNombre] = useState("")
    const [txtApellido, setTxtApellido] = useState("")
    const [txtEmail, setTxtEmail] = useState("")
    const [txtServicio, setTxtServicio] = useState("")
    const [txtTelefono, setTxtTelefono] = useState("")
    const [txtEmpresa, setTxtEmpresa] = useState("")
    const [txtCargo, setTxtCargo] = useState("")
    const [listaIdServicios, setListaIdServicios] = useState([])
    const txtNOMBREonChange = (event) => {
        setTxtNombre(event.target.value)
    }
    const txtApellidoonChange = (event) => {
        setTxtApellido(event.target.value)
    }
    const txtEMAILonChange = (event) => {
        setTxtEmail(event.target.value)
    }
    const txtServicioOnChange=(event)=>{
        console.log(event.target.value)
        setTxtServicio(event.target.value)
    }
    const txtTelefonoOnChange=(event)=>{
        console.log(event.target.value)
        setTxtTelefono(event.target.value)
    }
    const txtEmpresaOnChange=(event)=>{
        console.log(event.target.value)
        setTxtEmpresa(event.target.value)
    }
    const txtCargoOnChange=(event)=>{
        console.log(event.target.value)
        setTxtCargo(event.target.value)
    }
    const butLead=()=>{
        props.onInsertar(txtNombre, txtApellido, 
            txtEmail, txtServicio,txtTelefono, txtEmpresa, txtCargo)
    }
    //-------------
    const [txtbtn, setTxtbtn]= useState("btn btn-primary disabled")
    const [txtDate, setTxtDate]= useState("")
    const [txtDescrip, setTxtDescrip] = useState("")
    const [txtTipo, setTxtTipo] = useState("")
    const [txtEstado, setTxtEstado] = useState(0)
    const [txtEstadoL, setTxtEstadoL] = useState("")
    const [txtPrioridad, setTxtPrioridad]=useState(0)
    useEffect(() => {
        if (props.lis != null) {
            setTxtEstadoL(props.lis[10])
            setTxtPrioridad(props.lis[11])
        }
    }, [props.lis])


    const txtDescripOnChange=(event)=>{
        setTxtDescrip(event.target.value)
    }
    const txtDateOnChange=(event)=>{
        console.log(event.target.value)
        setTxtDate(event.target.value)
    }
    const txtTipoOnChange=(event)=>{
        setTxtTipo(event.target.value)
    }
    const txtEstadoOnChange = (event) => {
        setTxtEstado(event.target.value)
    }
    const txtEstadolOnChange=(event)=>{
        setTxtbtn("btn btn-primary")
        setTxtEstadoL(event.target.value)
    }
    const txtPrioridadOnChange=(event)=>{
        setTxtbtn("btn btn-primary")
        setTxtPrioridad(event.target.value)
    }
    const butGuardarOnClick = () => {
        console.log(txtDate.split("T"))
        const fechas=txtDate.split("T")
        var day=new Date()
        day= fechas[0]+' '+fechas[1]
        fetch('/api/actividades', {
            method: 'PUT',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id_lead: props.lis[0],
                fecha:day,
                descripcion: txtDescrip,
                metodo:parseInt(txtTipo),
                estado: parseInt(txtEstado)
            }),
        })
        location.href="/lead"
    }
    const butGuardarPriOnClick = () => {
        props.onActualizarLead(txtPrioridad, txtEstadoL)
        location.href="/lead"
    }
    //------------------------------------------
    const [txtEstadoA, setTxtEstadoA]=useState("")
    /*useEffect(() => {
        setTxtEstadoA(props.estado)
        console.log("estado: ", props.estado)
    },)*/
    const txtEstadoaOnChange=(event)=>{
        setTxtEstadoA(event.target.value)
        setTxtbtn("btn btn-primary")
    }
    const editarEstadoLead=()=>{
        fetch('/api/actividades/[id]', {
            method: 'PUT',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: props.ide,
                estado: parseInt(txtEstadoA)
            }),
        })
        location.href="/lead"
    }

    if (props.modo == "agregar") {
        return <Modal show={props.mostrar}
            onHide={props.ocultar}>
            <Modal.Header closeButton>
                <Modal.Title>Actividad</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div className="input-group-sm mb-2">
                        <label for="" className="form-label" >Descripcion</label>
                        <textarea className="form-control" onChange={txtDescripOnChange} id="exampleFormControlTextarea1" rows="2"></textarea>
                    </div>
                    <div>
                        <label className="form-label">
                            Día y hora
                        </label>
                        <input className="form-control"
                            type="datetime-local" 
                            onChange={txtDateOnChange} />
                    </div>
                    <div>
                        <label for="" className="form-label">Tipo de actividad</label>
                        <select className="form-select" size="2" defaultValue={listaIdServicios}
                            onChange={txtTipoOnChange} multiple>
                            {
                                props.metodos.map((metodo) => {
                                    return <option value={metodo.id} key={metodo.id}>
                                        {metodo.nombre}
                                    </option>
                                })
                            }
                        </select>
                    </div>
                    <div>
                        <label for="" className="form-label">Estado</label>
                        <select className="form-select" size="2" defaultValue={listaIdServicios}
                            onChange={txtEstadoOnChange} multiple>
                            {
                                props.estados.map((estado) => {
                                    return <option value={estado.id} key={estado.id}>
                                        {estado.nombre}
                                    </option>
                                })
                            }
                        </select>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.ocultar}>Cerrar</Button>
                <Button variant="primary" onClick={butGuardarOnClick}>Guardar</Button>
            </Modal.Footer>
        </Modal>
    }else if(props.modo=="estadoPrioridad"){
        var prio= props.lis[11]
        if(prio==1){
            prio="Baja"
        }else if(prio==2){
            prio="Media"
        }else{
            prio="Alta"
        }
        return <Modal show={props.mostrar}
            onHide={props.ocultar}>
            <Modal.Header closeButton>
                <Modal.Title>Lead</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div>
                        <label for="" className="form-label">Prioridad</label>
                        <select className="form-select" size="2" defaultValue={txtPrioridad}
                            onChange={txtPrioridadOnChange}>
                            {
                                props.prioridades.map((prioridad) => {
                                    return <option value={prioridad.id} key={prioridad.id}>
                                        {prioridad.nombre}
                                    </option>
                                })
                            }
                        </select>
                    </div>
                    <div>
                        <label for="" className="form-label">Estado</label>
                        <select className="form-select" size="2" defaultValue={txtEstadoL}
                            onChange={txtEstadolOnChange}>
                            {
                                props.estados.map((estado) => {
                                    return <option value={estado.id} key={estado.id}>
                                        {estado.nombre}
                                    </option>
                                })
                            }
                        </select>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.ocultar}>Cerrar</Button>
                <button className={txtbtn} variant="primary" onClick={butGuardarPriOnClick}>Guardar</button>
            </Modal.Footer>
        </Modal>
    }else if(props.modo=="lead"){
        return <Modal show={props.mostrar}
            onHide={props.ocultar}>
            <Modal.Header closeButton>
                <Modal.Title>Lead</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div className="input-group-sm mb-1">
                        <label for="" className="form-label" >Nombre</label>
                        <input type="text" placeholder="Nombre" className="form-control" onChange={txtNOMBREonChange} />
                    </div>
                    <div className="input-group-sm mb-1">
                        <label for="" className="form-label" >Apellido</label>
                        <input type="text" placeholder="Apellido" className="form-control" onChange={txtApellidoonChange} />
                    </div>
                    <div className="input-group-sm mb-1">
                        <label for="" className="form-label">CORREO</label>
                        <input type="text" placeholder="@EMAIL.COM" className="form-control" onChange={txtEMAILonChange} />
                    </div>
                    <div className="input-group-sm mb-1">
                        <label  className="form-label">Servicio</label>
                        <select className="form-select" size="2" defaultValue={listaIdServicios}
                            onChange={txtServicioOnChange} multiple>
                            {
                                props.servicios.map((servicio) => {
                                    return <option value={servicio.id} key={servicio.id}>
                                        {servicio.nombre}
                                    </option>
                                })
                            }
                        </select>
                    </div>
                    <div className="input-group-sm mb-1">
                        <label for="" className="form-label" >Teléfono</label>
                        <input type="text" className="form-control" onChange={txtTelefonoOnChange} />
                    </div>
                    <div className="input-group-sm mb-1">
                        <label for="" className="form-label" >Empresa a la cual perteneces</label>
                        <input type="text" className="form-control" onChange={txtEmpresaOnChange} />
                    </div>
                    <div className="input-group-sm">
                        <label for="" className="form-label" >Cargo en empresa</label>
                        <input type="text" className="form-control" onChange={txtCargoOnChange} />
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.ocultar}>Cerrar</Button>
                <Button variant="primary" onClick={butLead}>Guardar</Button>
            </Modal.Footer>
        </Modal>
    }
    else if(props.modo=="actividad"){
        return <Modal show={props.mostrar}
            onHide={props.ocultar}>
            <Modal.Header closeButton>
                <Modal.Title>Actividad</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div>
                        <label for="" className="form-label">Estado</label>
                        <select className="form-select" size="2" defaultValue={props.estado}
                            onChange={txtEstadoaOnChange} >
                            {
                                props.estados.map((estado) => {
                                    return <option value={estado.id} key={estado.id}>
                                        {estado.nombre}
                                    </option>
                                })
                            }
                        </select>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.ocultar}>Cerrar</Button>
                <button className={txtbtn} variant="primary" onClick={editarEstadoLead}>Guardar</button>
            </Modal.Footer>
        </Modal>
    }else if(props.modo=="desactivity"){
        return <Modal show={props.mostrar}
            onHide={props.ocultar}>
            <Card>
                <div class="card-header">Actividad</div>
                <div class="card-body">
                    <h5 class="card-title">{props.nombre}</h5>
                    <p class="card-text">{props.descrip}</p>
                </div>   
            <Modal.Footer>
                <Button variant="secondary" onClick={props.ocultar}>Cerrar</Button>
                <button className={txtbtn} variant="primary" >Guardar</button>
            </Modal.Footer>
            </Card>
        </Modal>
    }
}
export default PlantillaModal