import ButtonLink from "./botonEnlace.component"
const InfoType=(props)=>{
    return <div className="col-9 container">
        <div className="row">
            <div className="col-sm">
                <h6>Empresa</h6>
                <p class="card-text">{props.datosLead[6]}</p>
                <h6>Número</h6>
                <p class="card-text">{props.datosLead[5]}</p>
            </div>
            <div className="col-sm">
                <h6>Nombre de Contacto</h6>
                <p class="card-text">{props.datosLead[1]+" "+props.datosLead[2] }</p>
                <h6>Cargo del Contacto</h6>
                <p className="card-text">{props.datosLead[8]}</p>
            </div>
            <div className="col-sm">
                <h6>Email</h6>
                <p class="card-text">{props.datosLead[3]}</p>
                <h6>Servicio a ofrecer</h6>
                <p class="card-text">{props.datosLead[13]}</p>
            </div>
        </div>
    </div> 
}
export default InfoType