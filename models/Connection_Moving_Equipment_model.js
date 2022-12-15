import connectionDB from "../configuration/ce2_contentConfig.js";


const ConnectionMovingEquipment = (connectionmovingequipment) => {
    this.Connection_Id = connectionmovingequipment.Connection_Id;
    this.Equipment_Require_Moving = connectionmovingequipment.Equipment_Require_Moving;
    this.Proposed_Works_Description = connectionmovingequipment.Proposed_Works_Description;
}

ConnectionMovingEquipment.create = (data) =>{
    let connection_id = data.Connection_Id;
    let equipment_require_moving = data.Equipment_Require_Moving.toString();
    let proposed_works_description = data.Proposed_Works_Description;
    return new Promise((resolve,reject) =>{
        let sql = "insert into ce2_content.Connection_Moving_Equipment set Connection_Id = ? , Equipment_Require_Moving =? ,Proposed_Works_Description = ? ";
        connectionDB.query(sql, [connection_id,equipment_require_moving, proposed_works_description], (err,result) =>{
            if(err){
                return reject(err);
            }
            return resolve(result);
        });
        });
}
ConnectionMovingEquipment.update = (data,id) =>{
    let equipment_require_moving = data.Equipment_Require_Moving.toString();
    let proposed_works_description = data.Proposed_Works_Description;
    return new Promise((resolve,reject)=>{
    let sql = "update ce2_content.Connection_Moving_Equipment set Equipment_Require_Moving =? ,Proposed_Works_Description = ? where Connection_Id = ?";
    connectionDB.query(sql,[equipment_require_moving,proposed_works_description,id],(err,result)=>{
        if(err){
            return reject(err);
        }
        return resolve(result);
    });
    });
}
ConnectionMovingEquipment.findbyConnectionId =(newconnectionmovingequipment)=>{
    
    return new Promise((resolve , reject)=>{
        let sql ="select * from ce2_content.Connection_Moving_Equipment where Connection_Id = ?";
        connectionDB.query(sql , newconnectionmovingequipment, (error ,result)=>{
            if(error){
                reject(error);
            }else{
                resolve(result);
            }
        });
    });
}
export default ConnectionMovingEquipment;