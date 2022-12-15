import connectionDB from "../configuration/ce2_contentConfig.js";

const ConnectionSitePlan = (connectionsiteplan)=>{
    //this.Id = connectionsiteplan.Id;
    this.Connection_Id = connectionsiteplan.Connection_Id;
    this.Map_Data_Token = connectionsiteplan.Map_Data_Token;
    this.Connection_Siteplan_Level = connectionsiteplan.Connection_Siteplan_Level;
    this.Connection_Mapdata_Sitetype = connectionsiteplan.Connection_Mapdata_Sitetype;
    this.Connection_Mapdata_Temporarytype = connectionsiteplan.Connection_Mapdata_Temporarytype;
    this.Connection_Mapdata_Sitedata = connectionsiteplan.Connection_Mapdata_Sitedata;
    this.Connection_Mapdata_Upload1 = connectionsiteplan.Connection_Mapdata_Upload1;
    this.Connection_Mapdata_Upload2 = connectionsiteplan.Connection_Mapdata_Upload2;
    this.Connection_Mapdata_Upload3 = connectionsiteplan.Connection_Mapdata_Upload3;
    this.Connection_Mapdata_Upload4 = connectionsiteplan.Connection_Mapdata_Upload4;
    this.Connection_Mapdata_Upload5 = connectionsiteplan.Connection_Mapdata_Upload5;
}

ConnectionSitePlan.findbyId =(Id)=>{ 
    return new Promise((resolve , reject)=>{
        let sql =`SELECT Connection_Id, Connection_Mapdata_Sitedata, FileName, Connection_Mapdata_Upload1, Connection_Mapdata_Upload2, Connection_Mapdata_Upload3, Connection_Mapdata_Upload4,Connection_Mapdata_Upload5, b.Id as filebaseId,a.Id as SiteId FROM ce2_content.Connection_Site_Plan AS a LEFT OUTER JOIN ce2_content.Common_Filebase AS b ON a.Connection_Mapdata_Upload1 = b.Id OR a.Connection_Mapdata_Upload2 = b.Id OR a.Connection_Mapdata_Upload3 = b.Id OR a.Connection_Mapdata_Upload4 = b.Id OR a.Connection_Mapdata_Upload5 = b.Id WHERE Connection_Id =?` ;
        connectionDB.query(sql , Id, (error ,result)=>{
            if(error){
                reject(error);
            }else{
                resolve(result);
            }
        });
    });
} 


ConnectionSitePlan.create = (connectionsiteplan)=>{
    return new Promise((resolve  , reject)=>{
       
        let sql = " insert into ce2_content.Connection_Site_Plan set ?";
        connectionDB.query(sql,connectionsiteplan ,(error , result)=>{
            if(error){
                return reject(error);
            }
            return resolve(result);
        });
        });
    }


    ConnectionSitePlan.update = (connectionsiteplan) => {
        return new Promise((resolve, reject) => {
            let Id = connectionsiteplan.Id; 
            console.log("connectionsiteplan",connectionsiteplan);
            let sql = "update ce2_content.Connection_Site_Plan set ? where Id =?"
            connectionDB.query(sql, [connectionsiteplan, Id], (error, result) => {
                if (error) {
                    return reject(error);
                } else {
                    return resolve(result);
                }
            });
        });
    };
    

export default ConnectionSitePlan;
