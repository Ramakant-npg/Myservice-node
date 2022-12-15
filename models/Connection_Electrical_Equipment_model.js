import connectionDB from "../configuration/ce2_contentConfig.js";

const ConnectionElectricalEquipment = (connectionelectricalequipment) => {
    this.Connection_Id = connectionelectricalequipment.Connection_Id;
    this.Install_Electric_Heater = connectionelectricalequipment.Install_Electric_Heater;
    this.Install_Ground_Pump = connectionelectricalequipment.Install_Ground_Pump;
    this.Install_Air_Pump = connectionelectricalequipment.Install_Air_Pump;
    this.Install_Motor = connectionelectricalequipment.Install_Motor;
    this.Install_Welder = connectionelectricalequipment.Install_Welder;
    this.Install_Harmonic_Distortion = connectionelectricalequipment.Install_Harmonic_Distortion;
}
// ConnectionElectricalEquipment.create = (newconnectionelectricalequipment)=>{
//     return new Promise((resolve  , reject)=>{
//         let sql = " insert into ce2_content.Connection_Electrical_Equipment set ?";
//         connectionDB.query(sql,newconnectionelectricalequipment ,(error , result)=>{
//             if(error){
//                 return reject(error);
//             }
//             return resolve(result);
//         });
//         });
//     }
ConnectionElectricalEquipment.save = (newconnectionelectricalequipment) => {
    return new Promise((resolve, reject) => {
        let sql = " insert into ce2_content.Connection_Electrical_Equipment set ?";
        connectionDB.query(sql, newconnectionelectricalequipment, (error, result) => {
            if (error) {
                return reject(error);
            }
            return resolve(result.insertId);
        });
    });
}
ConnectionElectricalEquipment.update = (newconnectionelectricalequipment ,id) => {
    return new Promise((resolve, reject) => {
        // const id = newconnectionelectricalequipment.Connection_Id;
        let sql = "update ce2_content.Connection_Electrical_Equipment set ? where Connection_Id = ?";
        connectionDB.query(sql, [newconnectionelectricalequipment, id], (error, result) => {
            if (error) {
                return reject(error);
            }
            return resolve(result.changedRows);
        });
    });
}
ConnectionElectricalEquipment.findbyConnectionId = (newconnectionelectricalequipment) => {

    return new Promise((resolve, reject) => {
        let sql = "select * from ce2_content.Connection_Electrical_Equipment where Connection_Id = ?";
        connectionDB.query(sql, newconnectionelectricalequipment, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}

const Electrict_Heater = (electrictheater) => {
    this.Connection_Id = electrictheater.Connection_Id;
    this.Electrical_Equipment_Id = electrictheater.Electrical_Equipment_Id;
    this.No_Electric_Shower = electrictheater.No_Electric_Shower;
    this.Load_Electric_Shower = electrictheater.Load_Electric_Shower;
    this.No_Water_Heater = electrictheater.No_Water_Heater;
    this.Load_Water_Heater = electrictheater.Load_Water_Heater;
    this.No_Storage_Heater = electrictheater.No_Storage_Heater;
    this.Load_Storage_Heater = electrictheater.Load_Storage_Heater;
    this.No_DASH = electrictheater.No_DASH;
    this.Load_DASH = electrictheater.Load_DASH;
    this.No_Other_Heater = electrictheater.No_Other_Heater;
    this.Load_Other_Heater = electrictheater.Load_Other_Heater;
}
Electrict_Heater.save = (data) => {
    return new Promise((resolve, reject) => {
        let sql = " insert into ce2_content.Connection_Electrical_Heater set ?";
        connectionDB.query(sql, data, (error, result) => {
            if (error) {
                return reject(error);
            }
            return resolve(result.insertId);
        });
    });
}
Electrict_Heater.update = (newconnectionelectricalequipment) => {
    return new Promise((resolve, reject) => {
        const id = newconnectionelectricalequipment.Id;
        let sql = "update ce2_content.Connection_Electrical_Heater set ? where Id = ?";
        connectionDB.query(sql, [newconnectionelectricalequipment, id], (error, result) => {
            if (error) {
                return reject(error);
            }
            console.log(result);
            return resolve(result);
        });
    });
}
Electrict_Heater.remove = (con_id) => {
    return new Promise((resolve, reject) => {
        let sql = "delete from ce2_content.Connection_Electrical_Heater where Connection_Id = ?";
        connectionDB.query(sql, con_id, (error, result) => {
            if (error) {
                return reject(error);
            }
            return resolve(result);
        });
    });
}
Electrict_Heater.findbyConnectionId = (Con_Id) => {

    return new Promise((resolve, reject) => {
        console.log("step1 model");
        let sql = "select * from ce2_content.Connection_Electrical_Heater where Connection_Id = ?";
        connectionDB.query(sql, Con_Id, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
                // console.log(result);
            }
        });
    });
}
const GroundPumpData = (groundpumpdata) => {
    this.Connection_Id = groundpumpdata.Connection_Id;
    this.Electrical_Equipment_Id = groundpumpdata.Electrical_Equipment_Id;
    this.No_Ground_Pump = groundpumpdata.No_Ground_Pump;
    this.Phase_Ground_Pump = groundpumpdata.Phase_Ground_Pump;
    this.Current_Ground_Pump = groundpumpdata.Current_Ground_Pump;
    this.Rating_Ground_Pump = groundpumpdata.Rating_Ground_Pump;
    this.Model_Ground_Pump = groundpumpdata.Model_Ground_Pump;
    this.BS_BN_Ground_Pump = groundpumpdata.BS_BN_Ground_Pump;
}
GroundPumpData.save = (data) => {
    return new Promise((resolve, reject) => {
        let sql = " insert into ce2_content.Connection_Electrical_Grd_Pump set ?";
        connectionDB.query(sql, data, (error, result) => {
            if (error) {
                return reject(error);
            }
            return resolve(result.insertId);
        });
    })
}
GroundPumpData.update = (groundpumpdata) => {
    return new Promise((resolve, reject) => {
        console.log(groundpumpdata);
        const id = groundpumpdata.Id;
        let sql = "update ce2_content.Connection_Electrical_Grd_Pump set ? where Id = ?";
        connectionDB.query(sql, [groundpumpdata, id], (error, result) => {
            if (error) {
                return reject(error);
            }
            return resolve(result);
        });
    });
}
GroundPumpData.remove = (con_id) => {
    return new Promise((resolve, reject) => {
        let sql = "delete from ce2_content.Connection_Electrical_Grd_Pump where Connection_Id = ?";
        connectionDB.query(sql, con_id, (error, result) => {
            if (error) {
                return reject(error);
            }
            return resolve(result);
        });
    });
}
GroundPumpData.reduce = (Id) => {
    return new Promise((resolve, reject) => {
        let sql = "delete from ce2_content.Connection_Electrical_Grd_Pump where Id = ?";
        connectionDB.query(sql, Id, (error, result) => {
            if (error) {
                return reject(error);
            }
            return resolve(result.affectedRows);
        });
    });
}
GroundPumpData.findbyConnectionId = (Con_Id) => {

    return new Promise((resolve, reject) => {
        let sql = "select * from ce2_content.Connection_Electrical_Grd_Pump where Connection_Id = ?";
        connectionDB.query(sql, Con_Id, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
                // console.log(result);
            }
        });
    });
}
ConnectionElectricalEquipment.findbyConnectionId = (newconnectionelectricalequipment) => {

    return new Promise((resolve, reject) => {
        let sql = "select * from ce2_content.Connection_Electrical_Equipment where Connection_Id = ?";
        connectionDB.query(sql, newconnectionelectricalequipment, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}
const AirPumpData = (airpumpdata) => {
    this.Connection_Id = airpumpdata.Connection_Id;
    this.Electrical_Equipment_Id = responce;
    this.No_Air_Pump = airpumpdata.No_Air_Pump;
    this.Phase_Air_Pump = airpumpdata.Phase_Air_Pump;
    this.Current_Air_Pump = airpumpdata.Current_Air_Pump;
    this.Rating_Air_Pump = airpumpdata.Rating_Air_Pump;
    this.Model_Air_Pump = airpumpdata.Model_Air_Pump;
    this.BS_BN_Air_Pump = airpumpdata.BS_BN_Air_Pump;
}
AirPumpData.save = (data) => {
    return new Promise((resolve, reject) => {
        let sql = " insert into ce2_content.Connection_Electrical_Air_Pump set ?";
        connectionDB.query(sql, data, (error, result) => {
            if (error) {
                return reject(error);
            }
            return resolve(result.insertId);
        });
    })
}
AirPumpData.update = (airpumpdata) => {
    return new Promise((resolve, reject) => {
        const id = airpumpdata.Id;
        let sql = "update ce2_content.Connection_Electrical_Air_Pump set ? where Id = ?";
        connectionDB.query(sql, [airpumpdata, id], (error, result) => {
            if (error) {
                return reject(error);
            }
            return resolve(result);
        });
    });
}
AirPumpData.remove = (con_id) => {
    return new Promise((resolve, reject) => {
        let sql = "delete from ce2_content.Connection_Electrical_Air_Pump where Connection_Id = ?";
        connectionDB.query(sql, con_id, (error, result) => {
            if (error) {
                return reject(error);
            }
            return resolve(result);
        });
    });
}
AirPumpData.reduce = (Id) => {
    return new Promise((resolve, reject) => {
        let sql = "delete from ce2_content.Connection_Electrical_Air_Pump where Id = ?";
        connectionDB.query(sql, Id, (error, result) => {
            if (error) {
                return reject(error);
            }
            return resolve(result.affectedRows);
        });
    });
}
AirPumpData.findbyConnectionId = (Con_Id)=>{
    return new Promise((resolve, reject) => {        
        let sql = "select * from ce2_content.Connection_Electrical_Air_Pump where Connection_Id = ?";
        connectionDB.query(sql, Con_Id, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}
ConnectionElectricalEquipment.findbyConnectionId = (newconnectionelectricalequipment) => {

    return new Promise((resolve, reject) => {
        let sql = "select * from ce2_content.Connection_Electrical_Equipment where Connection_Id = ?";
        connectionDB.query(sql, newconnectionelectricalequipment, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}
const MotorData = (motordata) => {
    this.Connection_Id = motordata.Connection_Id;
    this.Electrical_Equipment_Id = motordata.Electrical_Equipment_Id;
    this.No_Motor = motordata.No_Motor;
    this.Phase_Motor = motordata.Phase_Motor;
    this.Type_Motor = motordata.Type_Motor;
    this.Current_Motor = motordata.Current_Motor;
    this.Rating_Motor = motordata.Rating_Motor;
    this.Hourly_Motor_Start = motordata.Hourly_Motor_Start;
}
MotorData.save = (data) => {
    return new Promise((resolve, reject) => {
        let sql = " insert into ce2_content.Connection_Electrical_Motor set ?";
        connectionDB.query(sql, data, (error, result) => {
            if (error) {
                return reject(error);
            }
            console.log(result);
            return resolve(result.insertId);
        });
    })
}
MotorData.update = (motorData) => {
    return new Promise((resolve, reject) => {
        const id = motorData.Id;
        let sql = "update ce2_content.Connection_Electrical_Motor set ? where Id = ?";
        connectionDB.query(sql, [motorData, id], (error, result) => {
            if (error) {
                return reject(error);
            }
            return resolve(result.affectedRows);
        });
    });
}
MotorData.remove = (con_id) => {
    return new Promise((resolve, reject) => {
        let sql = "delete from ce2_content.Connection_Electrical_Motor where Connection_Id = ?";
        connectionDB.query(sql, con_id, (error, result) => {
            if (error) {
                return reject(error);
            }
            return resolve(result.affectedRows);
        });
    });
}
MotorData.reduce = (Id) => {
    return new Promise((resolve, reject) => {
        let sql = "delete from ce2_content.Connection_Electrical_Motor where Id = ?";
        connectionDB.query(sql, Id, (error, result) => {
            if (error) {
                return reject(error);
            }
            return resolve(result.affectedRows);
        });
    });
}
MotorData.findbyConnectionId = (Con_Id)=>{
    return new Promise((resolve, reject) => {        
        let sql = "select * from ce2_content.Connection_Electrical_Motor where Connection_Id = ?";
        connectionDB.query(sql, Con_Id, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}
const WelderData = (welderdata) => {
    this.Connection_Id = welderdata.Connection_Id;
    this.Electrical_Equipment_Id = welderdata.Electrical_Equipment_Id;
    this.No_Welder = welderdata.No_Welder;
    this.Voltage_Welder = welderdata.Voltage_Welder;
    this.Current_Welder = welderdata.Current_Welder;
    this.Rating_Welder = welderdata.Rating_Welder;
    this.Weld_Per_Minute = welderdata.Weld_Per_Minute;
    this.Phase_Welder = welderdata.Phase_Welder;
}
WelderData.save = (data) => {
    return new Promise((resolve, reject) => {
        let sql = " insert into ce2_content.Connection_Electrical_Welder set ?";
        connectionDB.query(sql, data, (error, result) => {
            if (error) {
                return reject(error);
            }
            return resolve(result.insertId);
        });
    });
}
WelderData.update = (welderdata) => {
    return new Promise((resolve, reject) => {
        const id = welderdata.Id;
        let sql = "update ce2_content.Connection_Electrical_Welder set ? where Id = ?";
        connectionDB.query(sql, [welderdata, id], (error, result) => {
            if (error) {
                return reject(error);
            }
            return resolve(result);
        });
    });
}
WelderData.remove = (con_id) => {
    return new Promise((resolve, reject) => {
        let sql = "delete from  ce2_content.Connection_Electrical_Welder  where Connection_Id = ?";
        connectionDB.query(sql, con_id, (error, result) => {
            if (error) {
                return reject(error);
            }
            return resolve(result);
        });
    });
}
WelderData.reduce = (Id) => {
    return new Promise((resolve, reject) => {
        let sql = "delete from ce2_content.Connection_Electrical_Welder where Id = ?";
        connectionDB.query(sql, Id, (error, result) => {
            if (error) {
                return reject(error);
            }
            return resolve(result.affectedRows);
        });
    });
}
WelderData.findbyConnectionId = (connectionid)=>{
    return new Promise((resolve, reject) => {
        let sql = "select * from ce2_content.Connection_Electrical_Welder where Connection_Id = ?";
        connectionDB.query(sql, connectionid, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
    }
const HarmonicData = (harmonicdata) => {
    this.Connection_Id = harmonicdata.Connection_Id;
    this.Electrical_Equipment_Id = harmonicdata.Electrical_Equipment_Id;
    this.Details_Harmonic_Distortion = harmonicdata.Details_Harmonic_Distortion;
    this.Harmonic_Data_Sheets = harmonicdata.Harmonic_Data_Sheets;
}
HarmonicData.save = (data) => {
    return new Promise((resolve, reject) => {
        let sql = " insert into ce2_content.Connection_Electrical_Harmonic set ?";
        connectionDB.query(sql, data, (error, result) => {
            if (error) {
                return reject(error);
            }
            return resolve(result.insertId);
        });
    });
}
HarmonicData.update = (harmonicdata , id) => {
    console.log(harmonicdata);
    console.log(id);
    return new Promise((resolve, reject) => {
        // const id = harmonicdata.Id;
        let sql = "update ce2_content.Connection_Electrical_Harmonic set ? where Connection_Id = ?";
        connectionDB.query(sql, [harmonicdata, id], (error, result) => {
            if (error) {
                return reject(error);
            }
            console.log(result);
            return resolve(result);
        });
    });
}
HarmonicData.remove = (con_id) => {
    return new Promise((resolve, reject) => {
        let sql = "delete from ce2_content.Connection_Electrical_Harmonic  where Connection_Id = ?";
        connectionDB.query(sql, con_id, (error, result) => {
            if (error) {
                return reject(error);
            }
            return resolve(result);
        });
    });
}

HarmonicData.findbyConnectionId = (con_id)=>{
    return new Promise((resolve, reject) => {
        // let sql = " select * from ce2_content.Connection_Electrical_Harmonic where Connection_Id = ?";
        let qry = 'SELECT Connection_Id,Harmonic_Data_Sheets,Details_Harmonic_Distortion,FileName FROM ce2_content.Connection_Electrical_Harmonic as a inner join ce2_content.Common_Filebase as b on a.Harmonic_Data_Sheets = b.Id where Connection_Id = ?'
        connectionDB.query(qry, con_id, (error, result) => {
            if (error) {
                return reject(error);
            }
            return resolve(result);
        });
    });
}

export { ConnectionElectricalEquipment, Electrict_Heater, GroundPumpData, AirPumpData, MotorData, WelderData, HarmonicData }


