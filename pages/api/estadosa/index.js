import { obtenerEstadosa } from "../../../dao/leads"

const estadosaHandler =async (req, res)=>{
    if (req.method == "GET") {
        const estados= await obtenerEstadosa()
        res.json({
            msg : "",
            estados : estados
        })
    }else {
        res.status(400).json({
            msg : "Error, metodo no permitido"
        })
    }
}
export default estadosaHandler