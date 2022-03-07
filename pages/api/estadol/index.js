import { obtenerEstadosl } from "../../../dao/leads"

const estadoslHandler =async (req, res)=>{
    if (req.method == "GET") {
        const estados= await obtenerEstadosl()
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
export default estadoslHandler