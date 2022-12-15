import connectionDB from "../configuration/ce2_contentConfig.js";
let ConnectionSiteInformation= (connectionsiteinformation)=>{
    this.Connection_Id =  connectionsiteinformation.Connection_Id;
    this.Site_Water_Flag = connectionsiteinformation.Site_Water_Flag;
    this.Site_Water_Details =   connectionsiteinformation.Site_Water_Details;
    this.Site_Preservation_Flag =   connectionsiteinformation.Site_Preservation_Flag;
    this.Site_Preservation_Details =   connectionsiteinformation.Site_Preservation_Details;
    this.Site_Hazard_Flag=   connectionsiteinformation.Site_Hazard_Flag;
    this.Site_Hazard_Details=   connectionsiteinformation.Site_Hazard_Details;
    this.Site_Classification_Flag=   connectionsiteinformation.Site_Classification_Flag;
    this.Site_Classification_Details=   connectionsiteinformation.Site_Classification_Details;
    this.Site_Flooding_Flag=   connectionsiteinformation.Site_Flooding_Flag;
    this.Site_Digging_Flag=   connectionsiteinformation.Site_Digging_Flag;
}

ConnectionSiteInformation.create = (newconnectionsiteinformation, callback)=>{
    return new Promise((resolve , reject)=>{
    let sql = "insert into ce2_content.Connection_Site_Information set ?";
    connectionDB.query(sql , newconnectionsiteinformation, (error , result)=>{
        if(error){
            return reject(error);
        }else{
            return resolve(result.insertId);
        }
    });
});

};

ConnectionSiteInformation.update = (newconnectionsiteinformation , id)=>{
    return new Promise((resolve , reject)=>{
        let sql ="update ce2_content.Connection_Site_Information set ? where Connection_Id = ?";
        connectionDB.query(sql ,[newconnectionsiteinformation ,id], (error , result)=>{
            if (error) {
                return reject(error);
            } else {
               return resolve(result); 
            }
        });
    });
};
ConnectionSiteInformation.findbyid =(newconnectionsiteinformation)=>{
    return new Promise((resolve, reject) => {
        let sql = "select * from ce2_content.Connection_Site_Information where Connection_Id = ?";
        connectionDB.query(sql, newconnectionsiteinformation, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
}

export default ConnectionSiteInformation;