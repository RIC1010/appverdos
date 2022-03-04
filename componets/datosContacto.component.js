const DatosContacto =()=>{
    return <div className="col">
        <div className="mb-2">
            <h5>Datos del contacto</h5>
            <button type="button" className="btn btn-secondary btn-sm">Cargar contacto</button>
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
        <div className="input-group-sm mb-2">
            <label for="" className="form-label">Correo</label>
            <input type="email" className="form-control"/>
        </div>
        <div className="input-group-sm mb-2">
            <label for="" className="form-label">Telefono</label>
            <input type="text" className="form-control"/>
        </div>
        <button type="button" className="btn btn-success btn-sm">nuevo contacto</button>
    </div>
}
export default DatosContacto