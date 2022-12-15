import connectionDB from "../configuration/ce2_contentConfig.js";

const ConnectionContactPreference = (connectioncontactpreference)=>{
    this.Connection_Id = connectioncontactpreference.Connection_Id;
    this.Contact_Preference	= connectioncontactpreference.Contact_Preference;
    this.Receive_Quotation_Information = connectioncontactpreference.Receive_Quotation_Information;
}
ConnectionContactPreference.save = (newconnectioncontactpreference)=>{
    return new Promise((resolve  , reject)=>{
        let sql = " insert into ce2_content.Connection_Contact_Preference set ?";
        connectionDB.query(sql,newconnectioncontactpreference ,(error , result)=>{
            if (error) {
                reject (error);
            } else {
                resolve(result.insertId);
            }
        });
    });
}

ConnectionContactPreference.update = (newconnectioncontactpreference , id)=>{
    return new Promise((resolve , reject)=>{
        let sql = "update ce2_content.Connection_Contact_Preference set ? where Connection_Id = ?";
        connectionDB.query(sql , [newconnectioncontactpreference ,id] ,(error ,result)=>{
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
}
ConnectionContactPreference.findbyId=(newconnectioncontactpreference)=>{
    return new Promise((resolve , reject)=>{
        let sql ="select * from ce2_content.Connection_Contact_Preference where Connection_Id = ?";
        connectionDB.query(sql , newconnectioncontactpreference, (err ,result)=>{
        if(err){
            reject(err);
        }else{
            resolve(result);
        }
    });
}); 
};
export default ConnectionContactPreference;