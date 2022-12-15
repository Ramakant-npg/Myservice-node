import connectionDB from '../configuration/ce2_contentConfig.js';
const ConnectionSingleInstallerDetails = (connectionsingleinstallerdetails)=>{
    this.Connection_Id = connectionsingleinstallerdetails.Connection_Id;
    this.Installer_Title = connectionsingleinstallerdetails.Installer_Title;
    this.Installer_First_Name = connectionsingleinstallerdetails.Installer_First_Name;
    this.Installer_Surname = connectionsingleinstallerdetails.Installer_Surname;
    this.Installer_Accreditation_Qualification = connectionsingleinstallerdetails.Installer_Accreditation_Qualification;
    this.Installer_Site_Number = connectionsingleinstallerdetails.Installer_Site_Number;
    this.Installer_Street = connectionsingleinstallerdetails.Installer_Street;
    this.Installer_City_Region = connectionsingleinstallerdetails.Installer_City_Region;
    this.Installer_Postcode = connectionsingleinstallerdetails.Installer_Postcode;
    this.Installer_Email_Address = connectionsingleinstallerdetails.Installer_Email_Address;
    this.Installer_Telephone = connectionsingleinstallerdetails.Installer_Telephone;
    this.Installer_Declairation = connectionsingleinstallerdetails.Installer_Declairation;
}

ConnectionSingleInstallerDetails.save = async(newconnectionsingleinstallerdetails)=>{
    return new Promise((resolve , reject)=>{
        let sql = " insert into ce2_content.Connection_Single_Installer_Details set ?";
        connectionDB.query(sql, newconnectionsingleinstallerdetails ,(error , result)=>{
            if (error) {
                reject (error);
            } else {
                resolve(result.insertId);
            }
        });
    });
}
ConnectionSingleInstallerDetails.update = async(newconnectionsingleinstallerdetails , id)=>{
    return new Promise((resolve , reject)=>{
        let sql = "update ce2_content.Connection_Single_Installer_Details set ? where Connection_Id = ?";
        connectionDB.query(sql , [newconnectionsingleinstallerdetails ,id] ,(error ,result)=>{
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
}
ConnectionSingleInstallerDetails.findbyId=(newconnectionsingleinstallerdetails)=>{
    return new Promise((resolve , reject)=>{
        let sql ="select * from ce2_content.Connection_Single_Installer_Details where Connection_Id = ?";
        connectionDB.query(sql , newconnectionsingleinstallerdetails, (err ,result)=>{
        if(err){
            reject(err);
        }else{
            resolve(result);
        }
    });
}); 
};

 const ConnectionMultipleInstallerDetails = (connectionmultipleinstallerdetails)=>{
    this.Multiple_customer_Reference = connectionmultipleinstallerdetails.Multiple_customer_Reference;
    this.Multiple_Installer_Title = connectionmultipleinstallerdetails.Multiple_Installer_Title;
    this.Multiple_Installer_First_Name = connectionmultipleinstallerdetails.Multiple_Installer_First_Name;
    this.Multiple_Installer_Surname = connectionmultipleinstallerdetails.Multiple_Installer_Company_Name;
    this.Multiple_Installer_Company_Name = connectionmultipleinstallerdetails.Multiple_Installer_Company_Name;
    this.Multiple_Nature_Of_Business = connectionmultipleinstallerdetails.Multiple_Nature_Of_Business;
    this.Multiple_Installer_Site_Name = connectionmultipleinstallerdetails.Multiple_Installer_Site_Name;
    this.Multiple_Installer_Street = connectionmultipleinstallerdetails.Multiple_Installer_Street;
    this.Multiple_Installer_City_Region = connectionmultipleinstallerdetails.Multiple_Installer_City_Region;
    this.Multiple_Installer_Postcode = connectionmultipleinstallerdetails.Multiple_Installer_Postcode;
    this.Multiple_Installer_Telephone = connectionmultipleinstallerdetails.Multiple_Installer_Telephone;
    this.Multiple_Installer_Mobile = connectionmultipleinstallerdetails.Multiple_Installer_Mobile;
    this.Multiple_Installer_Email_Address = connectionmultipleinstallerdetails.Multiple_Installer_Email_Address;
}

ConnectionMultipleInstallerDetails.save = async(newconnectionmultipleinstallerdetails)=>{
    return new Promise((resolve , reject)=>{
        let sql = " insert into ce2_content.Connection_Multiple_Installer_Details set ?";
        connectionDB.query(sql, newconnectionmultipleinstallerdetails ,(error , result)=>{
            if (error) {
                reject (error);
            } else {
                resolve(result);
            }
        });
    });
}

ConnectionMultipleInstallerDetails.update = async(newconnectionmultipleinstallerdetails , id)=>{
    return new Promise((resolve , reject)=>{
        let sql = "update ce2_content.Connection_Multiple_Installer_Details set ? where Connection_Id = ?";
        connectionDB.query(sql , [newconnectionmultipleinstallerdetails ,id] ,(error ,result)=>{
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
}
ConnectionMultipleInstallerDetails.findbyId=(newconnectionmultipleinstallerdetails)=>{
    return new Promise((resolve , reject)=>{
        let sql ="select * from ce2_content.Connection_Multiple_Installer_Details where Connection_Id = ?";
        connectionDB.query(sql , newconnectionmultipleinstallerdetails, (err ,result)=>{
        if(err){
            reject(err);
        }else{
            resolve(result);
        }
    });
}); 
};

export   {ConnectionSingleInstallerDetails, ConnectionMultipleInstallerDetails};