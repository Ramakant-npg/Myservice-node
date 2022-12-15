import connectionDB from "../configuration/ce2_contentConfig.js";
let ConnectionYourConnectionDate= (conectionyourconnectiondate)=>{
    this.Connection_Id =  conectionyourconnectiondate.Connection_Id;
    this.Ideal_Connection_Date =  conectionyourconnectiondate.Ideal_Connection_Date;
    this.Expected_Connection_Date =  conectionyourconnectiondate.Expected_Connection_Date;
}
ConnectionYourConnectionDate.findbyId=(newconectionyourconnectiondate)=>{
    return new Promise((resolve , reject)=>{
        let sql ="select * from ce2_content.Connection_Your_Connection_Date where Connection_Id = ?";
        connectionDB.query(sql , newconectionyourconnectiondate, (err ,result)=>{
        if(err){
            reject(err);
        }else{
            resolve(result);
        }
    });
}); 
};
ConnectionYourConnectionDate.create = (newconectionyourconnectiondate)=>{
    return new Promise((resolve , reject)=>{
    let sql = "insert into ce2_content.Connection_Your_Connection_Date set ?";
    connectionDB.query(sql ,newconectionyourconnectiondate , (error , result)=>{
        if (error) {
            return reject(error);
        } else {
           return resolve(result.insertId); 
        }
    });
});
};
ConnectionYourConnectionDate.update = (newconectionyourconnectiondate , id)=>{
    return new Promise((resolve , reject)=>{
        let sql =" update ce2_content.Connection_Your_Connection_Date set ? where Connection_Id = ?";
        connectionDB.query(sql ,[newconectionyourconnectiondate ,id], (error , result)=>{
            if (error) {
                return reject(error);
            } else {
               return resolve(result); 
            }
        });
    });
};
    export default ConnectionYourConnectionDate;
