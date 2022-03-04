const DatosPersonal =()=>{
    return <div className="col">
        <div className="mb-2">
            <h5>Datos del personal responsable</h5>
            <button type="button" className="btn btn-secondary btn-sm">Cargar personal</button>
        </div>
        <div className="input-group-sm mb-2">
            <label for="" className="form-label">Nombre</label>
            <input type="text" className="form-control"/>
        </div>
        <div className="input-group-sm mb-2">
            <label for="" className="form-label">DNI</label>
            <input type="text" className="form-control"/>
        </div>
        <div className="input-group-sm mb-2">
            <label for="" className="form-label">Cargo</label>
            <input type="text" className="form-control"/>
        </div>
    </div>
}
export default DatosPersonal