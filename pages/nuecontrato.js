import Head from "next/head";
import Navegador from "../componets/Navegador.component";
import Ubicacion from "../componets/ubicacion.component";
import RegistrarOperacion from "../componets/operacionRegistrar.component";
import { guardarTrato } from "../dao/tratos";
const NuevoContrato=()=>{
    /*const navegar=(txtpagina)=>{
        console.log("entra")
        const enlace= "/" +txtpagina
        console.log(enlace)
        location.href=enlace
    }*/
    const almacenarTrato=(nombre, descripcion, estado)=>{
        guardarTrato(nombre, descripcion, estado)
        location.href="/iniciocontratos"
    }
    return (
        <div className="container">
            <div className="container">
                <Navegador></Navegador>
            </div>
            <RegistrarOperacion onRegistrar={almacenarTrato} ></RegistrarOperacion>
        </div>
        
    )
}
export default NuevoContrato