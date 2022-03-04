const {Router}=require('express');
const router = Router()
const BD=require('../config/config')
const cors= require('cors')
router.use(cors())
router.post('/submit', async(req, res)=>{
    res.status(200).json({
        message:"ruta status 200"
    })
})
module.exports= router;