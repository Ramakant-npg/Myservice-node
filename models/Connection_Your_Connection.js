import connectionDB from "../configuration/ce2_contentConfig.js";

const ConnectionYourConnection = (connectionyourconnection) => {
    this.Connection_Id = connectionyourconnection.Connection_Jobs.Id;
    this.Poctype = connectionyourconnection.Poctype;
    this.Poc_Mpan = connectionyourconnection.Poc_Mpan;
    this.Existing_Load_Current_Supply = connectionyourconnection.Existing_Load_Current_Supply;
    this.Total_Increased_Load = connectionyourconnection.Total_Increased_Load;
    this.Reason_For_Increased_Load = connectionyourconnection.Reason_For_Increased_Load;
    this.Company_Adopting_EN = connectionyourconnection.Company_Adopting_EN 
    this.Connections_Plan_To_Install = connectionyourconnection.Connections_Plan_To_Install;
    this.Total_Load_Required = connectionyourconnection.Total_Load_Required;
    this.Poc_Contestable = connectionyourconnection.Poc_Contestable;
    this.Poc_Temporary_Connection = connectionyourconnection.Poc_Temporary_Connection;
    this.Poc_Temporary_Load = connectionyourconnection.Poc_Temporary_Load;
    
}

ConnectionYourConnection.create = (newconnectionyourconnection) =>{
    let connection_id = newconnectionyourconnection.Connection_Id;
    let poctype = newconnectionyourconnection.Poctype;
    let poc_Mpan = newconnectionyourconnection.Poc_Mpan;
    let existing_Load_Current_Supply = newconnectionyourconnection.Existing_Load_Current_Supply;
    let total_Increased_Load = newconnectionyourconnection.Total_Increased_Load;
    let reason_For_Increased_Load = newconnectionyourconnection.Reason_For_Increased_Load;
    let company_Adopting_EN = newconnectionyourconnection.Company_Adopting_EN;
    let connections_Plan_To_Install = newconnectionyourconnection.Connections_Plan_To_Install;
    let total_Load_Required = newconnectionyourconnection.Total_Load_Required;
    let poc_Contestable = newconnectionyourconnection.Poc_Contestable.toString();
    let poc_Temporary_Connection = newconnectionyourconnection.Poc_Temporary_Connection;
    let poc_Temporary_Load = newconnectionyourconnection.Poc_Temporary_Load;
    return new Promise((resolve,reject) =>{
        let sql = "insert into ce2_content.Connection_Your_Connection set connection_id =? , poctype = ? , poc_Mpan = ? , existing_Load_Current_Supply = ? , total_Increased_Load = ? , reason_For_Increased_Load = ? , company_Adopting_EN = ? , connections_Plan_To_Install = ? , total_Load_Required = ? , poc_Contestable = ? , poc_Temporary_Connection = ? , poc_Temporary_Load = ?";
        connectionDB.query(sql, [connection_id,poctype,poc_Mpan,existing_Load_Current_Supply,total_Increased_Load,reason_For_Increased_Load,company_Adopting_EN,connections_Plan_To_Install,total_Load_Required,poc_Contestable,poc_Temporary_Connection,poc_Temporary_Load] , (err,result) =>{
            if(err){
                return reject(err);
            }
            return resolve(result);
        });
        });
}
ConnectionYourConnection.update = (newconnectionyourconnection,id) =>{

    let connection_id = newconnectionyourconnection.Connection_Id;
    let poctype = newconnectionyourconnection.Poctype;
    let poc_Mpan = newconnectionyourconnection.Poc_Mpan;
    let existing_Load_Current_Supply = newconnectionyourconnection.Existing_Load_Current_Supply;
    let total_Increased_Load = newconnectionyourconnection.Total_Increased_Load;
    let reason_For_Increased_Load = newconnectionyourconnection.Reason_For_Increased_Load;
    let company_Adopting_EN = newconnectionyourconnection.Company_Adopting_EN;
    let connections_Plan_To_Install = newconnectionyourconnection.Connections_Plan_To_Install;
    let total_Load_Required = newconnectionyourconnection.Total_Load_Required;
    let poc_Contestable = newconnectionyourconnection.Poc_Contestable.toString();
    let poc_Temporary_Connection = newconnectionyourconnection.Poc_Temporary_Connection;
    let poc_Temporary_Load = newconnectionyourconnection.Poc_Temporary_Load;
    return new Promise((resolve,reject)=>{
    let sql = "update ce2_content.Connection_Your_Connection set poctype = ?, poc_Mpan = ?, existing_Load_Current_Supply = ?, total_Increased_Load = ?, reason_For_Increased_Load = ?, company_Adopting_EN = ?, connections_Plan_To_Install = ?, total_Load_Required = ?, poc_Contestable = ? ,poc_Temporary_Connection = ? ,poc_Temporary_Load = ?  where Connection_Id = ?";
    connectionDB.query(sql,[poctype,poc_Mpan,existing_Load_Current_Supply,total_Increased_Load,reason_For_Increased_Load,company_Adopting_EN,connections_Plan_To_Install,total_Load_Required,poc_Contestable,poc_Temporary_Connection,poc_Temporary_Load,id],(err,result)=>{
        if(err){
            return reject(err);
        }
        return resolve(result);
    });
    });
}
ConnectionYourConnection.findbyConnectionId =(con_Id)=>{
    // let connection_id = newconnectionyourconnection.Connection_Id;
    // let poctype = newconnectionyourconnection.Poctype;
    // let poc_Mpan = newconnectionyourconnection.Poc_Mpan;
    // let existing_Load_Current_Supply = newconnectionyourconnection.Existing_Load_Current_Supply;
    // let total_Increased_Load = newconnectionyourconnection.Total_Increased_Load;
    // let reason_For_Increased_Load = newconnectionyourconnection.Reason_For_Increased_Load;
    // let company_Adopting_EN = newconnectionyourconnection.Company_Adopting_EN;
    // let connections_Plan_To_Install = newconnectionyourconnection.Connections_Plan_To_Install;
    // let total_Load_Required = newconnectionyourconnection.Total_Load_Required;
    // let poc_Contestable = newconnectionyourconnection.Poc_Contestable.toString();
    // let poc_Temporary_Connection = newconnectionyourconnection.Poc_Temporary_Connection;
    // let poc_Temporary_Load = newconnectionyourconnection.Poc_Temporary_Load;
    
    return new Promise((resolve , reject)=>{
        let sql ="select * from ce2_content.Connection_Your_Connection  where Connection_Id = ?";
        connectionDB.query(sql , con_Id, (err ,result)=>{
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        });
    });
}
export default ConnectionYourConnection;