import connectionDB from '../configuration/ce2_contentConfig.js';

const ConnectionTypes = (connectiontypes) =>{
    this.Id = connectiontypes.Id
    this.Connection_Types = connectiontypes.ConnectionTypes;
    this.Connection_Description = connectiontypes.Connection_Description;
    this.Your_Site_Address = connectiontypes.Your_Site_Address;
    this.Site_Owner_Details = connectiontypes.Site_Owner_Details;
    this.Site_Contact_Details = connectiontypes.Site_Contact_Details;
    this.Your_Connection = connectiontypes.Your_Connection;
    this.Single_Premises_Details = connectiontypes.Single_Premises_Details;
    this.Multiple_Premises_Details = connectiontypes.Multiple_Premises_Details;
    this.Moving_Our_Equipment_Details = connectiontypes.Moving_Our_Equipment_Details;
    this.Single_Installer_Details = connectiontypes.Single_Installer_Details;
    this.Multiple_Installer_Details = connectiontypes.Multiple_Installer_Details;
    this.Electrical_Equipment = connectiontypes.Electrical_Equipment;
    this.Existing_Generation = connectiontypes.Existing_Generation;
    this.New_Generation = connectiontypes.New_Generation;
    this.Your_Site_Plan = connectiontypes.Your_Site_Plan;
    this.Contact_Preferences = connectiontypes.Contact_Preferences;
    this.Additional_Information = connectiontypes.Additional_Information;
    this.Site_Information = connectiontypes.Site_Information;
    this.Your_Work_Date = connectiontypes.Your_Work_Date;
    this.Your_Connection_Date = connectiontypes.Your_Connection_Date;
    this.Invoice_Details = connectiontypes.Invoice_Details;
}
ConnectionTypes.find =()=>{
    return new Promise((resolve , reject)=>{
        let sql ="select Id,Connection_Types,Connection_Description from ce2_content.Connection_Types";
        connectionDB.query(sql ,(err ,result)=>{
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        });
    });
}
ConnectionTypes.findbyconnectiontype =(newconnectiontypes)=>{
    return new Promise((resolve , reject)=>{
        let sql ="select * from ce2_content.Connection_Types where Id = ?";
        connectionDB.query(sql , newconnectiontypes, (err ,result)=>{
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        });
    });
}
ConnectionTypes.findbyconnectiontypes =(newconnectiontypes)=>{
    return new Promise((resolve , reject)=>{
        let sql ="select * from ce2_content.Connection_Types where Connection_Types = ?";
        connectionDB.query(sql , newconnectiontypes, (err ,result)=>{
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        });
    });
};


ConnectionTypes.update =(newconnectiontypes,id)=>{
    return new Promise((resolve,reject)=>{
    let sql = "update ce2_content.Connection_Types set ? where id = ?";
    connectionDB.query( sql, [newconnectiontypes,id] ,(err , result)=>{
        if(err){
            return reject(err);
        }
        return resolve(result);
    });
    });
}
  

export default ConnectionTypes ;