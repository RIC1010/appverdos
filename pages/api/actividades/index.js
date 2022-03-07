import { elimAct, guardarActividad, obtenerActividades } from "../../../dao/leads"

const actividadesHandler =async (req, res)=>{
    if (req.method == "POST") {
        const data = req.body
        const actividades = await obtenerActividades(data.id)
        res.json({
            msg: "",
            actividades : actividades
        })
    }else if(req.method=="PUT"){
        await guardarActividad(req)
    }else if(req.method=='DELETE'){
        await elimAct(req.body.id)
    }
}
export default actividadesHandler