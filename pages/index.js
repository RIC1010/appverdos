import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navegador from '../componets/Navegador.component'
import Ubicacion from '../componets/ubicacion.component'
export default function Home() {
  const navegar = (txtpagina) => {
    console.log("entra")
    const enlace = "/" + txtpagina
    console.log(enlace)
    location.href = enlace
  }
  const listaClases = ["nav-link active", "nav-link", "nav-link", "nav-link"]
  return (
    <div className='container'>
      <Navegador lisClass={listaClases}></Navegador>
      <h1>Estadísticas</h1>
      <div className='container col-9'>
        <div className='row mt-5'>
          <div className='col'>
            <div className="card text-dark bg-primary bg-opacity-25 mb-3">
              <div className="card-body">
                <h2 className='text-center'>Leads ganados</h2>
                <h4 className="text-center">200</h4>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className="card text-dark bg-primary bg-opacity-25 mb-3">
              <div className="card-body">
                <h2 className='text-center'>Leads obtenidos</h2>
                <h4 className="text-center">200</h4>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className="card text-dark bg-primary bg-opacity-25 mb-3">
              <div className="card-body">
                <h2 className='text-center'>Total de leads</h2>
                <h4 className="text-center">200</h4>
              </div>
            </div>
          </div>
        </div>
        <div className='row mt-4'>
          <div className='col-1'/>
          <div className='col'>
            <div className="card text-dark bg-primary bg-opacity-25 mb-3">
              <div className="card-body">
                <h2 className='text-center'>Total de clientes</h2>
                <h4 className="text-center">200</h4>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className="card text-dark bg-primary bg-opacity-25 mb-3">
              <div className="card-body">
                <h2 className='text-center'>Ingresos del mes</h2>
                <h4 className="text-center">200</h4>
              </div>
            </div>
          </div>
          <div className='col-1'/>
        </div>
      </div>
    </div>
  )
}
