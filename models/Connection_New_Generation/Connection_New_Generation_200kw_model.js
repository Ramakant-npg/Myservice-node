import connectionDB from "../../configuration/ce2_contentConfig.js";

const ConnectionNewGeneration200kw = (connectionnewgeneration200kw) => {
    this.Connection_Id = connectionnewgeneration200kw.Connection_Id;
    this.No_Generator_Sets = connectionnewgeneration200kw.No_Generator_Sets;
    this.Generator_Size = connectionnewgeneration200kw.Generator_Size;
    this.Rated_Terminal_Voltage = connectionnewgeneration200kw.Rated_Terminal_Voltage;
    this.Rated_Terminal_Current = connectionnewgeneration200kw.Rated_Terminal_Current;
    this.Registered_Capacity = connectionnewgeneration200kw.Registered_Capacity;
    this.Power_Rating = connectionnewgeneration200kw.Power_Rating;
    this.Island_Mode = connectionnewgeneration200kw.Island_Mode;
    this.Export_MPAN = connectionnewgeneration200kw.Export_MPAN;
    this.Supply_Onsite_Premises = connectionnewgeneration200kw.Supply_Onsite_Premises;
    this.No_Inverters = connectionnewgeneration200kw.No_Inverters;
    this.Inverter_Design = connectionnewgeneration200kw.Inverter_Design;
    this.Inverter_Rating = connectionnewgeneration200kw.Inverter_Rating;
    this.Generator_Type_Id = connectionnewgeneration200kw.Generator_Type_Id;
    this.Generation_Technology_Type = connectionnewgeneration200kw.Generation_Technology_Type;
}

ConnectionNewGeneration200kw.create = (newConnectionnewgeneration200kw) => {
    return new Promise((resolve, reject) => {
        
        let sql = " insert into ce2_content.Connection_New_Generation_200kw set ?";
        connectionDB.query(sql, newConnectionnewgeneration200kw, (error, result) => {
            if (error) {
            reject(error);
            }
            resolve(result.insertId);
        });
    });
}
ConnectionNewGeneration200kw.update = (newConnectionnewgeneration200kw) => {
    return new Promise((resolve, reject) => {
        let id = newConnectionnewgeneration200kw.Id;
        let sql = "update ce2_content.Connection_New_Generation_200kw set ?  where Id = ?";
        connectionDB.query(sql, [newConnectionnewgeneration200kw,id], (error, result) => {
            if (error) {
                return reject(error);
            }
            return resolve(result);
        });
    });
}
ConnectionNewGeneration200kw.remove = (id,gentype_id)=>{
    return new Promise((resolve , reject)=>{
        let sql = "delete from ce2_content.Connection_New_Generation_200kw where Id =? and Generator_Type_Id=?"
        connectionDB.query(sql , [id,gentype_id] ,(error , result)=>{
            if(error){
                return reject(error);
            }else{
                return resolve(result);
            }
        });
    });
}
ConnectionNewGeneration200kw.findbyConnectionId = (newConnectionnewgeneration200kw) => {

    return new Promise((resolve, reject) => {
        let sql = "select * from ce2_content.Connection_New_Generation_200kw where Connection_Id = ?";
        connectionDB.query(sql, newConnectionnewgeneration200kw, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
}
ConnectionNewGeneration200kw.reduce = (id)=>{
    return new Promise((resolve,reject)=>{
        let sql = "delete from ce2_content.Connection_New_Generation_200kw where Id = ?";
        connectionDB.query(sql,id,(error,result)=>{
            if(error){
                return reject(error);
            }
            return resolve(result.affectedRows);
        });
        });
}

export default ConnectionNewGeneration200kw;






























