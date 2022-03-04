import { actualizarActividad } from "../../../../dao/leads"

const actividadesHandlerid =async (req, res)=>{
    if(req.method=="PUT"){
        console.log("body act: ", req.body)
        await actualizarActividad(req)
    }
}
export default actividadesHandlerid