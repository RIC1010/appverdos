import { elimAct, modificarLead, obtenerLead } from "../../../../dao/leads"

const leadHandler =async (req, res)=>{
    if (req.method == "POST") {
        const data = req.body
        const lead = await obtenerLead(data.email, data.fecha, data.servicio)
        res.json({
            msg: "",
            lead : lead
        })
    }else if(req.method=="PUT"){
        await modificarLead(req)
    }else if(req.method=='DELETE'){
        await elimAct(req.body)
    }
}
export default leadHandler