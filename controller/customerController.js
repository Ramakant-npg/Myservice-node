import customerdetails from "../models/customerModel.js";

const usemyaddress = async(req,res)=>{
    const loginId = 123;
    const responce = await customerdetails(loginId);
            if(Object.keys(responce).length === 0){
                res.status(404).json({
                    "message" : "Not Found"
                });
            }else{
                res.status(200).json(responce[0]);
            }
}
export default usemyaddress;