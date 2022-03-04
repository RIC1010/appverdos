import { Button } from "react-bootstrap"
import ButtonLink from "./botonEnlace.component"
import { setkeyLead } from "../dao/variable"
const ListadoLeads = (props) => {
    const butOnClick=(event)=>{
      console.log(event.target.id)
      const identificador=event.target.id.split(",")
      console.log(identificador[0])
      console.log(identificador[1])
      console.log(identificador[2])
      
      fetch("/api/leads", {
        method: 'DELETE',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: identificador[0],
          fecha: identificador[1],
          servicio: identificador[2]
        }),
      })
      location.href="/inicioleads"
    }
    const detallesOnClick=(event)=>{
        console.log("entra")
        console.log(event.target.id)
        const identificador=event.target.id.split(",")
        console.log(identificador)
        setkeyLead(identificador[0], identificador[1], identificador[2])
        location.href="/lead"
    }
    return <div className="row container">
        <div className="col" />
        <div className="table-wrapper-scroll-y2 my-custom-scrollbar2">
            <table className="table table-bordered table-striped mb-0">
                <tbody id="data_leads">
                    {
                        props.leads.map((lead) => {
                          var prio;
                          if (lead.prioridad == 1) {
                            prio = "baja"
                          } else if (lead.prioridad == 2) {
                            prio = "media"
                          } else {
                            prio = "alta"
                          }
                            return <div class="card mb-3">
                            <div class="card-body">
                              <div className="row">
                                <div className="col">
                                  <h5 class="mt-4">{lead.empresa}</h5>
                                </div>
                                <div className="col">
                                    <h6>Contacto: {lead.contacto}</h6>
                                    <h6>Servicio: {lead.servicio}</h6>
                                    <p class="card-text">Estado: {lead.estado}</p>
                                    <p class="card-text">Prioridad: {prio}</p>
                                    <p class="card-text"><small class="text-muted">Fecha de registro: {lead.fecha}</small></p>
                                </div>
                                <div className="col">
                                        <button id={[lead.email, lead.fecha, lead.servicio]} className="btn btn-primary mt-5 me-2" onClick={detallesOnClick}>Detalles</button>
                                        <button id={[lead.email, lead.fecha, lead.servicio]} className="btn btn-danger mt-5" onClick={butOnClick}>Eliminar</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        })
                    }
                </tbody>
            </table>
        </div>
        <div className="col" />
    </div>

}
export default ListadoLeads