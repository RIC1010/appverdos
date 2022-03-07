import { obtenerServicios } from "../../../dao/leads"

const serviciosHandler = async (req, res) => {
    if (req.method == "GET") {
        // Comunicarnos con la bd para obtener lista de tecnologias
        const servicios= await obtenerServicios()
        res.json({
            msg : "",
            servicios : servicios
        })
    }else {
        res.status(400).json({
            msg : "Error, metodo no permitido"
        })
    }
}

export default serviciosHandler