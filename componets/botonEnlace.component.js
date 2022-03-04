import { navegar } from "../dao/tratos"
const ButtonLink=(props)=>{
    const butOnClick=()=>{
        const txt=  props.path
        navegar(txt)
    }
    if(props.modo=="cliente"){
        return <button id="" className={props.color} onClick={props.editar} >{props.nombre}</button>
    }
    return <button id="" className={props.color} onClick={butOnClick} >{props.nombre}</button>
    
}
export default ButtonLink