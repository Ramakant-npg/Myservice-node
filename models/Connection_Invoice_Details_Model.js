import connectionDB from "../configuration/ce2_contentConfig.js";

const ConnectionInvoiceDetails =(connectioninvoicedetails)=>{
    this.Connection_Id = connectioninvoicedetails.Connection_Id;
    this.Customer_Name = connectioninvoicedetails.Customer_Name; 
    this.Company_Name = connectioninvoicedetails.Company_Name;
    this.Customer_Property_Name = connectioninvoicedetails.Customer_Property_Name;
    this.Customer_Address = connectioninvoicedetails.Customer_Address;
    this.Customer_Town = connectioninvoicedetails.Customer_Town;
    this.Customer_Country = connectioninvoicedetails.Customer_Country ;
    this.Customer_Postcode = connectioninvoicedetails.Customer_Postcode;
}
ConnectionInvoiceDetails.findbyId=(newconnectioninvoicedetails)=>{
    return new Promise((resolve , reject)=>{
        let sql ="select * from ce2_content.Connection_Invoice_Details where Connection_Id = ?";
        connectionDB.query(sql , newconnectioninvoicedetails, (err ,result)=>{
        if(err){
            reject(err);
        }else{
            resolve(result);
        }
    });
}); 
};
ConnectionInvoiceDetails.create = (newconnectioninvoicedetails,)=>{
    return new Promise((resolve , reject)=>{
    let sql = "insert into ce2_content.Connection_Invoice_Details set ?";
    connectionDB.query(sql , newconnectioninvoicedetails ,(error , result)=>{
        if(error){
            return reject(error);
        }else{
            return resolve(result.insertId);
        }
    });
});

};

ConnectionInvoiceDetails.update = (newconnectioninvoicedetails, id)=>{
    return new Promise((resolve , reject)=>{
    let sql = "update ce2_content.Connection_Invoice_Details set ? where Connection_Id =?";
    connectionDB.query(sql , [newconnectioninvoicedetails , id],(error , result)=>{
        if(error){
            console.log(error);
            return reject(error);
        }else{
            return resolve(result);
        }
    });
});

};


export default ConnectionInvoiceDetails;