import connectionDB from "../configuration/ce2_contentConfig.js";

let create = (data , callback)=>{
    let sql ="insert into ce2_content_new.connection_site_details set ?";
    connectionDB.query(sql ,data ,(err , result)=>{
        if(err) throw err;
        return callback(null , result);
    });
}



export default create;