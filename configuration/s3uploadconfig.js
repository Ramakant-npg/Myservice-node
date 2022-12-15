import { PutObjectCommand, S3, S3Client } from "@aws-sdk/client-s3";
import AWS from "aws-sdk";

const s3Uploadv2 = async(file,id)=>{
    const s3 = new AWS.S3();
    const params = {
        Bucket : process.env.S3_AWS_BUCKET_NAME,
        Key : `connection/${id}_${file.originalname}`,
        Body : file.buffer,
    }
    return await s3.upload(params).promise();
}

const s3Uploadv3 = async(file,key)=>{
    const s3 = new S3Client()
    const params = {
        Bucket : process.env.S3_AWS_BUCKET_NAME,
        Key : key,
        Body : file.buffer,
    }
    return s3.send(new PutObjectCommand(params))
}

export default s3Uploadv3;