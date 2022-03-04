import { useState } from "react"
const Form=()=>{
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
    const butOnclick = () => {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); 
        var yyyy = today.getFullYear();
        today = yyyy + '/' + mm + '/' + dd;
        //------------------------
        fetch('/api/externos', {
            method: 'PUT',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                nombre: txtNombre,
                apellido: txtApellido,
                email: txtEmail,
                servicio:txtServicio,
                telefono: parseInt(txtTelefono),
                empresa:txtEmpresa,
                fecha:today,
                cargo:txtCargo
            }),
        })
    }
    return <aside>
        <div className="card bg-secondary text-black bg-opacity-25">
            <div className="card-body">
                <div className="row">
                    <div className="col">

                    </div>
                    <div className="col">
                        <h2 className="text-center">Contáctanos</h2>
                    </div>
                    <div className="col">

                    </div>
                </div>
                <h5>Iniciar Sesión</h5>
                <div className="input-group-sm mb-2">
                    <label for="" className="form-label">NOMBRE</label>
                    <input type="text" placeholder="Nombre" className="form-control" onChange={txtNOMBREonChange} />
                </div>
                <div className="input-group-sm mb-2">
                    <label for="" className="form-label">APELLIDO</label>
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
                        <option value="Digital Branding">Digital Branding</option>
                    </select>
                </div>
                <div className="input-group-sm mb-2">
                    <label for="" className="form-label" >Teléfono</label>
                    <input type="text"  className="form-control" onChange={txtTelefonoOnChange} />
                </div>
                <div className="input-group-sm mb-2">
                    <label for="" className="form-label" >Empresa a la cual perteneces</label>
                    <input type="text"  className="form-control" onChange={txtEmpresaOnChange} />
                </div>
                <div className="input-group-sm mb-2">
                    <label for="" className="form-label" >Cargo que desempeñas dentro de la empresa</label>
                    <input type="text" className="form-control" onChange={txtCargoOnChange} />
                </div>
                <div className="row mt-2 mb-2">
                    <div className="col">
                        <button className="btn btn-primary" onClick={butOnclick}>Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    </aside>
}
export default Form