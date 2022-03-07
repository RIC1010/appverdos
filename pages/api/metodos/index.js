import { obtenerMetodos } from "../../../dao/leads"

const metodosHandler = async (req, res) => {
    if (req.method == "GET") {
        // Comunicarnos con la bd para obtener lista de tecnologias
        const metodos= await obtenerMetodos()
        res.json({
            msg : "",
            metodos : metodos
        })
    }else {
        res.status(400).json({
            msg : "Error, metodo no permitido"
        })
    }
}

export default metodosHandler