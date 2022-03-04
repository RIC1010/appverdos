import { guardarActividad, obtenerActividades } from "../../../dao/leads"

const actividadesHandler =async (req, res)=>{
    if (req.method == "POST") {
        const data = req.body
        const actividades = await obtenerActividades(data.tipo, data.email)
        res.json({
            msg: "",
            actividades : actividades
        })
    }else if(req.method=="PUT"){
        await guardarActividad(req)
    }
}
export default actividadesHandler