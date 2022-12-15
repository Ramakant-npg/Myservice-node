import connectionDB from "../configuration/ce2_contentConfig.js";

const ConnectionSiteOwnerDetails = (connectionsiteownerdetails) =>{
    this.Connection_Id = connectionsiteownerdetails.Connection_Id;
    this.Customer_Reference = connectionsiteownerdetails.Customer_Reference;
    this.Customer_Title = connectionsiteownerdetails.Customer_Title;
    this.Customer_First_Name = connectionsiteownerdetails.Customer_First_Name;
    this.Customer_Surname = connectionsiteownerdetails.Customer_Surname;
    this.Customer_Contact_Telephone = connectionsiteownerdetails.Customer_Contact_Telephone;
    this.Installer_Site_Name = connectionsiteownerdetails.Installer_Site_Name;
    this.Installer_Site_Street = connectionsiteownerdetails.Installer_Site_Street;
    this.Installer_Site_City = connectionsiteownerdetails.Installer_Site_City;
    this.Installer_Site_Postcode = connectionsiteownerdetails.Installer_Site_Postcode;
    this.Mpan = connectionsiteownerdetails.Mpan;
    this.Previous_Reference = connectionsiteownerdetails.Previous_Reference;
    this.Owner_Title = connectionsiteownerdetails.Owner_Title;
    this.Owner_First_Name = connectionsiteownerdetails.Owner_First_Name;
    this.Owner_Surname = connectionsiteownerdetails.Owner_Surname;
    this.Owner_Contact_Telephone = connectionsiteownerdetails.Owner_Contact_Telephone;
    this.Owner_Site_Name = connectionsiteownerdetails.Owner_Site_Name;
    this.Owner_Site_Street = connectionsiteownerdetails.Owner_Site_Street;
    this.Owner_Site_City = connectionsiteownerdetails.Owner_Site_City;
    this.Owner_Site_Postcode = connectionsiteownerdetails.Owner_Site_Postcode; 

}

ConnectionSiteOwnerDetails.create = (data)=>{
    return new Promise ((resolve, reject)=>{
        let sql = "insert into ce2_content.Connection_Site_Owner_Details set ?";
        connectionDB.query( sql, data ,(err , result)=>{
            if(err){
                return reject(err);
            }
            return resolve(result);
        });
    });
}
ConnectionSiteOwnerDetails.update = (data,id)=>{
   return new Promise((resolve,reject)=>{
        let sql = "update ce2_content.Connection_Site_Owner_Details set ? where Connection_Id =?";
        connectionDB.query( sql, [data,id],(err , result)=>{
            if(err) {
              return reject(err);
             }
            return resolve(result);

        });
    });
}
ConnectionSiteOwnerDetails.findbyid =(data)=>{
    
    return new Promise((resolve , reject)=>{
        let sql ="select * from ce2_content.Connection_Site_Owner_Details where Connection_Id = ?";
        connectionDB.query(sql , data, (err ,result)=>{
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        });
    });
};
export default ConnectionSiteOwnerDetails;
