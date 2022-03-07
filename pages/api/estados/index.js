import { obtenerEstados } from "../../../dao/leads"

const estadosHandler = async (req, res) => {
    if (req.method == "GET") {
        // Comunicarnos con la bd para obtener lista de tecnologias
        const estados= await obtenerEstados()
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

export default estadosHandler