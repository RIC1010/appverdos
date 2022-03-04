import ButtonLink from "../componets/botonEnlace.component"
import Navegador from "../componets/Navegador.component"

const InicioUsuarioCliente = () => {
    const link = "/nuecontrato"
    /*const navegar=(txtpagina)=>{
        location.href=txtpagina
    }*/
    return <div className="container">
        <Navegador ></Navegador>
        <div className="row mb-4">
            <div className="col">
                <h1>Empresa#</h1>
                <ButtonLink nombre="Editar" color="btn btn-warning me-2" path="/nuecontrato"></ButtonLink>
                <ButtonLink nombre="Contacto vinculado" color="btn btn-info" path="/cliente"></ButtonLink>
            </div>
        </div>
        <div id="fechas" className="row mt-4">
            <div className="row mt-4">
                <h3>TítuloContrato</h3>
            </div>
            <div id="Descripción" className="row">
                <div class="card text-center">
                    <div class="card-body">
                        <h5 class="card-title">(Descripcion del contrato)</h5>
                        <p class="card-text">Creación y desarrollo  de un  logo, línea gráfica,
                         manual de marca, papelería y  diseño gráfico publicitario; para hacer una marca única.</p>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col">
                    <h6>Inicio del contrato</h6>
                    <p class="card-text">22/01/2022</p>
                    <h6>Nombre del contacto</h6>
                    <p class="card-text">Julio Torres</p>
                </div>
                <div className="col">
                    <h6>Fecha de fin</h6>
                    <p class="card-text">22/01/2022</p>
                </div>
                <div className="col">
                    <h6>Total</h6>
                    <p class="card-text">5000</p>
                </div>
            </div>
        </div>
    </div>
}
export default InicioUsuarioCliente