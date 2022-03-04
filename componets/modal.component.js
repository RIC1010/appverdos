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
        console.log(day)
        console.log(props.lis[7])
        var daylead=new Date()
        const lfechas=props.lis[7].split("T")
        daylead=lfechas[0]
        console.log(daylead)
        fetch('/api/actividades', {
            method: 'PUT',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: props.lis[2],
                lead_fecha: daylead,
                servicio:props.lis[3],
                fecha:day,
                descripcion: txtDescrip,
                metodo:txtTipo,
                tipo:"Lead",
                estado: txtEstado
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
        console.log(event.target.value)
        setTxtEstadoA(event.target.value)
        setTxtbtn("btn btn-primary")
    }
    const editarEstadoLead=()=>{
        var daylead=new Date()
        const fe=props.fecha
        const lfechas=fe.split("T")
        console.log("fecha: ", props.fecha)
        daylead=lfechas[0] +''+ lfechas[1]
        fetch('/api/actividades/[id]', {
            method: 'PUT',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: props.lis[2],
                tipo: "Lead",
                fecha:daylead,
                estado:txtEstadoA
            }),
        })
        console.log(props.lis[2])
        console.log("Lead")
        console.log(daylead)
        console.log(txtEstadoA)
        //location.href="/lead"
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
                        <select onChange={txtTipoOnChange} className="form-select" aria-label="Default select example">
                            <option selected>Elija una actividad</option>
                            <option value="Llamada">Llamada</option>
                            <option value="Reunión">Reunión</option>
                            <option value="Email">E-mail</option>
                            <option value="Demo">Demo</option>
                        </select>
                    </div>
                    <div>
                        <label for="" className="form-label">Estado</label>
                        <select onChange={txtEstadoOnChange} className="form-select" aria-label="Default select example">
                            <option selected>Elija un estado</option>
                            <option value="Realizado">Realizado</option>
                            <option value="Planificado">Planificado</option>
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
                        <select defaultValue={txtPrioridad} onChange={txtPrioridadOnChange} className="form-select">
                            <option value={1}>Baja</option>
                            <option value={2}>Media</option>
                            <option value={3}>Alta</option>
                        </select>
                    </div>
                    <div>
                        <label for="" className="form-label">Estado</label>
                        <select defaultValue={txtEstadoL}  onChange={txtEstadolOnChange} className="form-select" aria-label="Default select example">
                            <option value="Registrado">Registrado</option>
                            <option value="Propuesta">Propuesta</option>
                            <option value="Etapa final">Etapa final</option>
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
                    <div className="input-group-sm mb-2">
                        <label for="" className="form-label" >Nombre</label>
                        <input type="text" placeholder="Nombre" className="form-control" onChange={txtNOMBREonChange} />
                    </div>
                    <div className="input-group-sm mb-2">
                        <label for="" className="form-label" >Apellido</label>
                        <input type="text" placeholder="Apellido" className="form-control" onChange={txtApellidoonChange} />
                    </div>
                    <div className="input-group-sm mb-2">
                        <label for="" className="form-label">CORREO</label>
                        <input type="text" placeholder="@EMAIL.COM" className="form-control" onChange={txtEMAILonChange} />
                    </div>
                    <div className="input-group-sm mb-2">
                        <label for="" className="form-label">Servicio</label>
                        <select className="form-select" onChange={txtServicioOnChange} aria-label="Default select example">
                            <option selected>Elige un servicio</option>
                            <option value="Publicidad">Publicidad</option>
                            <option value="Brand Design">Brand Design</option>
                            <option value="Social Media">Social Media</option>
                        </select>
                    </div>
                    <div className="input-group-sm mb-2">
                        <label for="" className="form-label" >Teléfono</label>
                        <input type="text" className="form-control" onChange={txtTelefonoOnChange} />
                    </div>
                    <div className="input-group-sm mb-2">
                        <label for="" className="form-label" >Empresa a la cual perteneces</label>
                        <input type="text" className="form-control" onChange={txtEmpresaOnChange} />
                    </div>
                    <div className="input-group-sm mb-2">
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
                        <select defaultValue={props.estado}  onChange={txtEstadoaOnChange} className="form-select" >
                            <option value="Realizado">Realizado</option>
                            <option value="Planificado">Planificado</option>
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