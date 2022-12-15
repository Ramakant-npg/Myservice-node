import connectionDB from "../configuration/ce2_contentConfig.js";
const customerdetails =(id)=>{
    return new Promise((resolve , reject)=>{
        let sql ="SELECT title 'title' ,name 'custFirstName',surname 'custSurName' ,company 'custCompanyName',tel 'custContactTel',email 'email',address1 'Site_Name' ,address2 'Site_Street',address3 'Site_City' ,postcode 'Site_Postcode' FROM ce2_content.customer_customer where loginId = ?";
        connectionDB.query(sql , id, (err ,result)=>{
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        });
    });
};

export default customerdetails;