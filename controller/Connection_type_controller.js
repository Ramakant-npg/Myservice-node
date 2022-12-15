import ConnectionTypes from "../models/Connection_type_model.js";

const ConnectionTypesController = async (req, res) => {
    try {
        let newconnectiontypes = req.params.Connection_Type;

        if (!newconnectiontypes) {
            res.status(400).json({
                "message": "Bad request"
            });
        } else {
            const responce = await ConnectionTypes.findbyconnectiontypes(newconnectiontypes);
            if (Object.keys(responce).length === 0) {
                res.status(404).json({
                    "message": "Not Found"
                });
            } else {
                let row = new Object();
                let result = new Object();
                Object.keys(responce).forEach((key) => {
                    row = responce[key]
                    // console.log(arr);
                    // connections = row

                });
                let connections = new Array();
                let arr1 = Object.keys(row);
                let arr2 = Object.values(row);
                for (let i = 3; i < arr1.length; i++) {
                    let Obj = new Object();
                    Obj.Name = arr1[i];
                    Obj.Visible = arr2[i];
                    // console.log(Obj);
                    connections.push(Obj);
                }
                // console.log(connections);
                result.Id = row.Id;
                result.Connection_Types = row.Connection_Types;
                result.Connection_Description = row.Connection_Description;
                result.ConnectionsTemplate = connections;

                res.status(200).json(result);
            }
        }
    } catch (error) {
        console.log(error);
    }
}
const connectionTypesController = async (req, res) => {
    try {
        let newconnectiontypes = req.query.Connection_Type

        if (Object.keys(req.query).length == 0) {
            console.log
            const responce = await ConnectionTypes.find()
            if (responce.length == 0) {
                res.status(404).json({ 'message': 'Data not Found' })
            } else {
                res.status(200).json(responce);
            }
        } else {
            const responce = await ConnectionTypes.findbyconnectiontype(newconnectiontypes);
            if (Object.keys(responce).length === 0) {
                res.status(200).json({});
            } else {
                //let row = new Object();
                let result = new Object();
                // Object.keys(responce).forEach((key)=>{
                // let     row = responce[0]
                // console.log(arr);
                // connections = row

                // });
                let connections = new Array();
                let arr1 = Object.keys(responce[0]);
                let arr2 = Object.values(responce[0]);
                for (let i = 3; i < arr1.length; i++) {
                    let Obj = new Object();
                    Obj.Name = arr1[i];
                    Obj.Visible = arr2[i];
                    // console.log(Obj);
                    connections.push(Obj);
                }
                // console.log(connections);
                result.Id = responce[0].Id;
                result.Connection_Types = responce[0].Connection_Types;
                result.Connection_Description = responce[0].Connection_Description;
                result.ConnectionsTemplate = connections;

                res.status(200).json(result);
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ "message": "Internal Server Error" });
    }
}

export { ConnectionTypesController, connectionTypesController };