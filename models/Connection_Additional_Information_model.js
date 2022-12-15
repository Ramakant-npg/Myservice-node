import connectionDB from "../configuration/ce2_contentConfig.js";

const ConnectionAdditionalInformation = (connectionadditionaliformation) => {
    this.Id = connectionadditionaliformation.Id;
    this.Connection_Id = connectionadditionaliformation.Connection_Id;
    this.Additional_Info_Summary = connectionadditionaliformation.Additional_Info_Summary;
    this.Current_Upload_Additionalinfo = connectionadditionaliformation.Current_Upload_Additionalinfo;
}

ConnectionAdditionalInformation.save = (data) => {
    return new Promise((resolve, reject) => {
        let sql = " insert into ce2_content.Connection_Additional_Information set ?";
        connectionDB.query(sql, data, (error, result) => {
            if (error) {
                return reject(error);
            }
            return resolve(result);
        });
    });
}

ConnectionAdditionalInformation.update = (data, id) => {
    return new Promise((resolve, reject) => {
        let sql = "update ce2_content.Connection_Additional_Information set ? where Connection_Id = ?";
        connectionDB.query(sql, [data, id], (error, result) => {
            if (error) {
                return reject(error);
            }
            return resolve(result);
        });
    });
}
ConnectionAdditionalInformation.findbyConnectionId = (con_id) => {

    return new Promise((resolve, reject) => {
        let sql = "select * from ce2_content.Connection_Additional_Information where Connection_Id = ?";
        connectionDB.query(sql, con_id, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}
export default ConnectionAdditionalInformation;