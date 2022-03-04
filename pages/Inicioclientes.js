import Navegador from "../componets/Navegador.component"
import ButtonLink from "../componets/botonEnlace.component"
import { useEffect, useState } from "react"
import { obtenerTratos } from "../dao/tratos"
import ListadoLeads from "../componets/listaLeads.component"
const InicioCliente=()=>{
    const listaClases=["nav-link","nav-link","nav-link active","nav-link"]
    const [listaTratos, setListaTratos]=useState([])
    useEffect(()=>{
        setListaTratos(obtenerTratos())
    }, [])
    const lista=[{nombre: "Gloria"},{nombre: "Adidas"} ]
    return <div className="container">
        <Navegador lisClass={listaClases}></Navegador>
        <h1>Clientes</h1>
        <div className="row">
            <div className="col-3 mb-2">
                    <input type="input" placeholder="buscar" className="form-control" />
            </div>
            <div className="col-7"/>
            <div className="col mb-2">
                    <ButtonLink color="btn btn-success" nombre="+ Agregar" path="/inicioleads"></ButtonLink>
            </div>
        </div>
        <ListadoLeads leads={lista}></ListadoLeads>
    </div>
}
export default InicioCliente