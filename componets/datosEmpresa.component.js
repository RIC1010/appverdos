const DatosEmpresa =()=>{
    return <div className="col">
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
    
}
export default DatosEmpresa