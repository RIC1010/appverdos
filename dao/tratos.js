const guardarTrato=(nombre, descripcion, estado)=>{
    const trato={
        id: 1,
        nombre: nombre,
        descripcion: descripcion,
        estado: estado
    }
    const tratosStr= localStorage.getItem(localStorage.getItem("tratos"))
    if(tratosStr!=null){
        const tratos= JSON.parse(tratosStr)
        const ultimoId=tratos[tratos.length-1].id
        trato.id=ultimoId
        tratos.push(trato)
    }else{
        const tratos =[trato]
        localStorage.setItem("tratos", JSON.stringify(tratos))
    }
}
const obtenerTratos=()=>{
    const tratosStr=localStorage.getItem("tratos")
    if(tratosStr!=null){
        return JSON.parse(tratosStr)
    }else{
        return []
    }
}
const navegar=(txtpagina)=>{
    location.href=txtpagina
}
export {obtenerTratos, guardarTrato, navegar}