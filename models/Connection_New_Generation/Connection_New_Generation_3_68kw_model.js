import connectionDB from "../../configuration/ce2_contentConfig.js";

const Connection_New_Generation_3_68kw = (connectionnewgeneration3_68kw) => {
    this.Connection_Id = connectionnewgeneration3_68kw.Connection_Id;
    this.No_Generator_Sets = connectionnewgeneration3_68kw.No_Generator_Sets;
    this.Generator_Size = connectionnewgeneration3_68kw.Generator_Size;
    this.Max_Export = connectionnewgeneration3_68kw.Max_Export;
    this.Rated_Current = connectionnewgeneration3_68kw.Rated_Current;
    this.Rated_Voltage = connectionnewgeneration3_68kw.Rated_Voltage;
    this.Single_Line_Diagram = connectionnewgeneration3_68kw.Single_Line_Diagram;
    this.Generator_Type_Id = connectionnewgeneration3_68kw.Generator_Type_Id
    this.Generation_Technology_Type = connectionnewgeneration3_68kw.Generation_Technology_Type;
}

Connection_New_Generation_3_68kw.create = (data) => {
    return new Promise((resolve, reject) => {
        delete data.Id;
        let sql = "insert into ce2_content.Connection_New_Generation_3_68kw set ?";
        connectionDB.query(sql, data, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result.insertId);
            }
        });
    });
}
Connection_New_Generation_3_68kw.remove = (con_id, gen_type_id) => {
    return new Promise((resolve, reject) => {
        let sql = "delete from ce2_content.Connection_New_Generation_3_68kw where Connection_Id = ? and Generator_Type_Id = ?";
        connectionDB.query(sql, [con_id, gen_type_id], (error, result) => {
            if (error) {
                reject(error);
            }
            resolve(result);
        });
    });
}

Connection_New_Generation_3_68kw.update = (data) => {
    return new Promise((resolve, reject) => {
        let id = data.Id;
        let sql = "update ce2_content.Connection_New_Generation_3_68kw set ? where Id =?"
        connectionDB.query(sql, [data, id], (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
};
Connection_New_Generation_3_68kw.findbyid = (con_id) => {
    return new Promise((resolve, reject) => {
        let sql = "select * from ce2_content.Connection_New_Generation_3_68kw where Connection_Id =?";
        connectionDB.query(sql, con_id, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }

        });
    });
};
Connection_New_Generation_3_68kw.reduce = (id) => {
    return new Promise((resolve, reject) => {
        let sql = "delete from ce2_content.Connection_New_Generation_3_68kw where Id = ?";
        connectionDB.query(sql, id, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }

        });
    });
}

export default Connection_New_Generation_3_68kw;