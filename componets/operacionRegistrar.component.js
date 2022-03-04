import { loadGetInitialProps } from "next/dist/shared/lib/utils"
import { useState } from "react"

const RegistrarOperacion = (props) => {
    const [txtNombre, setTxtNombre]=useState("")
    const [txtDescripcion, setTxtDescripcion]=useState("")
    const [txtEstado, setTxtEstado]=useState("")
    const txtNombreOnChange=(event)=>{
        const nombre= event.target.value
        setTxtNombre(nombre)
    }
    const txtDescripcionOnChange=(event)=>{
        const descripcion= event.target.value
        console.log(descripcion)
        setTxtDescripcion(descripcion)
    }
    const txtEstadoOnClick =(event)=>{
        console.log("entra")
        const estado= event.target.value
        console.log(estado)
        setTxtEstado(estado)
    }
    const guardarOnClick=()=>{
        props.onRegistrar(txtNombre, txtDescripcion, txtEstado)
    }
    return <div className="row mt-2">
        <div className="col">
            <div className="mb-2">
                <h5>Datos de la empresa</h5>
                <button type="button" className="btn btn-secondary btn-sm">Cargar empresa</button>
            </div>
            <div className="input-group-sm mb-2">
                <label for="" className="form-label" >Nombre</label>
                <input type="text" className="form-control" />
            </div>
            <div className="input-group-sm mb-2">
                <label for="" className="form-label" >RUC</label>
                <input type="text" className="form-control" />
            </div>
            <div className="input-group-sm mb-2">
                <label for="" className="form-label" >Sitio Web</label>
                <input type="text" className="form-control" />
            </div>
            <div className="input-group-sm mb-2">
                <label for="" className="form-label" >Descripcion</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
            </div>
        </div>
        <div className="col">
            <div className="mb-2">
                <h5>Datos del contacto</h5>
                <button type="button" className="btn btn-secondary btn-sm">Cargar contacto</button>
            </div>
            <div className="input-group-sm mb-2">
                <label for="" className="form-label">Nombre</label>
                <input type="text" className="form-control" />
            </div>
            <div className="input-group-sm mb-2">
                <label for="" className="form-label">DNI</label>
                <input type="text" className="form-control" />
            </div>
            <div className="input-group-sm mb-2">
                <label for="" className="form-label">Cargo</label>
                <input type="text" className="form-control" />
            </div>
            <div className="input-group-sm mb-2">
                <label for="" className="form-label">Correo</label>
                <input type="email" className="form-control" />
            </div>
            <div className="input-group-sm mb-2">
                <label for="" className="form-label">Telefono</label>
                <input type="text" className="form-control" />
            </div>
        </div>
        <div className="col">
            <div className="mb-2">
                <h5>Datos del servicio</h5>
            </div>
            <div className="input-group-sm mb-2">
                <label for="" className="form-label">Nombre</label>
                <input type="text" className="form-control" onChange={txtNombreOnChange} />
            </div>
            <div className="input-group-sm mb-2">
                <label for="" className="form-label">Costo total</label>
                <input type="text" className="form-control" />
            </div>
            <div className="input-group-sm mb-2">
                <label for="" className="form-label">Abonado</label>
                <input type="text" className="form-control" />
            </div>
            <div className="input-group-sm mb-2">
                <label for="" className="form-label">Fecha de inicio</label>
                <input type="date" className="form-control" />
            </div>
            <div className="input-group-sm mb-2">
                <label for="" className="form-label">Fecha de fin</label>
                <input type="date" className="form-control" />
            </div>
            <div className="input-group-sm mb-2">
                <label for="" className="form-label">Estado</label>
                <select className="form-select" aria-label="Default select example">
                    <option selected>Elige un estado</option>
                    <option onChange={txtEstadoOnClick} value="1">One</option>
                    <option onSelect={txtEstadoOnClick} value="2">Two</option>
                    <option onSelect={txtEstadoOnClick} value="3">Three</option>
                </select>
            </div>
            <div className="input-group-sm mb-2">
                <label for="" className="form-label" >Descripcion</label>
                <textarea onChange={txtDescripcionOnChange} className="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
            </div>
        </div>
        <div class="card mb-1">
            <button onClick={guardarOnClick} class="btn btn-primary">
                Guardar
            </button>
        </div>
    </div>

}
export default RegistrarOperacion