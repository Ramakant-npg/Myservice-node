import connectionDB from "../configuration/ce2_contentConfig.js";

const ConnectionProgression = (connectionprogression)=>{
    this.Progression_Status = connectionprogression.Progression_Status;
    this.Is_Active = connectionprogression.Is_Active;
    this.siteaddress = connectionprogression.siteaddress;
    this.yourconnection = connectionprogression.yourconnection;
    this.installerdetails = connectionprogression.installerdetails;
    this.existinggeneration = connectionprogression.existinggeneration;
    this.newgeneration = connectionprogression.newgeneration;
    this.siteplan = connectionprogression.siteplan;
    this.contactprefs = connectionprogression.contactprefs;
    this.additionalinfo = connectionprogression.additionalinfo;
    this.siteinfo = connectionprogression.siteinfo;
    this.connectiondate = connectionprogression.connectiondate;
    this.invoicedetails = connectionprogression.invoicedetails;
    this.submitted = connectionprogression.submitted;
    this.progression = connectionprogression.progression;
    this.summary = connectionprogression.summary;
    this.review = connectionprogression.review;
};


ConnectionProgression.update = async(newconnectionprogression)=>{
    return new Promise((resolve , reject)=>{
        let sql = "update ce2_content.Connection_Progression set ? where id = 1";
    connectionDB.query(sql ,newconnectionprogression ,(error , result)=>{
        if(error){
            return reject(error);
        }else{
            return resolve(result);
        }
    });
});
};
ConnectionProgression.findall = () => {
    return new Promise((resolve, reject) => {
        let sql = "select * from ce2_content.Connection_Progression";
        connectionDB.query(sql,(error, result) => {
            if (error) {
                return reject(error);
            } else {
                return resolve(result);
            }
        });
    });
};

export default ConnectionProgression;
