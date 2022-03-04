import ButtonLink from "./botonEnlace.component"

const Formulario =(props)=>{
    return <div className="col mt-2">
        <div className="input-group-sm mb-2">
            <label for="" className="form-label">Nombre</label>
            <input type="input" className="form-control"/>
        </div>
        <div className="input-group-sm mb-2">
            <label for="" className="form-label">Correo</label>
            <input type="input" className="form-control"/>
        </div>
        <div className="input-group-sm mb-2">
            <label for="" className="form-label">Trabajo</label>
            <select className="form-select" aria-label="Default select example">
                <option selected>Elige una actividad</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>
        <div className="input-group-sm mb-2">
            <label for="" className="form-label" >Descripcion</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
        </div>
        <div className="mt-2 mb-2">
            <ButtonLink path="/inicioleads" color="btn btn-primary" nombre="Enviar"></ButtonLink>
        </div>
    </div>
}
export default Formulario