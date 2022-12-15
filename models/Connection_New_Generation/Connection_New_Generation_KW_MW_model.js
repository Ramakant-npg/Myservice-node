import connectionDB from "../../configuration/ce2_contentConfig.js";

const ConnectionNewGenerationKWMW = (connectionnewgenerationKWMW) =>{
    this.Id = connectionnewgenerationKWMW.Id;
    this.Connection_Id = connectionnewgenerationKWMW.Connection_Id;
    this.Generator_Type_Id = connectionnewgenerationKWMW.Generator_Type_Id;
    this.No_Generator_Sets = connectionnewgenerationKWMW.No_Generator_Sets;
    this.Generator_Size = connectionnewgenerationKWMW.Generator_Size;
    this.No_Generating_Units_Sync = connectionnewgenerationKWMW.No_Generating_Units_Sync;
    this.Type_Prime_Movers_Sync = connectionnewgenerationKWMW.Type_Prime_Movers_Sync;
    this.Energy_Source_Availability_Sync = connectionnewgenerationKWMW.Energy_Source_Availability_Sync;
    this.Technology_Production_Type_Sync = connectionnewgenerationKWMW.Technology_Production_Type_Sync;
    this.No_Generating_Units_Fixed = connectionnewgenerationKWMW.No_Generating_Units_Fixed;
    this.Type_Prime_Movers_Fixed = connectionnewgenerationKWMW.Type_Prime_Movers_Fixed;
    this.Energy_Source_Availability_Fixed = connectionnewgenerationKWMW.Energy_Source_Availability_Fixed;
    this.Technology_Production_Type_Fixed = connectionnewgenerationKWMW.Technology_Production_Type_Fixed;
    this.No_Generating_Units_Double = connectionnewgenerationKWMW.No_Generating_Units_Double;
    this.Type_Prime_Movers_Double = connectionnewgenerationKWMW.Type_Prime_Movers_Double;
    this.Energy_Source_Availability_Double = connectionnewgenerationKWMW.Energy_Source_Availability_Double;
    this.Technology_Production_Type_Double = connectionnewgenerationKWMW.Technology_Production_Type_Double;
    this.No_Generating_Units_Series = connectionnewgenerationKWMW.No_Generating_Units_Series;
    this.Type_Prime_Movers_Series = connectionnewgenerationKWMW.Type_Prime_Movers_Series;
    this.Energy_Source_Availability_Series = connectionnewgenerationKWMW.Energy_Source_Availability_Series;
    this.Technology_Production_Type_Series = connectionnewgenerationKWMW.Technology_Production_Type_Series;
    this.No_Generating_Units_Elec = connectionnewgenerationKWMW.No_Generating_Units_Elec;
    this.Type_Prime_Movers_Elec = connectionnewgenerationKWMW.Type_Prime_Movers_Elec;
    this.Energy_Source_Availability_Elec = connectionnewgenerationKWMW.Energy_Source_Availability_Elec;
    this.Technology_Production_Type_Elec = connectionnewgenerationKWMW.Technology_Production_Type_Elec;
    this.Generating_Units_Other = connectionnewgenerationKWMW.Generating_Units_Other;
    this.No_Generating_Units_Other = connectionnewgenerationKWMW.No_Generating_Units_Other;
    this.Type_Prime_Movers_Other = connectionnewgenerationKWMW.Type_Prime_Movers_Other;
    this.Energy_Source_Availability_Other = connectionnewgenerationKWMW.Energy_Source_Availability_Other;
    this.Technology_Production_Type_Other = connectionnewgenerationKWMW.Technology_Production_Type_Other;
    this.Power_Generating_Modules_Name = connectionnewgenerationKWMW.Power_Generating_Modules_Name;
    this.Sub_Transient = connectionnewgenerationKWMW.Sub_Transient;
    this.Maximum_Fault_Level = connectionnewgenerationKWMW.Maximum_Fault_Level;
    this.Rated_Terminal_Voltage = connectionnewgenerationKWMW.Rated_Terminal_Current;
    this.Apparent_Power_Rating = connectionnewgenerationKWMW.Apparent_Power_Rating;
    this.Rated_Terminal_Current = connectionnewgenerationKWMW.Rated_Terminal_Current;
    this.Rated_Active_Power = connectionnewgenerationKWMW.Rated_Active_Power;
    this.Registered_Capacity = connectionnewgenerationKWMW.Registered_Capacity;
    this.Min_Active_Power_Exp = connectionnewgenerationKWMW.Min_Active_Power_Exp;
    this.Max_Active_Power_Exp = connectionnewgenerationKWMW.Max_Active_Power_Exp;
    this.Max_Reactive_Power_Exp = connectionnewgenerationKWMW.Max_Reactive_Power_Exp;
    this.Max_Reactive_Power_Imp = connectionnewgenerationKWMW.Max_Reactive_Power_Imp;
    this.Peak_Asymmetrical = connectionnewgenerationKWMW.Peak_Asymmetrical;
    this.RMS_Value_Initial_Symmetrical_0ms = connectionnewgenerationKWMW.RMS_Value_Initial_Symmetrical_0ms;
    this.RMS_Value_Initial_Symmetrical_100ms = connectionnewgenerationKWMW.RMS_Value_Initial_Symmetrical_100ms;
    this.Security_Required = connectionnewgenerationKWMW.Security_Required;
    this.Supply_Onsite_Premises = connectionnewgenerationKWMW.Supply_Onsite_Premises;
    this.Max_Active_Power_Imp = connectionnewgenerationKWMW.Max_Active_Power_Imp;
    this.Max_Reactive_Power_Imp_MVAr = connectionnewgenerationKWMW.Max_Reactive_Power_Imp_MVAr;
    this.Onsite_Operational_Diagrams = connectionnewgenerationKWMW.Onsite_Operational_Diagrams;
    this.Interface_Transformer = connectionnewgenerationKWMW.Interface_Transformer;
    this.Exp_MPAN = connectionnewgenerationKWMW.Exp_MPAN;
    this.Power_Generating_Interface = connectionnewgenerationKWMW.Power_Generating_Interface;
    this.Elec_Stor_Plant_Op_Max_Power_Swing  = connectionnewgenerationKWMW.Elec_Stor_Plant_Op_Max_Power_Swing;
    this.Impedance_Data = connectionnewgenerationKWMW.Impedance_Data;
    this.No_Generating_Transformer = connectionnewgenerationKWMW.No_Generating_Transformer;
    this.Rated_Apparent_Power = connectionnewgenerationKWMW.Rated_Apparent_Power;
    this.Positive_Sequence_Reactance = connectionnewgenerationKWMW.Positive_Sequence_Reactance;
    this.Generation_Technology_Type = connectionnewgenerationKWMW.Generation_Technology_Type


}
ConnectionNewGenerationKWMW.create = (newconnectionnewgenerationKWMW)=>{
    console.log(newconnectionnewgenerationKWMW);
    return new Promise((resolve , reject)=>{
        // console.log("step3")
        delete newconnectionnewgenerationKWMW.Id;
        // console.log(newconnectionnewgenerationKWMW);
        // delete newconnectionnewgenerationKWMW.Id;
        console.log(newconnectionnewgenerationKWMW);
        console.log("reached");
        let sql = "INSERT INTO ce2_content.Connection_New_Generation_KW_MW set ?";
        connectionDB.query(sql , newconnectionnewgenerationKWMW ,(error , result)=>{
            if (error) {
                return reject(error);
            } else {
               return resolve(result.insertId); 
            }
        });
    });
}
ConnectionNewGenerationKWMW.update = (newconnectionnewgenerationKWMWbyid)=>{
    return new Promise((resolve , reject)=>{
        let id = newconnectionnewgenerationKWMWbyid.Id;
        console.log(id);
        let sql = "update ce2_content.Connection_New_Generation_KW_MW set ? where Id =?"
        connectionDB.query(sql , [newconnectionnewgenerationKWMWbyid, id] ,(error , result)=>{
            if(error){
                return reject(error);
            }else{
                return resolve(result.affectedRows);
            }
        });
    });
}
ConnectionNewGenerationKWMW.remove = (newconnectionnewgenerationKWMWbyid,id)=>{
    return new Promise((resolve , reject)=>{
        let sql = "delete from ce2_content.Connection_New_Generation_KW_MW  where Id =?"
        connectionDB.query(sql , [newconnectionnewgenerationKWMWbyid, id] ,(error , result)=>{
            if(error){
                return reject(error);
            }else{
                return resolve(result);
            }
        });
    });
}
ConnectionNewGenerationKWMW.findbyConnectionId =(newconnectionnewgenerationKWMW)=>{
    
    return new Promise((resolve , reject)=>{
        let sql ="select * from ce2_content.Connection_New_Generation_KW_MW where  Connection_Id = ? ";
        connectionDB.query(sql , newconnectionnewgenerationKWMW, (error ,result)=>{
            if(error){
                reject(error);
            }else{
                resolve(result);
            }
        });
    });
};
ConnectionNewGenerationKWMW.reduce = (id)=>{
        return new Promise((resolve,reject)=>{
            let sql = "delete from ce2_content.Connection_New_Generation_KW_MW where Id = ?";
            connectionDB.query(sql,id,(error,result)=>{
                if(error){
                    return reject(error);
                }
                return resolve(result);
            });
            });
    }

export default ConnectionNewGenerationKWMW;