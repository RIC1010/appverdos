import { eliminarLead, obtenerFiltro, obtenerLeads } from "../../../dao/leads"
const leadsHandler= async (req, res)=>{
    console.log("llamada")
    if(req.method=="GET"){
        const leads = await obtenerLeads()
        res.json({
            msg: "",
            leads: leads
        })
    }else if(req.method=="DELETE"){
        await eliminarLead(req.body.id)
        
    }else if(req.method=='PUT'){
        const data = JSON.parse(req.body)
        const leads= await obtenerFiltro(data)
        res.json({
            leads: leads
        })
    }
}
export default leadsHandler