const setkeyLead=(id)=>{
    const dato=[id]
    localStorage.setItem("datos", dato)
}
const obtenerKeyLead=()=>{
    const datosStr = localStorage.getItem("datos")
    //console.log(JSON.parse(datosStr))
    return datosStr
}
export{setkeyLead, obtenerKeyLead}