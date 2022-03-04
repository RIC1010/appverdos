import { useState } from "react";
import { navegar } from "../dao/tratos";

const Navegador =(props)=>{
    const butOnClick=(event)=>{
        const link= event.target.id
        navegar(link)
    }
    return <div className="navegador mt-2 mb-2">
        <ul className="nav nav-tabs nav-fill">
            <li className="nav-item">
                <button id="/" type="button" className={props.lisClass[0]} onClick={butOnClick} >Home</button>
            </li>
            <li className="nav-item">
                <button id="inicioleads" type="button" className={props.lisClass[1]} onClick={butOnClick} >Leads</button>
            </li>
            <li className="nav-item">
                <button id="Inicioclientes" type="button" className={props.lisClass[2]} onClick={butOnClick} >Clientes</button>
            </li>
            <li className="nav-item">
                <button id="servicios" type="button" className={props.lisClass[3]} onClick={butOnClick} >Servicios</button>
            </li>
        </ul>
    </div>
}
export default Navegador

/*
return <Router>
        <div className="navegador mt-2 mb-2">
            <ul className="nav nav-tabs nav-fill">
                <li className="nav-item">
                    <Link className='nav-link' to={'/home'}>Home</Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-link' to={'/home'}>Empresas</Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-link' to={'/home'}>Clientes</Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-link' to={'/contratos'}>Contratos</Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-link' to={'/home'}>Staff</Link>
                </li>
            </ul>
        </div>
        <div>
            <Routes>
                <Route path='/home'>
                    <Home></Home>
                </Route>
                <Route path='/contratos'>
                    <Contratos></Contratos>
                </Route>
            </Routes>
        </div>
    </Router>
    <a className="nav-link" href="../pages/index">Empresas</a>
*/