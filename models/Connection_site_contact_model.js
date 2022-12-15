import connectionDB from '../configuration/ce2_contentConfig.js';
const ConnectionSiteContactDetails = (connectionsitecontactdetails) =>{
    this.Connection_Id = connectionsitecontactdetails.Connection_Id;
    this.Customer_Reference = connectionsitecontactdetails.Customer_Reference;
    this.Customer_Title = connectionsitecontactdetails.Customer_Title;
    this.Customer_Firstname = connectionsitecontactdetails.Customer_First_Name;
    this.Customer_Surname = connectionsitecontactdetails.Customer_Surname;
    this.Company_Name=connectionsitecontactdetails.Company_Name;
    this.Customer_Telephone = connectionsitecontactdetails.Customer_Contact_Telephone;
    this.Customer_Mobile = connectionsitecontactdetails.Customer_Contact_Mobile;
    this.Customer_Email = connectionsitecontactdetails.Customer_Contact_Email;
    this.Site_Name = connectionsitecontactdetails.Site_Name;
    this.Site_Street = connectionsitecontactdetails.Site_Street;
    this.Site_City = connectionsitecontactdetails.Site_City;
    this.Site_Postcode = connectionsitecontactdetails.Site_Postcode;
}
ConnectionSiteContactDetails.create = (data)=>{
    return new Promise((resolve,reject)=>{
        let sql = "insert into ce2_content.Connection_Site_Contact_Details set ?";
        connectionDB.query( sql, data ,(err , result)=>{
          if(err){
             return reject(err);
          }
        return resolve(result);
      });  

    });
}
ConnectionSiteContactDetails.update = (data,id)=>{
    return new Promise ((resolve,reject)=>{
        let sql = "update  ce2_content.Connection_Site_Contact_Details set ? where  Connection_Id =?";
        connectionDB.query(sql,[data,id] ,(err , result)=>{
           if(err){
                return reject(err);
           }
           return resolve(result);
        });   
    });
} 
ConnectionSiteContactDetails.findbyConnectionId = (data) => {
    return new Promise((resolve, reject) => {
        let sql = "select * from ce2_content.Connection_Site_Contact_Details where Connection_Id =?";
        connectionDB.query(sql, data , (error, result) => {
            if (error) {
                return reject(error);
            } else {
                return resolve(result);
            }

        });
    });
};   

export default ConnectionSiteContactDetails;
