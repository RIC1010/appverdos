import { DATE } from 'oracledb'

const BD=require('../config/config')
const obtenerPrioridades= async()=>{
    const prioridades=[]
    const sql = "SELECT * FROM LOOKUP_PRIORIDAD"
    let result= await BD.Open(sql, [], false)
    result.rows.map(prioridad=>{
        let esquemalead={
            "id": prioridad[0],
            "nombre": prioridad[1]
        }
        prioridades.push(esquemalead)
    })
    return prioridades

}
const obtenerEstadosa= async()=>{
    const estados=[]
    const sql = "SELECT * FROM LOOKUP_A_ESTADO"
    let result= await BD.Open(sql, [], false)
    result.rows.map(estado=>{
        let esquemalead={
            "id": estado[0],
            "nombre": estado[1]
        }
        estados.push(esquemalead)
    })
    return estados

}
const obtenerEstadosl= async()=>{
    const estados=[]
    const sql = "SELECT * FROM LOOKUP_L_ESTADO"
    let result= await BD.Open(sql, [], false)
    result.rows.map(estado=>{
        let esquemalead={
            "id": estado[0],
            "nombre": estado[1]
        }
        estados.push(esquemalead)
    })
    return estados

}
const obtenerMetodos= async()=>{
    const metodos=[]
    const sql = "SELECT * FROM LOOKUP_METODOS"
    let result= await BD.Open(sql, [], false)
    result.rows.map(metodo=>{
        let esquemalead={
            "id": metodo[0],
            "nombre": metodo[1]
        }
        metodos.push(esquemalead)
    })
    return metodos

}
const obtenerEstados= async()=>{
    const estados=[]
    const sql = "SELECT * FROM LOOKUP_A_ESTADO"
    let result= await BD.Open(sql, [], false)
    result.rows.map(estado=>{
        let esquemalead={
            "id": estado[0],
            "nombre": estado[1]
        }
        estados.push(esquemalead)
    })
    return estados

}
const obtenerServicios= async()=>{
    const servicios=[]
    const sql = "SELECT * FROM SERVICIOS"
    let result= await BD.Open(sql, [], false)
    result.rows.map(servicio=>{
        let esquemalead={
            "id": servicio[0],
            "nombre": servicio[1]
        }
        servicios.push(esquemalead)
    })
    return servicios

}
const elimAct= async(id)=>{
    const actividades= `delete from ACTIVIDADES 
    WHERE ID= :0
    `
    await BD.OpenI(actividades, [id], true)
}
const obtenerFiltro= async(data)=>{
    console.log(data.nombre)
    const leads=[]
    let sql ="SELECT * FROM LEADS L, SERVICIOS S, LOOKUP_L_ESTADO LK, LOOKUP_PRIORIDAD LP" +" WHERE L.ID_USUARIO= :0"
    sql=sql+" AND L.ID_SERVICIO=S.ID"
    sql=sql+" AND L.ID_ESTADO=LK.ID"
    sql=sql+" AND L.ID_PRIORIDAD= LP.ID AND L.NOMBRE_EMPRESA LIKE :0 ORDER BY L.ID_PRIORIDAD DESC"
    let result= await BD.Open(sql,[100, (data.nombre+'%')],true)
    result.rows.map(person=>{
        let esquemalead={
            "id": person[0],
            "email": person[3],
            "empresa":person[6],
            "servicio":person[13],
            "estado":person[16],
            "contacto":person[1]+" "+person[2],
            "prioridad":person[18]
        }
        leads.push(esquemalead)
    })
    return leads
}
const actualizarActividad=(req)=>{
    let sql ="UPDATE ACTIVIDADES SET ID_ESTADO= :0 WHERE ID=:1"
    const data=req.body
    BD.OpenI(sql,[data.estado, data.id],true)
}
const modificarLead=(req)=>{
    let sql ="UPDATE LEADS SET ID_ESTADO= :0, ID_PRIORIDAD=:1 WHERE ID=:2"
    const data=req.body
    BD.OpenI(sql,[data.estado, data.prioridad, data.id],true)
}
const obtenerIdActividad=async()=>{
    let sql ="SELECT * FROM ACTIVIDADES ORDER BY ID DESC"
    let result =await BD.Open(sql, [], false)
    let res=result.rows[0][0]
    return parseInt(res)
}
const guardarActividad=async(req)=>{
    let sql ="insert into ACTIVIDADES values (:0,:1,TO_DATE(:2  , 'yyyy/mm/dd hh24:mi:ss'),:3,:4,:5)"
    const data=req.body
    const id= await obtenerIdActividad()+1
    BD.OpenI(sql,[id, data.id_lead, data.fecha, data.descripcion, data.metodo, data.estado],true)
}
const obtenerID= async ()=>{
    const sql ="SELECT * FROM LEADS ORDER BY ID DESC"
    let result =await BD.Open(sql, [], false)
    let res=result.rows[0][0]
    return parseInt(res)
}
const guardarLeadWeb= async(req)=>{
    const sql ="insert into LEADS values (:0,:1,:2,:3,:4,:5,:6,:7,:8,:9,:10,:11 )"
    const data=req.body
    const id = await obtenerID()+1
    BD.OpenI(sql,[id, data.nombre,data.apellido,data.email,data.id_servicio, data.telefono, data.empresa,'CRM',data.cargo, data.id_usuario,data.id_estado, data.id_prioridad ],true)
}
const obtenerActividades= async(id)=>{
    const actividades=[]
    const sql ="select *from ACTIVIDADES A, LOOKUP_A_ESTADO LE, LOOKUP_METODOS LM WHERE A.ID_LEAD=:0 AND A.ID_ESTADO=LE.ID AND A.ID_METODO=LM.ID"
    let result =await BD.Open(sql, [id], true)
    result.rows.map(actividad=>{
        let esquemaactividad={
            "id": actividad[0],
            "id_estado":actividad[5],
            "metodo": actividad[9],
            "fecha":actividad[2],
            "estado":actividad[7],
            "descripcion": actividad[3]
        }
        actividades.push(esquemaactividad)
    })
    return actividades
}
const obtenerLeads= async ()=>{
    const leads=[]
    let sql ="SELECT * FROM LEADS L, SERVICIOS S, LOOKUP_L_ESTADO LK, LOOKUP_PRIORIDAD LP" +" WHERE L.ID_USUARIO= :0"
    sql=sql+" AND L.ID_SERVICIO=S.ID"
    sql=sql+" AND L.ID_ESTADO=LK.ID"
    sql=sql+" AND L.ID_PRIORIDAD= LP.ID ORDER BY L.ID_PRIORIDAD DESC"


    let result =await BD.Open(sql, [100], false)
    result.rows.map(person=>{
        let esquemalead={
            "id": person[0],
            "email": person[3],
            "empresa":person[6],
            "servicio":person[13],
            "estado":person[16],
            "contacto":person[1]+" "+person[2],
            "prioridad":person[18]
        }
        leads.push(esquemalead)
    })
    return leads
}
const obtenerLead= async(id)=>{
    //const leads=[]
    const sql ="SELECT *from LEADS L, SERVICIOS S WHERE L.ID=:0 AND L.ID_SERVICIO = S.ID"
    let result =await BD.Open(sql, [id], false)
    return result.rows
}
const eliminarLead= async(id)=>{
    //eliminando actividades relacionadas al lead
    const actividades= "delete from ACTIVIDADES WHERE ID_LEAD= :0"
    await BD.OpenI(actividades, [id], true)
    const sql = "delete from LEADS WHERE ID=:0"
    await BD.OpenI(sql, [id], true)
}
export {obtenerEstadosa, obtenerPrioridades,obtenerEstadosl, obtenerIdActividad, obtenerMetodos, obtenerEstados, obtenerLeads, eliminarLead, obtenerLead, obtenerActividades, guardarLeadWeb, guardarActividad, modificarLead, actualizarActividad, obtenerFiltro, elimAct, obtenerID, obtenerServicios}