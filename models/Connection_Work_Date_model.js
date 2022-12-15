import connectionDB from "../configuration/ce2_contentConfig.js";

const ConnectionWorkDate = (connectionworkdate) =>{
    this.Connection_Id = connectionworkdate.Connection_Id;
    this.Work_Connection_Date = connectionworkdate.Work_Connection_Date;
    this.Expected_Connection_Date = connectionworkdate.Expected_Connection_Date;
}

ConnectionWorkDate.create = (data) =>{
    return new Promise((resolve,reject) =>{
    let sql = "insert into ce2_content.Connection_Your_Work_Date set ?";
    connectionDB.query(sql, data, (err,result) =>{
        if(err){
            return reject(err);
        }
        return resolve(result);
    });
    });
}
ConnectionWorkDate.update =  (data,id) =>{
    return new Promise((resolve,reject)=>{
    let sql = "update ce2_content.Connection_Your_Work_Date set ? where Connection_Id = ?";
    connectionDB.query(sql,[data,id],(err,result)=>{
        if(err){
            return reject(err);
        }
        return resolve(result);
    });
    });
}
ConnectionWorkDate.findbyid = (data)=>{
    return new Promise((resolve , reject)=>{
        let sql ="select * from ce2_content.Connection_Your_Work_Date where Connection_Id = ?";
        connectionDB.query(sql , data, (err ,result)=>{
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        });
    });

}

export default ConnectionWorkDate;