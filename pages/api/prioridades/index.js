import { obtenerPrioridades } from "../../../dao/leads"

const prioridadesHandler = async (req, res) => {
    if (req.method == "GET") {
        // Comunicarnos con la bd para obtener lista de tecnologias
        const prioridades= await obtenerPrioridades()
        res.json({
            msg : "",
            prioridades : prioridades
        })
    }else {
        res.status(400).json({
            msg : "Error, metodo no permitido"
        })
    }
}

export default prioridadesHandler