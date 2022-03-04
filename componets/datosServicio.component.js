import { useState } from "react"

const DatosServicio =()=>{
    const [txtNombre, setNombre]=useState("")
    const [txtEstado, setEstado]=useState("")
    const [txtDescripcion, setDescripcion]=useState("")
    return <div className="col">
        <div className="mb-2">
            <h5>Datos del servicio</h5>
        </div>
        <div className="input-group-sm mb-2">
            <label for="" className="form-label">Nombre</label>
            <input type="text" className="form-control"/>
        </div>
        <div className="input-group-sm mb-2">
            <label for="" className="form-label">Costo total</label>
            <input type="text" className="form-control"/>
        </div>
        <div className="input-group-sm mb-2">
            <label for="" className="form-label">Abonado</label>
            <input type="text" className="form-control"/>
        </div>
        <div className="input-group-sm mb-2">
            <label for="" className="form-label">Fecha de inicio</label>
            <input type="date" className="form-control"/>
        </div>
        <div className="input-group-sm mb-2">
            <label for="" className="form-label">Fecha de fin</label>
            <input type="date" className="form-control"/>
        </div>
        <div className="input-group-sm mb-2">
            <label for="" className="form-label">Estado</label>
            <select className="form-select" aria-label="Default select example">
                <option selected>Elige un estado</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>
        <div className="input-group-sm mb-2">
            <label for="" className="form-label" >Descripcion</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
        </div>
        <div class="card mb-1">
            <button class="btn btn-primary">
                Guardar
            </button>
        </div>
    </div>
}
export default DatosServicio