import { Button } from "react-bootstrap"
import ButtonLink from "./botonEnlace.component"
import { setkeyLead } from "../dao/variable"
const ListadoLeads = (props) => {
    const butOnClick=(event)=>{
      fetch("/api/leads", {
        method: 'DELETE',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: event.target.id
        }),
      })
      location.href="/inicioleads"
    }
    const detallesOnClick=(event)=>{
        setkeyLead(event.target.id)
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
                                    <p class="card-text">Prioridad: {lead.prioridad}</p>
                                </div>
                                <div className="col">
                                        <button id={lead.id} className="btn btn-primary mt-5 me-2" onClick={detallesOnClick}>Detalles</button>
                                        <button id={lead.id} className="btn btn-danger mt-5" onClick={butOnClick}>Eliminar</button>
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