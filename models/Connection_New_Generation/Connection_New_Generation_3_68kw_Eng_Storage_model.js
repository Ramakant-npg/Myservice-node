import connectionDB from "../../configuration/ce2_contentConfig.js";
const ConnectionNewGeneration3_68kwEngStorage = (connectionnewgeneration3_68kwengstorage) =>{
    this.Id = connectionnewgeneration3_68kwengstorage.Id;
    this.Generator_Radio_Button = connectionnewgeneration3_68kwengstorage.Generator_Radio_Button;
    this.Connection_Id  = connectionnewgeneration3_68kwengstorage.Connection_Id;
    this.Is_Storage_Only_Or_Combined = connectionnewgeneration3_68kwengstorage.Is_Storage_Only_Or_Combined;
    this.Storage_Technology = connectionnewgeneration3_68kwengstorage.Storage_Technology;
    this.Another_Technology = connectionnewgeneration3_68kwengstorage.Another_Technology;
    this.Nameplate_Power_Rating = connectionnewgeneration3_68kwengstorage.Nameplate_Power_Rating;
    this.Registered_Energy_Capacity = connectionnewgeneration3_68kwengstorage.Registered_Energy_Capacity;
    this.Export_Firm_MW = connectionnewgeneration3_68kwengstorage.Export_Firm_MW;
    this.Export_Firm_Positive_MVAr = connectionnewgeneration3_68kwengstorage.Export_Firm_Positive_MVAr;
    this.Export_Firm_Negative_MVAr = connectionnewgeneration3_68kwengstorage.Export_Firm_Negative_MVAr;
    this.Export_Non_Firm_MW = connectionnewgeneration3_68kwengstorage.Export_Non_Firm_MW;
    this.Export_Non_Firm_Positive_MVAr = connectionnewgeneration3_68kwengstorage.Export_Non_Firm_Positive_MVAr;
    this.Export_Non_Firm_Negative_MVAr = connectionnewgeneration3_68kwengstorage.Export_Non_Firm_Negative_MVAr;
    this.Export_Total_MW = connectionnewgeneration3_68kwengstorage.Export_Total_MW;
    this.Export_Total_Positive_MVAr = connectionnewgeneration3_68kwengstorage.Export_Total_Positive_MVAr;
    this.Export_Total_Negative_MVAr = connectionnewgeneration3_68kwengstorage.Export_Total_Negative_MVAr;
    this.Import_Firm_MW = connectionnewgeneration3_68kwengstorage.Import_Firm_MW;
    this.Import_Firm_Positive_MVAr = connectionnewgeneration3_68kwengstorage.Import_Firm_Positive_MVAr;
    this.Import_Firm_Negative_MVAr = connectionnewgeneration3_68kwengstorage.Import_Firm_Negative_MVAr;
    this.Import_Non_Firm_MW = connectionnewgeneration3_68kwengstorage.Import_Non_Firm_MW;
    this.Import_Non_Firm_Positive_MVAr = connectionnewgeneration3_68kwengstorage.Import_Non_Firm_Positive_MVAr;
    this.Import_Non_Firm_Negative_MVAr = connectionnewgeneration3_68kwengstorage.Import_Non_Firm_Negative_MVAr;
    this.Import_Total_MW = connectionnewgeneration3_68kwengstorage.Import_Total_MW;
    this.Import_Total_Positive_MVAr = connectionnewgeneration3_68kwengstorage.Import_Total_Positive_MVAr;
    this.Import_Total_Negative_MVAr = connectionnewgeneration3_68kwengstorage.Import_Total_Negative_MVAr;
    this.No_Operating_Modes = connectionnewgeneration3_68kwengstorage.No_Operating_Modes;
    this.Operating_Attachment_1 = connectionnewgeneration3_68kwengstorage.Operating_Attachment_1;
    this.Operating_Attachment_2 = connectionnewgeneration3_68kwengstorage.Operating_Attachment_2;
    this.ESS_With_Another_Generation = connectionnewgeneration3_68kwengstorage.ESS_With_Another_Generation;
    this.ESS_Another_Generation_Details = connectionnewgeneration3_68kwengstorage.ESS_Another_Generation_Details;
    this.Supporting_Attachment_1 = connectionnewgeneration3_68kwengstorage.Supporting_Attachment_1;
    this.Supporting_Attachment_2 = connectionnewgeneration3_68kwengstorage.Supporting_Attachment_2;
    this.Commercial_Service_Name = connectionnewgeneration3_68kwengstorage.Commercial_Service_Name;
    this.Commercial_Service_Contact = connectionnewgeneration3_68kwengstorage.Commercial_Service_Contact;
    this.Coordinated_Other_Storage = connectionnewgeneration3_68kwengstorage.Coordinated_Other_Storage;
    this.Coordinated_Storage_Details = connectionnewgeneration3_68kwengstorage.Coordinated_Storage_Details;
    this.Export_Power_Ramp_Rate_Positive = connectionnewgeneration3_68kwengstorage.Export_Power_Ramp_Rate_Positive;
    this.Export_Power_Ramp_Rate_Negative = connectionnewgeneration3_68kwengstorage.Export_Power_Ramp_Rate_Negative;
    this.Import_Power_Ramp_Rate_Positive = connectionnewgeneration3_68kwengstorage.Import_Power_Ramp_Rate_Positive;
    this.Import_Power_Ramp_Rate_Negative = connectionnewgeneration3_68kwengstorage.Import_Power_Ramp_Rate_Negative;
    this.Power_Swing_MW =connectionnewgeneration3_68kwengstorage.Power_Swing_MW;
    this.Power_Swing_Up = connectionnewgeneration3_68kwengstorage.Power_Swing_Up;
    this.Power_Swing_Down = connectionnewgeneration3_68kwengstorage.Power_Swing_Down;
    this.Power_Swing_Both = connectionnewgeneration3_68kwengstorage.Power_Swing_Both;   
    this.Dynamic_Requirements = connectionnewgeneration3_68kwengstorage.Dynamic_Requirements;
    this.Dynamic_Requirements_Details = connectionnewgeneration3_68kwengstorage.Dynamic_Requirements_Details;
 
}
ConnectionNewGeneration3_68kwEngStorage.create = (newconnectionnewgeneration3_68kwengstorage)=>{
    return new Promise((resolve , reject)=>{
        delete newconnectionnewgeneration3_68kwengstorage.Id;
        let sql = "insert into ce2_content.Connection_New_Generation_3_68kw_Eng_Storage set ?";
        connectionDB.query(sql , newconnectionnewgeneration3_68kwengstorage ,(error , result)=>{
            if (error) {
                return reject(error);
            } else {
               return resolve(result); 
            }
        });
    });
}
ConnectionNewGeneration3_68kwEngStorage.update = (newconnectionnewgeneration3_68kwengstorage,id,gentype_radiobutton) =>{
    delete newconnectionnewgeneration3_68kwengstorage.OperatingFile1
    delete newconnectionnewgeneration3_68kwengstorage.OperatingFile2
    delete newconnectionnewgeneration3_68kwengstorage.SupportingFile1
    delete newconnectionnewgeneration3_68kwengstorage.SupportingFile2
    console.log(newconnectionnewgeneration3_68kwengstorage);
    return new Promise((resolve,reject)=>{
    let sql = "update ce2_content.Connection_New_Generation_3_68kw_Eng_Storage set ? where Connection_Id=?";
    connectionDB.query(sql,[newconnectionnewgeneration3_68kwengstorage,id],(error,result)=>{
        if(error){
            return reject(error);
        }
        return resolve(result);
    });
    });
}
ConnectionNewGeneration3_68kwEngStorage.findbyid =(con_id, rdb)=>{
    return new Promise((resolve , reject)=>{
        let sql ="select * from ce2_content.Connection_New_Generation_3_68kw_Eng_Storage where Connection_Id = ? and Generator_Radio_Button = ?";
        connectionDB.query(sql , [con_id ,rdb], (err ,result)=>{
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        });
    });
};
ConnectionNewGeneration3_68kwEngStorage.remove = (con_id,gen_type_rb)=>{
    return new Promise((resolve,reject)=>{
        let sql = "delete from ce2_content.Connection_New_Generation_3_68kw_Eng_Storage where Connection_Id = ? and Generator_Radio_Button = ?";
        connectionDB.query(sql,[con_id,gen_type_rb],(error,result)=>{
            if(error){
                return reject(error);
            }
            return resolve(result);
        });
        });
}
export default ConnectionNewGeneration3_68kwEngStorage;
