import connectionDB from "../configuration/ce2_contentConfig.js";

const ConnectionMultiplePremisesDetails = (connectionmultiplepremisedetails) => {
    this.Connection_Id =  connectionmultiplepremisedetails.Connection_Id;
    this.Premises = connectionmultiplepremisedetails.Premises;
    this.Type = connectionmultiplepremisedetails.Type;
    this.mpan = connectionmultiplepremisedetails.mpan;
    this.Site_Name	= connectionmultiplepremisedetails.Site_Name;
    this.Site_Street = connectionmultiplepremisedetails.Site_Street;
    this.Site_City	= connectionmultiplepremisedetails.Site_City;
    this.Site_Postcode	= connectionmultiplepremisedetails.Site_Postcode;
    this.Registred_Capacity	= connectionmultiplepremisedetails.Registred_Capacity;
    this.No_Of_Phases = connectionmultiplepremisedetails.No_Of_Phases;
    this.Ref_Number	= connectionmultiplepremisedetails.Ref_Number;
    this.Inverter_Rating = connectionmultiplepremisedetails.Inverter_Rating;
    this.Installation_Year = connectionmultiplepremisedetails.Installation_Year;
    this.Installation_Qtr = connectionmultiplepremisedetails.Installation_Qtr;
}
ConnectionMultiplePremisesDetails.create = (data) =>{
    console.log(data);
    return new Promise((resolve,reject) =>{
        delete data.Id;
    let sql = "insert into ce2_content.Connection_Multiple_Premises_Details set ?";
    connectionDB.query(sql, data, (err,result) =>{
        if(err){
            return reject(err);
        }
        return resolve(result.insertId);
    });
    });
}

ConnectionMultiplePremisesDetails.update = (data) =>{
    let id = data.Id;
    return new Promise((resolve,reject)=>{
    let sql = "update ce2_content.Connection_Multiple_Premises_Details set ? where Id = ?";
    connectionDB.query(sql,[data,id],(err,result)=>{
        if(err){
            return reject(err);
        }
        return resolve(result.affectedRows);
    });
    });
}
ConnectionMultiplePremisesDetails.findbyid = (data) =>{
    return new Promise((resolve , reject)=>{
        let sql ="select * from ce2_content.Connection_Multiple_Premises_Details where Connection_Id = ?";
        connectionDB.query(sql , data, (err ,result)=>{
            if(err){
                return reject(err);
            }else{
                return resolve(result);
            }
        });
    });
}
ConnectionMultiplePremisesDetails.remove =(id) =>{
    return new Promise((resolve , reject)=>{
        let sql ="delete from ce2_content.Connection_Multiple_Premises_Details where Id = ?";
        connectionDB.query(sql , id, (err ,result)=>{
            if(err){
                return reject(err);
            }else{
                console.log(result)
                return resolve(result.affectedRows);
            }
        });
    });

}

const ConnectionSinglePremisesDetails = (connectionsinglepremisesdetails) =>{
    this.Connection_Id = connectionsinglepremisesdetails.Connection_Id;
    this.Micro_Generator_Connection = connectionsinglepremisesdetails.Micro_Generator_Connection;
    this.MicroGenType = connectionsinglepremisesdetails.MicroGenType;
    this.Phase1 = connectionsinglepremisesdetails.Phase1;
    this.Phase2 = connectionsinglepremisesdetails.Phase2;
    this.Phase3 = connectionsinglepremisesdetails.Phase3;
    this.TypeTestRef = connectionsinglepremisesdetails.TypeTestRef;
    this.PrimaryEnergySource = connectionsinglepremisesdetails.PrimaryEnergySource;
    this.PowerFactor = connectionsinglepremisesdetails.PowerFactor;

}
ConnectionSinglePremisesDetails.create = (data) =>{
    
    return new Promise((resolve,reject) =>{
        delete data.Id;
        
    //     let queryparams = [];
    //     for(let i=0;i<data.length;i++){
    //         let datai = data[i];
    //         let connection_Id = datai.Connection_Id;
    //         let micro_Generator_Connection = datai.Micro_Generator_Connection;
    //         let microGenType = datai.MicroGenType;
    //         let phase1 = datai.Phase1;
    //         let phase2 = datai.Phase2;
    //         let phase3 = datai.Phase3;
    //         let typeTestRef = datai.TypeTestRef;
    //         let primaryEnergySource = datai.PrimaryEnergySource;
    //         let powerFactor = datai.PowerFactor;
        
    //     let param = [connection_Id, micro_Generator_Connection, microGenType, phase1, phase2, phase3, typeTestRef, primaryEnergySource, powerFactor];
    //     queryparams.push(param);
    //     }
    // let sql = "insert into ce2_content.Connection_Single_Premises_Details(connection_Id, micro_Generator_Connection, microGenType, phase1, phase2, phase3, typeTestRef, primaryEnergySource, powerFactor) Values ? ";
    const sql = "insert into ce2_content.Connection_Single_Premises_Details set ?"
    connectionDB.query(sql, data, (err,result) =>{
        if(err){
            return reject(err);
        }
        // console.log(result);
        return resolve(result.insertId);
    });
    });
}
ConnectionSinglePremisesDetails.update = (data,id,job_id) =>{
    console.log("step3");
    return new Promise((resolve,reject)=>{
        
        let sql = "update ce2_content.Connection_Single_Premises_Details set ? where Id = ? and Connection_Id = ?";
        
        connectionDB.query(sql , [data ,id,job_id] ,(error ,result)=>{
            if (error) {
                reject(error);
            } else {
                resolve(result.affectedRows);
            }
        });
    });
}
ConnectionSinglePremisesDetails.findbyid =(data) =>{
    return new Promise((resolve , reject)=>{
        let sql ="select * from ce2_content.Connection_Single_Premises_Details where Connection_Id = ?";
        connectionDB.query(sql , data, (err ,result)=>{
            if(err){
                return reject(err);
            }else{
                return resolve(result);
            }
        });
    });

}
ConnectionSinglePremisesDetails.remove =(id) =>{
    return new Promise((resolve , reject)=>{
        let sql ="delete from ce2_content.Connection_Single_Premises_Details where Id = ?";
        connectionDB.query(sql , id, (err ,result)=>{
            if(err){
                return reject(err);
            }else{
                console.log(result)
                return resolve(result.affectedRows);
            }
        });
    });

}


export {ConnectionMultiplePremisesDetails, ConnectionSinglePremisesDetails};