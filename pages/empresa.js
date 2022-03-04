import Navegador from "../componets/Navegador.component";
import ButtonLink from "../componets/botonEnlace.component";
import Listado from "../componets/listaConDatos.component";
import { obtenerTratos } from "../dao/tratos";
import { useEffect, useState } from "react";
const EmpresaView=()=>{
    const [listaTratos, setListaTratos]=useState([])
    useEffect(()=>{
        setListaTratos(obtenerTratos())
    }, [])
    return <div className="contariner">
        <Navegador></Navegador>
        <div className="row mb-4 mt-4">
            <div className="col">
                <h1>Empresa#</h1>
                <ButtonLink nombre="Editar" color="btn btn-warning me-2"></ButtonLink>
                <ButtonLink nombre="Eliminar" color="btn btn-danger" ></ButtonLink>
            </div>
            <div className="row mt-4 mb-4">
                <h4>Contratos</h4>
            </div>
            <Listado tratos={listaTratos}></Listado>
            <div className="row mt-4">
                <h4>Contactos</h4>
            </div>
            <Listado tratos={listaTratos}></Listado>
        </div>
    </div>
}
export default EmpresaView;