import { DATE } from 'oracledb'

const BD=require('../config/config')
const elimAct= async(data)=>{
    const actividades= `delete from ACTIVIDADES 
    WHERE TIPO= :0
    AND EMAIL_LEAD= :1
    AND FECHA=:2
    `
    await BD.OpenI(actividades, [data.tipo,data.email, data.fecha], true)
    //console.log("llega")
}
const obtenerFiltro= async(data)=>{
    console.log(data.nombre)
    const leads=[]
    let sql ="SELECT * FROM LEADS WHERE NOMBRE_EMPRESA LIKE :0 "
    let result= await BD.Open(sql,[(data.nombre+'%')],true)
    console.log("res: "+ result.rows)
    result.rows.map(person=>{
        let esquemalead={
            "email": person[2],
            "empresa":person[5],
            "servicio":person[3],
            "fecha":person[7],
            "estado":person[10],
            "contacto":person[0]+" "+person[1],
            "prioridad":person[11]
        }
        leads.push(esquemalead)
    })
    return leads
}
const actualizarActividad=(req)=>{
    let sql ="UPDATE ACTIVIDADES SET ESTADO= :0 WHERE EMAIL_LEAD= :1 AND TIPO=:2 AND FECHA=TO_DATE(:3  , 'yyyy/mm/dd hh24:mi:ss')"
    const data=req.body
    BD.OpenI(sql,[data.estado, data.email, data.tipo, data.fecha],true)
}
const modificarLead=(req)=>{
    let sql ="UPDATE LEADS SET ESTADO= :0, PRIORIDAD=:1 WHERE EMAIL= :2 AND FECHA_REGISTRO=TO_DATE(:3  , 'yyyy/mm/dd') AND NOMBRE_SERVICIO=:4"
    const data=req.body
    console.log(data.lead_fecha)
    BD.OpenI(sql,[data.estado, data.prioridad, data.email, data.lead_fecha, data.servicio],true)
}
const guardarActividad=async(req)=>{
    let sql ="insert into ACTIVIDADES values (:0,TO_DATE(:1  , 'yyyy/mm/dd'),:2,TO_DATE(:3  , 'yyyy/mm/dd hh24:mi:ss'),:4,:5,:6,:7)"
    const data=req.body
    BD.OpenI(sql,[data.email,data.lead_fecha,data.servicio,data.fecha, data.descripcion, 
        data.metodo,data.tipo,data.estado],true)
}
const guardarLeadWeb= async(req)=>{
    let sql ="insert into LEADS values (:0,:1,:2,:3,:4,:5,:6,TO_DATE(:7  , 'yyyy/mm/dd'),:8,:9,:10,:11 )"
    const data=req.body
    BD.OpenI(sql,[data.nombre,data.apellido,data.email,data.servicio, data.telefono, data.empresa,"Website",data.fecha,data.cargo, "user1@gmail.com",data.estado, data.prioridad ],true)
}
const obtenerActividades= async(tipo, email)=>{
    const actividades=[]
    const sql ="select *from ACTIVIDADES WHERE TIPO=:0 AND EMAIL_LEAD=:1"
    let result =await BD.Open(sql, [tipo,email ], true)
    console.log("actividades: ", result.rows)
    result.rows.map(actividad=>{
        let esquemaactividad={
            "metodo": actividad[5],
            "fecha":actividad[3],
            "hora":actividad[3],
            "estado":actividad[7],
            "descripcion": actividad[4]
        }
        actividades.push(esquemaactividad)
    })
    return actividades
}
const obtenerLeads= async ()=>{
    const leads=[]
    const sql ="select *from LEADS ORDER BY PRIORIDAD DESC"
    let result =await BD.Open(sql, [], false)
    console.log(result.rows)
    result.rows.map(person=>{
        let esquemalead={
            "email": person[2],
            "empresa":person[5],
            "servicio":person[3],
            "fecha":person[7],
            "estado":person[10],
            "contacto":person[0]+" "+person[1],
            "prioridad":person[11]
        }
        leads.push(esquemalead)
    })
    return leads
}
const obtenerLead= async(email, fecha, servicio)=>{
    //const leads=[]
    const sql ="SELECT *from LEADS WHERE EMAIL=:0 AND FECHA_REGISTRO=TO_DATE(:1  , 'yyyy/mm/dd hh24:mi:ss') AND NOMBRE_SERVICIO=:2"
    const fechas=fecha.split("T")
    console.log(email)
    console.log(fechas[0])
    console.log(servicio)
    let result =await BD.Open(sql, [email, fechas[0], servicio], false)
    
    console.log("resultado: ", result.rows)
    /*result.rows.map(person=>{
        let esquemalead={
            "email": person[2],
            "empresa":person[5],
            "servicio":person[3],
            "fecha":person[7]
        }
        leads.push(esquemalead)
    })*/
    return result.rows
}
const eliminarLead= async(email, fecha, servicio)=>{
    //eliminando actividades relacionadas al lead
    const actividades= `delete from ACTIVIDADES 
    WHERE TIPO= :0
    AND EMAIL_LEAD= :1`
    await BD.OpenI(actividades, ["Lead", email+""], true)
    console.log("llega")
    const sql = "delete from LEADS WHERE EMAIL= :0 AND FECHA_REGISTRO= TO_DATE(:1  , 'yyyy/mm/dd hh24:mi:ss') AND NOMBRE_SERVICIO= :2"
    console.log("fecha: ")
    const fechas=fecha.split("T")
    console.log(servicio)
    console.log(fechas)
    await BD.OpenI(sql, [email, fechas[0], servicio], true)
}
export {obtenerLeads, eliminarLead, obtenerLead, obtenerActividades, guardarLeadWeb, guardarActividad, modificarLead, actualizarActividad, obtenerFiltro, elimAct}