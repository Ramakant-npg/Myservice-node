import connectionDB from '../configuration/ce2_contentConfig.js';

let ConnectionSiteDetails = (connectionsitedetails) => {
    this.Connection_Id = connectionsitedetails.Connection_Id;
    this.Customer_Reference = connectionsitedetails.Customer_Reference;
    this.Are_You_Current_Owner = connectionsitedetails.Are_You_Current_Owner;
    this.Applying_As_Agent = connectionsitedetails.Applying_As_Agent;
    this.Future_Owner = connectionsitedetails.Future_Owner;
    this.Agent_Of_Future_Owner = connectionsitedetails.Agent_Of_Future_Owner;
    this.Owner_Full_Company_Name = connectionsitedetails.Owner_Full_Company_Name;
    this.Owner_Title = connectionsitedetails.Owner_Title;
    this.Owner_First_Name = connectionsitedetails.Owner_First_Name;
    this.Owner_Surname = connectionsitedetails.Owner_Surname;
    this.Owner_PropertyName = connectionsitedetails.Owner_PropertyName;
    this.Owner_Address_Line2 = connectionsitedetails.Owner_Address_Line2;
    this.Owner_Address_Line3 = connectionsitedetails.Owner_Address_Line3;
    this.Owner_Address_Line4 = connectionsitedetails.Owner_Address_Line4;
    this.Owner_Postcode = connectionsitedetails.Owner_Postcode;
    this.Site_Name = connectionsitedetails.Site_Name;
    this.Site_Street = connectionsitedetails.Site_Street;
    this.Site_City = connectionsitedetails.Site_City;
    this.Site_Postcode = connectionsitedetails.Site_Postcode;
}

ConnectionSiteDetails.create = (newconnectionsitedetails) => {
    return new Promise((resolve, reject) => {
        let sql = "insert into ce2_content.Connection_Site_Details set ?";
        connectionDB.query(sql, newconnectionsitedetails, (error, result) => {
            if (error) {
                return reject(error);
            } else {
                return resolve(result.insertId);
            }
        });
    });
};
ConnectionSiteDetails.update = (newconnectionsitedetailsbyid, id) => {
    return new Promise((resolve, reject) => {
        let sql = "update ce2_content.Connection_Site_Details set ? where Connection_Id =?"
        connectionDB.query(sql, [newconnectionsitedetailsbyid, id], (error, result) => {
            if (error) {
                return reject(error);
            } else {
                return resolve(result);
            }
        });
    });
};
ConnectionSiteDetails.findbyid = (con_id) => {
    return new Promise((resolve, reject) => {
        let sql = "select * from ce2_content.Connection_Site_Details where Connection_Id =?";
        connectionDB.query(sql, con_id , (error, result) => {
            if (error) {
                return reject(error);
            } else {
                return resolve(result);
            }

        });
    });
};

export default ConnectionSiteDetails;