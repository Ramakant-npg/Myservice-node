import connectionDB from "../../configuration/ce2_contentConfig.js";
const ConnectionNewGeneration=(connectionnewgeneration) =>{
    this.Id=connectionnewgeneration.Id;
    this.Connecting_Generation=connectionnewgeneration.Connecting_Generation;
    this.Connecting_Generation_3_68kw=connectionnewgeneration.Connecting_Generation_3_68kw;
    this.Connecting_Generation_200kw=connectionnewgeneration.Connecting_Generation_200kw;
    this.Connecting_Generation_Standby=connectionnewgeneration.Connecting_Generation_Standby;
    this.Connecting_Generation_5min=connectionnewgeneration.Connecting_Generation_5min;
    this.Connecting_Generation_KW_MW=connectionnewgeneration.Connecting_Generation_KW_MW;
    this.KW_MW_Connection_Point=connectionnewgeneration.KW_MW_Connection_Point;
    this.Connection_Id=connectionnewgeneration.Connection_Id;
}


ConnectionNewGeneration.findbyId=(newconnectionnewgeneration)=>{
    return new Promise((resolve , reject)=>{
        let sql ="select * from ce2_content.Connection_New_Generation where Connection_Id = ?";
        connectionDB.query(sql , newconnectionnewgeneration, (err ,result)=>{
        if(err){
            reject(err);
        }else{
            resolve(result);
        }
    });
}); 
};
ConnectionNewGeneration.create = (newconnectionnewgeneration)=>{
    return new Promise((resolve,reject) =>{
        let sql = "insert into ce2_content.Connection_New_Generation set ?";
            connectionDB.query(sql, newconnectionnewgeneration, (err,result) =>{
                if(err){
                    return reject(err);
                }
                return resolve(result.insertId);
            });  
        });   
}

ConnectionNewGeneration.update=(newconnectionnewgeneration,id)=>{
    return new Promise((resolve,reject)=>{
        let sql="update ce2_content.Connection_New_Generation set ? where Connection_Id = ?";
        connectionDB.query( sql, [newconnectionnewgeneration,id] ,(err , result)=>{
            if(err){
                return reject(err);
            }
            return resolve(result);
            console.log("step4");
        });
        });
        
}

export default ConnectionNewGeneration;