import connectionDB from "../configuration/ce2_contentConfig.js";
const uploadFileDetails = (uploadDetails) => {
    return new Promise((resolve, reject) => {
        const qry = 'insert into ce2_content.Common_Filebase set ?';
        connectionDB.query(qry, uploadDetails, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result.insertId);
            }
        });
    });
}
const getFileDetails = (filebaseId) => {
    filebaseId = (filebaseId !== null) ? filebaseId : '';
    return new Promise((resolve, reject) => {
        const qry = 'SELECT FileName FROM ce2_content.Common_Filebase WHERE Id = ?';
        connectionDB.query(qry, filebaseId, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve((result.length) ? result[0].FileName : "No file");
            }
        });
    });
}
export { uploadFileDetails, getFileDetails };