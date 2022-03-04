import { guardarLeadWeb } from "../../../dao/leads"

const leadsWebHandler= async (req, res)=>{
    if(req.method=="PUT"){
        await guardarLeadWeb(req)
    }
}
export default leadsWebHandler