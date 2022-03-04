import Navegador from "../componets/Navegador.component"
import ButtonLink from "../componets/botonEnlace.component"
import Listado from "../componets/listaConDatos.component"
import { useEffect, useState } from "react"
import { obtenerTratos } from "../dao/tratos"
const InitContratos=()=>{
    /*const navegar = (txtpagina) => {
        location.href =txtpagina
    }*/
    const [listaTratos, setListaTratos]=useState([])
    useEffect(()=>{
        setListaTratos(obtenerTratos())
    }, [])
    return <div className="container">
        <Navegador></Navegador>
        <div className="mb-2 mt-2">
            <h3>Lista de contratos</h3>
        </div>
        <ButtonLink nombre="Nuevo contrato" color="btn btn-success me-2" path="/nuecontrato"/>
        <ButtonLink nombre="Filtrar por [v]" color="btn btn-danger me-2" path="/nuecontrato"/>
        <Listado tratos={listaTratos}></Listado>
    </div>
}
export default InitContratos