import connectionDB from '../configuration/ce2_contentConfig.js';

const ConnectionStatus= (ConnectionStatus) =>{
    this.Connection_Status=ConnectionStatus.Connection_Status;
    this.Is_Active= ConnectionStatus.Is_Active;
   }
ConnectionStatus.update = (newconnectionstatus, id,)=>{
    return new Promise((resolve,reject)=>{
    let sql = "update  ce2_content.Connection_Status set? where id=?";
    connectionDB.query( sql,[newconnectionstatus,id] ,(error , result)=>{
        if(err){
            return reject(err);
        }
        return resolve(result);
    });
    });
}
ConnectionStatus.findall = () =>{
    return new Promise((resolve,reject)=>{
        let sql = "select * from ce2_content.Connection_Status";
        connectionDB.query(sql,(err , result)=>{
            if(err){
                return reject(err);
            }
            return resolve(result);
        });
    })
}
export  default ConnectionStatus;  