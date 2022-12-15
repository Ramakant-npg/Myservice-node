import s3Uploadv3 from "../configuration/s3uploadconfig.js"
import {uploadFileDetails} from "../models/commonFile_model.js";

const uploadService = async(file,data)=>{
    try {
       let id = data.Connection_Id;
       let key = `connection/${id}_${file.originalname}`+ new Date();
       const result = await s3Uploadv3(file,key);
    //    console.log(result);
       if(result){
        console.log("S3 Upload successful")
        let uploadDetails = new Object();
        uploadDetails.Path = key;
        uploadDetails.FileName = file.originalname;
        uploadDetails.Type = file.mimetype;
        uploadDetails.FileExt = file.mimetype.split("/")[1];
        uploadDetails.Source = "Connection Application"
        uploadDetails.Size = file.size;
        uploadDetails.created = new Date();
        return  await uploadFileDetails(uploadDetails);
       }else{
        return false;
       }
    } catch (error) {
        console.log(error);
        return false;
    }
    
}

export default  uploadService;