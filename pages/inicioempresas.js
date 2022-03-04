import Navegador from "../componets/Navegador.component"
import ButtonLink from "../componets/botonEnlace.component"
import Listado from "../componets/listaConDatos.component"
import { useEffect, useState } from "react"
import { obtenerTratos } from "../dao/tratos"
const InicioEmpresas=()=>{
    const [listaTratos, setListaTratos]=useState([])
    useEffect(()=>{
        setListaTratos(obtenerTratos())
    }, [])
    return <div className="container">
        <Navegador></Navegador>
        <div className="mb-2 mt-2">
            <h3>Lista de Empresas</h3>
        </div>
        <ButtonLink nombre="Agregar empresa" color="btn btn-success" path="/nuecontrato"/>
        <Listado tratos={listaTratos}></Listado>
    </div>
}
export default InicioEmpresas