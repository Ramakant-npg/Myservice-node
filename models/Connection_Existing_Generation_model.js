import connectionDB from "../configuration/ce2_contentConfig.js";

const ConnectionExistingGeneration = (connectionexistinggeneration)=>{
    this.Connection_Id = connectionexistinggeneration.Connection_Id;
    this.Poc_Generation_Connected = connectionexistinggeneration.Poc_Generation_Connected;
    this.Poc_Max_Export = connectionexistinggeneration.Poc_Max_Export;
    this.Poc_Rated_Current = connectionexistinggeneration.Poc_Rated_Current;
    this.Poc_Rated_Voltage = connectionexistinggeneration.Poc_Rated_Voltage;
    this.Poc_Type_Of_Generation = connectionexistinggeneration.Poc_Type_Of_Generation;
    this.Poc_Export_Mpan = connectionexistinggeneration.Poc_Export_Mpan;
    this.Poc_Import_Mpan = connectionexistinggeneration.Poc_Import_Mpan;
}

ConnectionExistingGeneration.save = (newconnectionexistinggeneration)=>{
    return new Promise((resolve  , reject)=>{
        let sql = " insert into ce2_content.Connection_Existing_Generation set ?";
        connectionDB.query(sql,newconnectionexistinggeneration ,(error , result)=>{
            if (error) {
                reject (error);
            } else {
                resolve(result.insertId);
            }
        });
    });
}

ConnectionExistingGeneration.update = (newconnectionexistinggeneration , id)=>{
    return new Promise((resolve , reject)=>{
        let sql = "update ce2_content.Connection_Existing_Generation set ? where Connection_Id = ?";
        connectionDB.query(sql , [newconnectionexistinggeneration ,id] ,(error ,result)=>{
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
}
ConnectionExistingGeneration.findbyId=(newconnectionexistinggeneration)=>{
    return new Promise((resolve , reject)=>{
        let sql ="select * from ce2_content.Connection_Existing_Generation where Connection_Id = ?";
        connectionDB.query(sql , newconnectionexistinggeneration, (err ,result)=>{
        if(err){
            reject(err);
        }else{
            resolve(result);
        }
    });
}); 
};

export default ConnectionExistingGeneration;