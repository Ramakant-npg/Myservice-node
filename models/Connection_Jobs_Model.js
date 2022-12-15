import connectionDB from '../configuration/ce2_contentConfig.js';

const  ConnectionJobs = function(connectionjobs){
    this.Connection_Type =  connectionjobs.Connection_Type;
    this.Completed_Date = connectionjobs.Completed_Date;
    this.Submitted_Date =   connectionjobs.Submitted_Date;
    this.Connection_Date  =   connectionjobs.Connection_Date;
    this.Paused_Date   =   connectionjobs.Paused_Date;
    this.Resume_Date  =   connectionjobs.Resume_Date  ;
    this.Guaranteed_Standard   =   connectionjobs.Guaranteed_Standard ;
    this.Guaranteed_Standard_Days   =   connectionjobs.Guaranteed_Standard_Days;
    this.Guaranteed_Standard_Target_Date  =   connectionjobs.Guaranteed_Standard_Target_Date ;
    this.Standard_Start_Date  =   connectionjobs.Standard_Start_Date;
    this.Created_Date =   connectionjobs.Created_Date;
    this. Customer_Id   =   connectionjobs.Customer_Id  ;
    this.Job_Type   =   connectionjobs.Job_Type ;
    this.Modified_Date   =   connectionjobs.Modified_Date;
    this.Progression=   connectionjobs.Progression;
    this.Created_By  =   connectionjobs.Created_By;
    this.Anticipate_Completing_Date =   connectionjobs.Anticipate_Completing_Date;
    this.Requote_Requested_Date  =   connectionjobs.Requote_Requested_Date;
    this.Update_By   =  connectionjobs.Update_By;
    this.Status = connectionjobs.Status;
}
const Reference = function(responce){
    let id = responce.toString();
    switch(id.length){
        case 1:this.reference = 'NC00000' + responce.toString();
        break;
        case 2:this.reference = 'NC0000' + responce.toString();
        break;
        case 3:this.reference = 'NC000' + responce.toString();
        break;
        case 4:this.reference = 'NC00' + responce.toString();
        break;
        case 5:this.reference = 'NC0' + responce.toString();
        break;
        default:this.reference = 'NC' + responce.toString();
    }
}

ConnectionJobs.create = (newconnectionjobs)=>{
    return new Promise((resolve, reject) => {
        let sql = "insert into ce2_content.Connection_Jobs set ?";
        connectionDB.query(sql , newconnectionjobs ,(error , result)=>{
            if(error){
                reject(error);
            }else{
                resolve(result.insertId);
            }
    
        });       
    })
};
ConnectionJobs.update = (newconnectionjobs , id)=>{
    return new Promise((resolve , reject)=>{
        let sql = "update ce2_content.Connection_Jobs set ? where Id =?";
        console.log(id);
        connectionDB.query(sql , [newconnectionjobs, id] ,(error , result)=>{
            if(error){
                reject(error);
            }else{
                resolve(result.changedRows);
            }
        });
    })
};
ConnectionJobs.findbyid =(id)=>{
    
    return new Promise((resolve , reject)=>{
        let sql ="select * from ce2_content.Connection_Jobs where Id = ?";
        connectionDB.query(sql , id, (err ,result)=>{
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        });
    });
};

export {ConnectionJobs,Reference};


