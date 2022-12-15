import uploadService from "../services/uploadService.js";

const uploadController = async(req,res)=>{
    const file = req.file;
    const data = req.body;
    // console.log(file);
    if(!file){
        res.status(400).json({message : "file not found"})
    }else{
        // console.log(data);
        // console.log(file);
        const responce = await uploadService(file,data);
        if (responce) {
            let uploadresponce = new Object();
            uploadresponce.filebaseId = responce;
            uploadresponce.filename = file.originalname
            uploadresponce.message = "File Successfull uploaded"
            res.status(200).json(uploadresponce); 
        } else {
            res.status(400).json({message : "failed"}) 
        }
    }    
}

export default uploadController;