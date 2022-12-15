import Connection_New_Generation_3_68kw from "../models/Connection_New_Generation/Connection_New_Generation_3_68kw_model.js";
import ConnectionNewGenerationKWMW from "../models/Connection_New_Generation/Connection_New_Generation_KW_MW_model.js";
import ConnectionNewGeneration from "../models/Connection_New_Generation/Connection_New_Generation_model.js";
import ConnectionNewGeneration3_68kwEngStorage from '../models/Connection_New_Generation/Connection_New_Generation_3_68kw_Eng_Storage_model.js'
import ConnectionNewGeneration200kw from "../models/Connection_New_Generation/Connection_New_Generation_200kw_model.js";
import { getFileDetails } from '../models/commonFile_model.js'
const createConnection_New_Generation = async (req, res) => {
    try {
        let newConnectionnewgeneration = req.body;
        if (Object.keys(newConnectionnewgeneration).length === 0) {
            res.status(400).json({
                "error": "Bad request"
            })

        } else {
            let result = await ConnectionNewGeneration.create(newConnectionnewgeneration);
            if (result) {
                res.status(201).json({
                    "message": "Sucessfuully added"
                })

            } else {
                res.status(404).json({
                    "error": "failed"
                });
            }
        }
    } catch (error) {
        console.log(error);
    }
}

const updateConnection_New_Generation = async (req, res) => {
    try {
        let data = req.body;
        let con_id = req.params.id;
        console.log("step1")

        if (Object.keys(data).length === 0) {
            res.status(404).json({
                "error": "Not Found"
            }
            );
        }
        else {
            const ConnectionNewGenerationUpdate = await ConnectionNewGeneration.update(data, con_id);
            console.log("step2")
            if (ConnectionNewGenerationUpdate) {
                res.status(201).json({
                    "message": "successfully updated"
                });
            } else {
                res.status(400).json({
                    "error": "something went wrong"
                });
            }
        }
    } catch (error) {
        console.log(error);
    }
}

const getConnectionNewGeneration = async (req, res) => {
    try {
        let Id = req.params.id;

        if (!Id) {
            res.status(400).json({
                "message": "Bad request"
            });
        } else {
            const responce = await ConnectionNewGeneration.findbyId(Id);
            // if (Object.keys(responce).length === 0) {
            //     res.status(404).json({
            //         "message": "Not Found"
            //     });
            // } else {
                Object.keys(responce).forEach((key) => {
                    let row = responce[key]
                    res.status(200).json(row);
                });
            }
        // }
    } catch (error) {
        console.log(error);
    }
}
// Connection_New_Generation_3_68kws
const CreateConnection_New_Generation_3_68kws = async (req, res) => {
    try {
        let data = req.body;
        console.log(data);
        // console.log("Post");
        // console.log(data);
        // let data = new Object();
        // console.log(req.body);
        // let ConnectionNewGenerationKWMWSave =[];
        // Object.keys(req.body).forEach((key) => {
        //     let obj = req.body[key];
        //     Object.assign(data, obj);
        // });
        // let arr = new Array();
        if (Object.keys(data).length === 0) {
            res.status(404).json({
                "error": "Not Found"
            }
            );
        }
        else {
            let responce = true;

            // for (let index = 0; index < data.length; index++) {
            //     const responce = await Connection_New_Generation_3_68kw.create(data[index]);
            //     arr.push(responce);
            // }
            // if(arr.length === data.length) {
            //     res.status(201).json({
            //         "message" : "successfully added"
            //      });
            // }
            // else {
            //     res.status(400).json({
            //        "error" : "something went wrong"
            //     });
            // }  
            Object.keys(data).forEach(async (key) => {
                let Connection_Id = data[key].Connection_Id;
                console.log(Connection_Id);
                let pvPhotoVoltaic = data[key].pvPhotoVoltaicForm;
                let windForm = data[key].windForm;
                let hydroForm = data[key].hydroForm;
                let biomassForm = data[key].biomassForm;
                let CHPForm = data[key].CHPCombinedHeatandPowerForm;
                let engstorage = data[key].energyForm;
                let otherForm = data[key].otherForm;
                if (pvPhotoVoltaic) {
                    //console.log("hi");
                    const FormArray = pvPhotoVoltaic.installationFormArray;
                    for (let i = 0; i < FormArray.length; i++) {
                        FormArray[i].Connection_Id = Connection_Id;
                        FormArray[i].Generator_Type_Id = 1;
                        FormArray[i].No_Generator_Sets = pvPhotoVoltaic.No_Generator_Sets;
                        FormArray[i].Generator_Size = pvPhotoVoltaic.Generator_Size;
                        FormArray[i].Single_Line_Diagram = pvPhotoVoltaic.Single_Line_Diagram;
                        let result = await Connection_New_Generation_3_68kw.create(FormArray[i]);
                        if (result) {
                            console.log("Success for PhotoVoltaic form");
                        } else {
                            responce = false;
                            console.log("error in PhotoVoltaic form");
                        }
                    }
                } else {
                    console.log("pv empty");
                }

                if (windForm) {
                    //console.log("hi");
                    const FormArray = windForm.installationFormArray;
                    for (let i = 0; i < FormArray.length; i++) {
                        FormArray[i].Connection_Id = Connection_Id;
                        FormArray[i].Generator_Type_Id = 2;
                        FormArray[i].No_Generator_Sets = windForm.No_Generator_Sets;
                        FormArray[i].Generator_Size = windForm.Generator_Size;
                        FormArray[i].Single_Line_Diagram = windForm.Single_Line_Diagram;
                        let result = await Connection_New_Generation_3_68kw.create(FormArray[i]);
                        if (result) {
                            console.log("Success for Wind form");

                        } else {
                            responce = false;
                            console.log("error in Wind form");
                        }
                    }
                }
                else {
                    console.log("wind empty");
                }
                if (hydroForm) {
                    //console.log("hi");
                    const FormArray = hydroForm.installationFormArray;
                    for (let i = 0; i < FormArray.length; i++) {
                        FormArray[i].Connection_Id = Connection_Id;
                        FormArray[i].Generator_Type_Id = 3;
                        FormArray[i].No_Generator_Sets = hydroForm.No_Generator_Sets;
                        FormArray[i].Generator_Size = hydroForm.Generator_Size;
                        FormArray[i].Single_Line_Diagram = hydroForm.Single_Line_Diagram;
                        let result = await Connection_New_Generation_3_68kw.create(FormArray[i]);
                        if (result) {
                            console.log("Success for Hydro form");

                        } else {
                            responce = false;
                            console.log("error in Hydro form");
                        }

                    }
                }
                else {
                    console.log("hydro empty");
                }
                if (biomassForm) {
                    //console.log("hi");
                    const FormArray = biomassForm.installationFormArray;
                    for (let i = 0; i < FormArray.length; i++) {
                        FormArray[i].Connection_Id = Connection_Id;
                        FormArray[i].Generator_Type_Id = 4;
                        FormArray[i].No_Generator_Sets = biomassForm.No_Generator_Sets;
                        FormArray[i].Generator_Size = biomassForm.Generator_Size;
                        FormArray[i].Single_Line_Diagram = biomassForm.Single_Line_Diagram;
                        let result = await Connection_New_Generation_3_68kw.create(FormArray[i]);
                        if (result) {
                            console.log("Success for Biomass form");

                        } else {
                            responce = false;
                            console.log("error in Biomass form");
                        }

                    }
                }
                else {
                    console.log("Biomass empty");
                }
                if (CHPForm) {
                    //console.log("hi");
                    const FormArray = CHPForm.installationFormArray;
                    for (let i = 0; i < FormArray.length; i++) {
                        FormArray[i].Connection_Id = Connection_Id;
                        FormArray[i].Generator_Type_Id = 5;
                        FormArray[i].No_Generator_Sets = CHPForm.No_Generator_Sets;
                        FormArray[i].Generator_Size = CHPForm.Generator_Size;
                        FormArray[i].Single_Line_Diagram = CHPForm.Single_Line_Diagram;
                        let result = await Connection_New_Generation_3_68kw.create(FormArray[i]);
                        if (result) {
                            console.log("Success for CHP form");

                        } else {
                            responce = false;
                            console.log("error in CHP form");
                        }

                    }
                }
                else {
                    console.log("CHP empty");
                }
                if (engstorage) {
                    engstorage.Generator_Radio_Button = 2;
                    engstorage.Connection_Id = Connection_Id;
                    let result = await ConnectionNewGeneration3_68kwEngStorage.create(engstorage);
                    if (result) {
                        console.log("Success for EnergyStorage form");

                    } else {
                        responce = false;
                        console.log("error in EnergyStorage form");
                    }
                } else {
                    console.log("EnergyStorage empty");
                }
                if (otherForm) {
                    const FormArray = otherForm.installationFormArray;
                    for (let i = 0; i < FormArray.length; i++) {
                        FormArray[i].Connection_Id = Connection_Id;
                        FormArray[i].Generator_Type_Id = 7;
                        FormArray[i].No_Generator_Sets = otherForm.No_Generator_Sets;
                        FormArray[i].Generator_Size = otherForm.Generator_Size;
                        FormArray[i].Single_Line_Diagram = otherForm.Single_Line_Diagram;
                        let result = await Connection_New_Generation_3_68kw.create(FormArray[i]);
                        if (result) {
                            console.log("Success for other form");

                        } else {
                            responce = false;
                            console.log("error in other form");
                        }

                    }
                }
                else {
                    console.log("other empty");
                }
            });


            if (responce) {
                res.status(200).json({
                    "message": "Successfully added"
                })
            }
            else {
                res.status(401).json({
                    "message": "Something went wrong"
                })
            }

        }
    } catch (error) {
        console.log(error);
    }
}

const updateConnection_New_Generation_3_68kw = async (req, res) => {
    try {
        let newConnectionnewgeneration3_68kw = req.body[0];
        // console.log(newConnectionnewgeneration3_68kw);
        let id = req.params.id;
        if (Object.keys(newConnectionnewgeneration3_68kw).length === 0 || !req.params.id) {
            res.status(400).json({
                "error": "Bad request"
            });
        } else {
            let responcechecker = false;
            // Object.keys(newConnectionnewgeneration3_68kw).forEach(async (key) => {
            let pvPhotoVoltaic = newConnectionnewgeneration3_68kw.pvPhotoVoltaicForm;
            let windForm = newConnectionnewgeneration3_68kw.windForm;
            let hydroForm = newConnectionnewgeneration3_68kw.hydroForm;
            let biomassForm = newConnectionnewgeneration3_68kw.biomassForm;
            let CHPForm = newConnectionnewgeneration3_68kw.CHPCombinedHeatandPowerForm;
            let engstorage = newConnectionnewgeneration3_68kw.energyForm;
            let otherForm = newConnectionnewgeneration3_68kw.otherForm;
            // console.log(pvPhotoVoltaic);
            if (pvPhotoVoltaic) {
                const FormArray = pvPhotoVoltaic.installationFormArray;
                let checker = new Array();
                for (let i = 0; i < pvPhotoVoltaic.No_Generator_Sets; i++) {
                    FormArray[i].Connection_Id = id;
                    FormArray[i].Generator_Type_Id = 1;
                    FormArray[i].No_Generator_Sets = pvPhotoVoltaic.No_Generator_Sets;
                    FormArray[i].Generator_Size = pvPhotoVoltaic.Generator_Size;
                    FormArray[i].Single_Line_Diagram = pvPhotoVoltaic.Single_Line_Diagram;
                    if (FormArray[i].Id === null) {
                        console.log(FormArray[i]);
                        let result = await Connection_New_Generation_3_68kw.create(FormArray[i])
                        checker.push(result);
                    } else {
                        let result = await Connection_New_Generation_3_68kw.update(FormArray[i]);
                        checker.push(result);
                    }
                    if (checker.length === pvPhotoVoltaic.No_Generator_Sets) {
                        responcechecker = true
                        console.log("update for PhotoVoltaic form");
                    } else {
                        responcechecker = false;
                        console.log("updateerror in PhotoVoltaic form");
                    }
                }
            } else {
                let gentype_id = 1;
                let result = await Connection_New_Generation_3_68kw.remove(id, gentype_id);
                if (result) {
                    responcechecker = true
                    console.log("removed pvphotovoltaic form");
                }
            }

            if (windForm) {
                const FormArray = windForm.installationFormArray;
                let checker = new Array();
                for (let i = 0; i < windForm.No_Generator_Sets; i++) {
                    FormArray[i].Connection_Id = id;
                    FormArray[i].Generator_Type_Id = 2;
                    FormArray[i].No_Generator_Sets = windForm.No_Generator_Sets;
                    FormArray[i].Generator_Size = windForm.Generator_Size;
                    FormArray[i].Single_Line_Diagram = windForm.Single_Line_Diagram;
                    if (FormArray[i].Id === null) {
                        let result = await Connection_New_Generation_3_68kw.create(FormArray[i])
                        checker.push(result);
                    } else {
                        let result = await Connection_New_Generation_3_68kw.update(FormArray[i], id);
                        checker.push(result);
                    }
                    if (checker.length === windForm.No_Generator_Sets) {
                        responcechecker = true;
                        console.log("update for wind form");
                    } else {
                        responcechecker = false;
                        console.log("updateerror in wind form");
                    }
                }
            } else {
                let gentype_id = 2;
                let result = await Connection_New_Generation_3_68kw.remove(id, gentype_id);
                if (result) {
                    console.log("removed wind form");
                }
            }
            if (hydroForm) {
                const FormArray = hydroForm.installationFormArray;
                let checker = new Array();
                for (let i = 0; i < hydroForm.No_Generator_Sets; i++) {
                    FormArray[i].Connection_Id = id;
                    FormArray[i].Generator_Type_Id = 2;
                    FormArray[i].No_Generator_Sets = hydroForm.No_Generator_Sets;
                    FormArray[i].Generator_Size = hydroForm.Generator_Size;
                    FormArray[i].Single_Line_Diagram = hydroForm.Single_Line_Diagram;
                    if (FormArray[i].Id === null) {
                        let result = await Connection_New_Generation_3_68kw.create(FormArray[i])
                        checker.push(result);
                    } else {
                        let result = await Connection_New_Generation_3_68kw.update(FormArray[i], id);
                        checker.push(result);
                    }
                    if (checker.length === hydroForm.No_Generator_Sets) {
                        responcechecker = true;
                        console.log("update for hydro form");
                    } else {
                        responcechecker = false;
                        console.log("updateerror in hydro form");
                    }
                }
            } else {
                let gentype_id = 3;
                let result = await Connection_New_Generation_3_68kw.remove(id, gentype_id);
                if (result) {
                    responcechecker = true;
                    console.log("removed hydro form");
                }
            }
            if (biomassForm) {
                const FormArray = biomassForm.installationFormArray;
                let checker = new Array();
                for (let i = 0; i < biomassForm.No_Generator_Sets; i++) {
                    FormArray[i].Connection_Id = id;
                    FormArray[i].Generator_Type_Id = 2;
                    FormArray[i].No_Generator_Sets = biomassForm.No_Generator_Sets;
                    FormArray[i].Generator_Size = biomassForm.Generator_Size;
                    FormArray[i].Single_Line_Diagram = biomassForm.Single_Line_Diagram;
                    if (FormArray[i].Id === null) {
                        let result = await Connection_New_Generation_3_68kw.create(FormArray[i])
                        checker.push(result);
                    } else {
                        let result = await Connection_New_Generation_3_68kw.update(FormArray[i], id);
                        checker.push(result);
                    }
                    if (checker.length === biomassForm.No_Generator_Sets) {
                        responcechecker = true;
                        console.log("update for biomass form");
                    } else {
                        responcechecker = false;
                        console.log("updateerror in biomass form");
                    }
                }
            } else {
                let gentype_id = 4;
                let result = await Connection_New_Generation_3_68kw.remove(id, gentype_id);
                if (result) {
                    responcechecker = true;
                    console.log("removed biomass form");
                }
            }
            if (CHPForm) {
                let checker = new Array();
                const FormArray = CHPForm.installationFormArray;
                for (let i = 0; i < CHPForm.No_Generator_Sets; i++) {
                    FormArray[i].Connection_Id = id;
                    FormArray[i].Generator_Type_Id = 2;
                    FormArray[i].No_Generator_Sets = CHPForm.No_Generator_Sets;
                    FormArray[i].Generator_Size = CHPForm.Generator_Size;
                    FormArray[i].Single_Line_Diagram = CHPForm.Single_Line_Diagram;
                    if (FormArray[i].Id === null) {
                        let result = await Connection_New_Generation_3_68kw.create(FormArray[i])
                        checker.push(result);
                    } else {
                        let result = await Connection_New_Generation_3_68kw.update(FormArray[i], id);
                        checker.push(result);
                    }
                    if (checker.length === CHPForm.No_Generator_Sets) {
                        responcechecker = true;
                        console.log("update for CHP form");
                    } else {
                        responcechecker = false;
                        console.log("updateerror in CHP form");
                    }
                }
            } else {
                let gentype_id = 5;
                let result = await Connection_New_Generation_3_68kw.remove(id, gentype_id);
                if (result) {
                    responcechecker = true;
                    console.log("removed chp form");
                }

            }
            if (engstorage) {
                //engstorage.Generator_Radio_Button = 2;
                delete engstorage.OperatingFile1
                delete engstorage.OperatingFile2
                delete engstorage.SupportingFile1
                delete engstorage.SupportingFile2
                engstorage.Generator_Radio_Button = 2;
                engstorage.Connection_Id = id;
                let result = null;
                if (engstorage.Id === null) {
                    result = await ConnectionNewGeneration3_68kwEngStorage.create(engstorage);

                } else {
                    result = await ConnectionNewGeneration3_68kwEngStorage.update(engstorage, id);
                }


                if (result) {
                    responcechecker = true
                    console.log("update for EnergyStorage form");

                } else {
                    responcechecker = false;
                    console.log("updateerror in EnergyStorage form");
                }
            } else {
                let gentype_radiobutton = 2;
                let result = await ConnectionNewGeneration3_68kwEngStorage.remove(id, gentype_radiobutton);
                if (result) {
                    responcechecker = true;
                    console.log("removed energy storage");
                }
            }
            if (otherForm) {
                let checker = new Array();
                const FormArray = otherForm.installationFormArray;
                for (let i = 0; i < otherForm.No_Generator_Sets; i++) {
                    FormArray[i].Connection_Id = id;
                    FormArray[i].Generator_Type_Id = 2;
                    FormArray[i].No_Generator_Sets = otherForm.No_Generator_Sets;
                    FormArray[i].Generator_Size = otherForm.Generator_Size;
                    FormArray[i].Single_Line_Diagram = otherForm.Single_Line_Diagram;
                    if (FormArray[i].Id === null) {
                        let result = await Connection_New_Generation_3_68kw.create(FormArray[i])
                        checker.push(result);
                    } else {
                        let result = await Connection_New_Generation_3_68kw.update(FormArray[i], id);
                        checker.push(result);
                    }
                    if (checker.length === otherForm.No_Generator_Sets) {
                        responcechecker = true;
                        console.log("update for other form");
                    } else {
                        responcechecker = false;
                        console.log("updateerror in other form");
                    }
                }
            } else {
                let gentype_id = 5;
                let result = await Connection_New_Generation_3_68kw.remove(id, gentype_id);
                if (result) {
                    console.log("removed chp form");
                }

            }
            console.log(responcechecker);
            // console.log(responce);
            if (responcechecker) {
                res.status(201).json({
                    "message": "Sucessfuully updated"
                })

            } else {
                res.status(404).json({
                    "error": "Not Found"
                });
            }
        }

    } catch (error) {
        console.log(error);
    }
}



const getConnection_New_Generation_3_68kws = async (req, res) => {
    try {
        let Id = req.params.id;

        if (!Id) {
            res.status(400).json({
                "message": "Bad request"
            });
        } else {
            let ResponceArray = new Array;
            let connection_New_Generation_3_68kws = new Object();
            const responce = await Connection_New_Generation_3_68kw.findbyid(Id);
            const result = await ConnectionNewGeneration3_68kwEngStorage.findbyid(Id, 2);
            console.log(result);
            // if (responce.length === 0 || result.length === 0) {
            //     res.status(404).json({
            //         "message": "Not Record Found"
            //     });
            // }
            // else {
            let pvPhotoVoltaicform = new Object();
            let windform = new Object();
            let hydroform = new Object();
            let biomassform = new Object();
            let CHPform = new Object();
            let Otherform = new Object();
            let pvinstallationFormArray = new Array();
            let wininstallationFormArray = new Array();
            let hydinstallationFormArray = new Array();
            let bioinstallationFormArray = new Array();
            let CHPinstallationFormArray = new Array();
            let otherinstallationFormArray = new Array();
            for (var key = 0; key < responce.length; key++) {
                // Object.keys(responce).forEach(async (key) => {
                let row = responce[key]
                if (row.Generator_Type_Id == 1) {
                    let pvPhotoVoltaic = new Object();
                    pvPhotoVoltaic.Id = row.Id;
                    pvPhotoVoltaic.Max_Export = row.Max_Export;
                    pvPhotoVoltaic.Rated_Current = row.Rated_Current;
                    pvPhotoVoltaic.Rated_Voltage = row.Rated_Voltage;
                    pvinstallationFormArray.push(pvPhotoVoltaic);
                    pvPhotoVoltaicform.Generator_Size = row.Generator_Size;
                    pvPhotoVoltaicform.No_Generator_Sets = row.No_Generator_Sets;
                    pvPhotoVoltaicform.installationFormArray = pvinstallationFormArray;
                    pvPhotoVoltaicform.Single_Line_Diagram = row.Single_Line_Diagram;
                    pvPhotoVoltaicform.File_Name = await getFileDetails(row.Single_Line_Diagram);
                    connection_New_Generation_3_68kws.pvPhotoVoltaicForm = pvPhotoVoltaicform;

                } else if (row.Generator_Type_Id == 2) {

                    let windForm = new Object();
                    windForm.Id = row.Id;
                    windForm.Max_Export = row.Max_Export;
                    windForm.Rated_Current = row.Rated_Current;
                    windForm.Rated_Voltage = row.Rated_Voltage;
                    wininstallationFormArray.push(windForm);
                    // windform.Connection_Id = req.params.id;
                    windform.Generator_Size = row.Generator_Size;
                    windform.No_Generator_Sets = row.No_Generator_Sets;
                    windform.installationFormArray = wininstallationFormArray;
                    windform.Single_Line_Diagram = row.Single_Line_Diagram;
                    windform.File_Name = await getFileDetails(row.Single_Line_Diagram);
                    // windform.Generator_Type_Id = row.Generator_Type_Id;
                    // windform.Generation_Technology_Type = row.Generation_Technology_Type;
                    connection_New_Generation_3_68kws.windForm = windform;
                } else if (row.Generator_Type_Id == 3) {
                    let hydroForm = new Object();
                    hydroForm.Id = row.Id;
                    hydroForm.Max_Export = row.Max_Export;
                    hydroForm.Rated_Current = row.Rated_Current;
                    hydroForm.Rated_Voltage = row.Rated_Voltage;
                    hydinstallationFormArray.push(hydroForm);
                    // hydroform.Connection_Id = req.params.id;
                    hydroform.Generator_Size = row.Generator_Size;
                    hydroform.No_Generator_Sets = row.No_Generator_Sets;
                    hydroform.installationFormArray = hydinstallationFormArray;
                    hydroform.Single_Line_Diagram = row.Single_Line_Diagram;
                    hydroform.File_Name = await getFileDetails(row.Single_Line_Diagram);
                    // hydroform.Generator_Type_Id = row.Generator_Type_Id;
                    // hydroform.Generation_Technology_Type = row.Generation_Technology_Type;
                    connection_New_Generation_3_68kws.hydroForm = hydroform;
                    console.log(hydroForm);
                } else if (row.Generator_Type_Id == 4) {
                    let biomassForm = new Object();
                    biomassForm.Id = row.Id;
                    biomassForm.Max_Export = row.Max_Export;
                    biomassForm.Rated_Current = row.Rated_Current;
                    biomassForm.Rated_Voltage = row.Rated_Voltage;
                    bioinstallationFormArray.push(biomassForm);
                    // biomassform.Connection_Id = req.params.id;
                    biomassform.Generator_Size = row.Generator_Size;
                    biomassform.No_Generator_Sets = row.No_Generator_Sets;
                    biomassform.installationFormArray = bioinstallationFormArray;
                    biomassform.Single_Line_Diagram = row.Single_Line_Diagram;
                    biomassform.File_Name = await getFileDetails(row.Single_Line_Diagram);
                    // biomassform.Generator_Type_Id = row.Generator_Type_Id;
                    // biomassForm.Generation_Technology_Type = row.Generation_Technology_Type;

                    connection_New_Generation_3_68kws.biomassForm = biomassform;
                } else if (row.Generator_Type_Id == 5) {
                    let CHPForm = new Object();
                    CHPForm.Id = row.Id;
                    CHPForm.Max_Export = row.Max_Export;
                    CHPForm.Rated_Current = row.Rated_Current;
                    CHPForm.Rated_Voltage = row.Rated_Voltage;

                    CHPinstallationFormArray.push(CHPForm);
                    // CHPform.Connection_Id = req.params.id;
                    CHPform.Generator_Size = row.Generator_Size;
                    CHPform.No_Generator_Sets = row.No_Generator_Sets;
                    CHPform.installationFormArray = CHPinstallationFormArray;
                    CHPform.Single_Line_Diagram = row.Single_Line_Diagram;
                    CHPform.File_Name = await getFileDetails(row.Single_Line_Diagram);

                    // CHPform.Generator_Type_Id = row.Generator_Type_Id;
                    // CHPform.Generation_Technology_Type = row.Generation_Technology_Type;

                    connection_New_Generation_3_68kws.CHPCombinedHeatandPowerForm = CHPform;
                }
                else if (row.Generator_Type_Id == 7) {
                    let OtherForm = new Object();
                    OtherForm.Id = row.Id;
                    OtherForm.Max_Export = row.Max_Export;
                    OtherForm.Rated_Current = row.Rated_Current;
                    OtherForm.Rated_Voltage = row.Rated_Voltage;
                    otherinstallationFormArray.push(OtherForm);
                    // Otherform.Connection_Id = req.params.id;
                    Otherform.Generator_Size = row.Generator_Size;
                    Otherform.No_Generator_Sets = row.No_Generator_Sets;
                    Otherform.installationFormArray = otherinstallationFormArray;
                    Otherform.Single_Line_Diagram = row.Single_Line_Diagram;
                    Otherform.File_Name = await getFileDetails(row.Single_Line_Diagram);
                    // Otherform.Generator_Type_Id = row.Generator_Type_Id;
                    OtherForm.Generation_Technology_Type = row.Generation_Technology_Type;

                    connection_New_Generation_3_68kws.otherForm = Otherform;
                } else {
                    console.log("nothing in the table");
                }
                //   });
            }

            for (var key = 0; key < result.length; key++) {
                let row = result[key]
                console.log(row)
                if (row.Generator_Radio_Button == 2) {
                    row.OperatingFile1 = await getFileDetails(row.Operating_Attachment_1);
                    row.OperatingFile2 = await getFileDetails(row.Operating_Attachment_2);
                    row.SupportingFile1 = await getFileDetails(row.Supporting_Attachment_1);
                    row.SupportingFile2 = await getFileDetails(row.Supporting_Attachment_2);
                    let engstorage = Object.assign({}, row);
                    // energyForm.push(engstorage);
                    connection_New_Generation_3_68kws.energyForm = engstorage;
                }
            };
            // console.log(connection_New_Generation_3_68kws);
            ResponceArray.push(connection_New_Generation_3_68kws);
            if (Object.keys(connection_New_Generation_3_68kws).length !== 0) {
                res.status(200).json(ResponceArray);
            } else {
                res.status(200).json(ResponceArray);
            }
        }

    }
    // }
    catch (error) {
        console.log(error);
    }
}
const reduceConnection_New_Generation_3_68kws = async (req, res) => {
    try {
        let Id = req.params.id;

        if (!Id) {
            res.status(400).json({
                "message": "Bad request"
            });
        } else {
            const responce = await Connection_New_Generation_3_68kw.reduce(Id);
            if (responce) {
                res.status(200).json({
                    message: `Successfully deleted for Id ${Id}`
                });
            } else {
                res.status(404).json({
                    "message": `Id ${Id} Not Present`
                });
            }
        }
    } catch (error) {
        console.log(error);
    }
}
// ConnectionNewGenerationKWMW
const createConnectionNewGenerationKWMW = async (req, res) => {
    try {
        let newconnectionnewgenerationKWMW = new Object();
        // console.log(req.body);
        // let ConnectionNewGenerationKWMWSave =[];
        Object.keys(req.body).forEach((key) => {
            let obj = req.body[key];
            Object.assign(newconnectionnewgenerationKWMW, obj);
        });
        // console.log(newconnectionnewgenerationKWMW);
        if (Object.keys(newconnectionnewgenerationKWMW).length === 0) {
            res.status(400).json({
                "error": "Not found"
            })

        } else {
            let ConnectionNewGenerationKWMWSave = false;
            const pvPhotoVoltaicForm = newconnectionnewgenerationKWMW.pvPhotoVoltaicForm;
            const windForm = newconnectionnewgenerationKWMW.windForm;
            const hydroForm = newconnectionnewgenerationKWMW.hydroForm;
            const bioMassForm = newconnectionnewgenerationKWMW.bioMassForm;
            const CPHForm = newconnectionnewgenerationKWMW.CPHForm;
            const energyStorageForm = newconnectionnewgenerationKWMW.energyForm;
            // console.log(energyStorageForm);
            const otherForm = newconnectionnewgenerationKWMW.otherForm;
            if (pvPhotoVoltaicForm) {
                const checker = new Array();
                // console.log(pvPhotoVoltaicForm);
                // console.log("step1");
                const pvFormArray = pvPhotoVoltaicForm.installationFormArray
                delete pvPhotoVoltaicForm.installationFormArray;
                // console.log(pvPhotoVoltaicForm);
                for (let i = 0; i < pvFormArray.length; i++) {
                    console.log("step2");
                    let data = Object.assign({}, pvPhotoVoltaicForm, pvFormArray[i])
                    data.Connection_Id = newconnectionnewgenerationKWMW.Connection_Id;
                    // data.No_Generator_Sets = i + 1;
                    data.Generator_Type_Id = 1;
                    // console.log(data);
                    let responce = await ConnectionNewGenerationKWMW.create(data);
                    checker.push(responce);
                }
                if (checker.length === pvFormArray.length) {
                    ConnectionNewGenerationKWMWSave = true;
                } else {
                    ConnectionNewGenerationKWMWSave = false;
                }

            } else {
                console.log("pvPhotoVoltaicForm Empty");
            }
            if (windForm) {
                const checker = new Array();
                const windFormArray = windForm.installationFormArray
                delete windForm.installationFormArray;
                for (let i = 0; i < windFormArray.length; i++) {
                    let data = Object.assign({}, windForm, windFormArray[i])
                    data.Connection_Id = newconnectionnewgenerationKWMW.Connection_Id;
                    // data.No_Generator_Sets = i + 1;
                    data.Generator_Type_Id = 2;
                    const responce = await ConnectionNewGenerationKWMW.create(data);
                    checker.push(responce);
                }
                if (checker.length === windFormArray.length) {
                    ConnectionNewGenerationKWMWSave = true;
                } else {
                    ConnectionNewGenerationKWMWSave = false;
                }

            } else {
                console.log("windForm Empty");
            }
            if (hydroForm) {
                const checker = new Array();
                const hydroFormArray = hydroForm.installationFormArray
                delete hydroForm.installationFormArray;
                // console.log(pvPhotoVoltaicForm);
                for (let i = 0; i < hydroFormArray.length; i++) {
                    let data = Object.assign({}, hydroForm, hydroFormArray[i])
                    data.Connection_Id = newconnectionnewgenerationKWMW.Connection_Id;
                    // data.No_Generator_Sets = i + 1;
                    data.Generator_Type_Id = 3;
                    const responce = await ConnectionNewGenerationKWMW.create(data);
                    checker.push(responce);
                }
                if (checker.length === hydroFormArray.length) {
                    ConnectionNewGenerationKWMWSave = true;
                } else {
                    ConnectionNewGenerationKWMWSave = false;
                }

            } else {
                console.log("hydroForm Empty");
            }
            if (bioMassForm) {
                const checker = new Array();
                const bioMassFormFormArray = bioMassForm.installationFormArray
                delete bioMassForm.installationFormArray;
                // console.log(pvPhotoVoltaicForm);
                for (let i = 0; i < bioMassFormFormArray.length; i++) {
                    let data = Object.assign({}, bioMassForm, bioMassFormFormArray[i])
                    data.Connection_Id = newconnectionnewgenerationKWMW.Connection_Id;
                    // data.No_Generator_Sets = i + 1;
                    data.Generator_Type_Id = 4;
                    const responce = await ConnectionNewGenerationKWMW.create(data);
                    checker.push(responce);
                }
                if (checker.length === bioMassFormFormArray.length) {
                    ConnectionNewGenerationKWMWSave = true;
                } else {
                    ConnectionNewGenerationKWMWSave = false;
                }

            } else {
                console.log("bioMassFormForm Empty");
            }
            if (CPHForm) {
                const checker = new Array();
                const CPHFormArray = CPHForm.installationFormArray
                delete CPHForm.installationFormArray;
                // console.log(pvPhotoVoltaicForm);
                for (let i = 0; i < CPHFormArray.length; i++) {
                    let data = Object.assign({}, CPHForm, CPHFormArray[i])
                    data.Connection_Id = newconnectionnewgenerationKWMW.Connection_Id;
                    // data.No_Generator_Sets = i + 1;
                    data.Generator_Type_Id = 5;
                    const responce = await ConnectionNewGenerationKWMW.create(data);
                    checker.push(responce);
                }
                if (checker.length === CPHFormArray.length) {
                    ConnectionNewGenerationKWMWSave = true;
                } else {
                    ConnectionNewGenerationKWMWSave = false;
                }

            } else {
                console.log("CPHForm Empty");
            }
            if (energyStorageForm) {
                // const otherFormArray = otherForm.FormArray
                // delete otherForm.FormArray;
                // console.log(pvPhotoVoltaicForm);
                // for (let i = 0; i < otherFormArray.length; i++) {    
                let data = Object.assign({}, energyStorageForm)
                data.Connection_Id = newconnectionnewgenerationKWMW.Connection_Id;
                // data.No_Generator_Sets = i+1;
                data.Generator_Radio_Button = 5;
                const responce = await ConnectionNewGeneration3_68kwEngStorage.create(data);
                if (responce) {
                    ConnectionNewGenerationKWMWSave = true;
                } else {
                    ConnectionNewGenerationKWMWSave = false;
                }
                // }

            } else {
                console.log("energyStorageForm Empty");
            }
            if (otherForm) {
                const checker = new Array();
                const otherFormArray = otherForm.installationFormArray
                delete otherForm.installationFormArray;
                // console.log(pvPhotoVoltaicForm);
                for (let i = 0; i < otherFormArray.length; i++) {
                    let data = Object.assign({}, otherForm, otherFormArray[i])
                    data.Connection_Id = newconnectionnewgenerationKWMW.Connection_Id;
                    // data.No_Generator_Sets = i + 1;
                    data.Generator_Type_Id = 7;
                    let responce = await ConnectionNewGenerationKWMW.create(data);
                    checker.push(responce);
                }
                if (checker.length === otherFormArray.length) {
                    ConnectionNewGenerationKWMWSave = true;
                } else {
                    ConnectionNewGenerationKWMWSave = false;
                }

            } else {
                console.log("otherForm Empty");
            }

            // for (let index = 0; index < newconnectionnewgenerationKWMW.length; index++) {
            // const responce = await ConnectionNewGenerationKWMW.create(newconnectionnewgenerationKWMW[index]);
            // ConnectionNewGenerationKWMWSave.push(responce);
            // }
            console.log(ConnectionNewGenerationKWMWSave);
            if (ConnectionNewGenerationKWMWSave) {
                res.status(201).json({
                    "message": "Sucessfuully added"
                })

            } else {
                res.status(404).json({
                    "error": "something went wrong"
                });
            }
        }
    } catch (error) {
        console.log(error);
    }
}
const updateConnectionNewGenerationKWMW = async (req, res) => {
    try {
        // console.log("step1")

        // console.log(req.body);
        let id = req.params.id;
        // Object.keys(req.body).forEach((key)=>{
        let newconnectionnewgenerationKWMW = req.body[0];
        // console.log(newconnectionnewgenerationKWMW)
        // });

        if (!req.body && Object.keys(newconnectionnewgenerationKWMW).length == 0) {
            res.status(400).json({
                "error": "Bad Request"
            }
            );
        }
        else {
            let ConnectionNewGenerationKWMWSave = false;
            const pvPhotoVoltaicForm = newconnectionnewgenerationKWMW.pvPhotoVoltaicForm;
            // console.log(pvPhotoVoltaicForm);
            const windForm = newconnectionnewgenerationKWMW.windForm;
            const hydroForm = newconnectionnewgenerationKWMW.hydroForm;
           // console.log("newconnectionnewgenerationKWMW >>>>>>", JSON.stringify(newconnectionnewgenerationKWMW));
            const bioMassForm = newconnectionnewgenerationKWMW.bioMassForm;
           console.log(">>>>997 >",bioMassForm);
            const CPHForm = newconnectionnewgenerationKWMW.CPHForm;
            let energyStorageForm = newconnectionnewgenerationKWMW.energyForm;
            // console.log(energyStorageForm);
            const otherForm = newconnectionnewgenerationKWMW.otherForm;
            if (pvPhotoVoltaicForm) {
                let arr = new Array();
                const pvFormArray = pvPhotoVoltaicForm.installationFormArray
                delete pvPhotoVoltaicForm.installationFormArray;
                delete pvPhotoVoltaicForm.Operational_Diagrams_File;
                delete pvPhotoVoltaicForm.Power_Generating_File;
                // if(pvFormArray.length === 0){
                //     console.log(pvPhotoVoltaicForm);
                //     let data = Object.assign({}, pvPhotoVoltaicForm)
                //     console.log("data", data);
                //     if (data.Id == null){
                //         data.Connection_Id = id;
                //         console.log(data);
                //         data.Generator_Type_Id = 1;
                //         console.log("controller",data);
                //         let responce = await ConnectionNewGenerationKWMW.create(pvPhotoVoltaicForm);
                //         arr.push(responce)
                //     } else {
                //         let responce = await ConnectionNewGenerationKWMW.update(pvPhotoVoltaicForm);
                //         arr.push(responce)
                //     }
                // }
                // else
                {
                    for (let i = 0; i <= pvFormArray.length; i++) {
                        let data = Object.assign({}, pvPhotoVoltaicForm, pvFormArray[i])
                        // console.log(data);
                        if (data.Id == null) {
                            data.Connection_Id = id;
                            // console.log(data);
                            // data.No_Generator_Sets = i + 1;
                            data.Generator_Type_Id = 1;
                            let responce = await ConnectionNewGenerationKWMW.create(data);
                            arr.push(responce)
                        } else {
                            let responce = await ConnectionNewGenerationKWMW.update(data);
                            arr.push(responce)
                        }

                    }
                }
                if (arr.length === pvFormArray.length) {
                    ConnectionNewGenerationKWMWSave = true;
                } else {
                    ConnectionNewGenerationKWMWSave = false;
                }
            } else {
                console.log("#1048");
                const responce = await ConnectionNewGenerationKWMW.remove(id);
                if (responce) {
                    ConnectionNewGenerationKWMWSave = true;
                } else {
                    ConnectionNewGenerationKWMWSave = false;
                }
            }
            if (windForm) {
                let arr = new Array();
                const windFormArray = windForm.installationFormArray
                delete windForm.installationFormArray;
                delete windForm.Operational_Diagrams_File;
                delete windForm.Power_Generating_File;
                for (let i = 0; i <= windFormArray.length; i++) {
                    let data = Object.assign({}, windForm, windFormArray[i])
                    // data.Connection_Id = req.body.Connection_Id;
                    // data.No_Generator_Sets = i + 1;
                    // data.Generator_Type_Id = 1;
                    if (data.Id == null) {
                        data.Connection_Id = id;
                        // data.No_Generator_Sets = i + 1;
                        data.Generator_Type_Id = 2;
                        const responce = await ConnectionNewGenerationKWMW.create(data);
                        arr.push(responce);
                    } else {
                        const responce = await ConnectionNewGenerationKWMW.update(data);
                        arr.push(responce);
                    }
                }
                if (arr.length === windFormArray.length) {
                    ConnectionNewGenerationKWMWSave = true;
                } else {
                    ConnectionNewGenerationKWMWSave = false;
                }

            } else {
                const responce = await ConnectionNewGenerationKWMW.remove(id);
                if (responce) {
                    ConnectionNewGenerationKWMWSave = true;
                } else {
                    ConnectionNewGenerationKWMWSave = false;
                }
            }
            if (hydroForm) {
                console.log("1092");
                // console.log(hydroForm);
                let arr = new Array();
                const hydroFormArray = hydroForm.installationFormArray
                delete hydroForm.installationFormArray;
                delete hydroForm.Operational_Diagrams_File;
                delete hydroForm.Power_Generating_File;
                for (let i = 0; i <= hydroFormArray.length; i++) {
                    let data = Object.assign({}, hydroForm, hydroFormArray[i])
                    // data.Connection_Id = req.body.Connection_Id;
                    // data.No_Generator_Sets = i + 1;
                    // data.Generator_Type_Id = 1;
                    if (data.Id == null) {
                        data.Connection_Id = id;
                        // data.No_Generator_Sets = i + 1;
                        data.Generator_Type_Id = 3;
                        console.log(data);
                        const responce = await ConnectionNewGenerationKWMW.create(data);
                        arr.push(responce);
                    } else {
                        console.log(data);
                        const responce = await ConnectionNewGenerationKWMW.update(data);
                        arr.push(responce);

                    }
                }
                if (arr.length === hydroFormArray.length) {
                    ConnectionNewGenerationKWMWSave = true;
                } else {
                    ConnectionNewGenerationKWMWSave = false;
                }


            } else {
                const responce = await ConnectionNewGenerationKWMW.remove(id);
                if (responce) {
                    ConnectionNewGenerationKWMWSave = true;
                } else {
                    ConnectionNewGenerationKWMWSave = false;
                }
            }
            if (bioMassForm) {
                console.log("#1134 biomass"); 
                const bioMassFormArray = bioMassForm.installationFormArray
                delete bioMassForm.installationFormArray;
                delete bioMassForm.Operational_Diagrams_File;
                delete bioMassForm.Power_Generating_File;
                let arr = new Array();
                for (let i = 0; i <= bioMassFormArray.length; i++) {
                    let data = Object.assign({}, bioMassForm, bioMassFormArray[i])
                    // data.Connection_Id = req.body.Connection_Id;
                    // data.No_Generator_Sets = i + 1;
                    // data.Generator_Type_Id = 1;
                    if (data.Id == null) {
                        data.Connection_Id = id;
                        // data.No_Generator_Sets = i + 1;
                        data.Generator_Type_Id = 4;
                        const responce = await ConnectionNewGenerationKWMW.create(data);
                        arr.push(responce);
                    } else {
                        const responce = await ConnectionNewGenerationKWMW.update(data);
                        arr.push(responce);
                    }
                }
                if (arr.length === bioMassFormArray.length) {
                    ConnectionNewGenerationKWMWSave = true;
                } else {
                    ConnectionNewGenerationKWMWSave = false;
                }

            } else {
                const responce = await ConnectionNewGenerationKWMW.remove(id);
                if (responce) {
                    ConnectionNewGenerationKWMWSave = true;
                } else {
                    ConnectionNewGenerationKWMWSave = false;
                }
            }
            if (CPHForm) {
                let arr = new Array();
                const CPHFormArray = CPHForm.installationFormArray
                delete CPHForm.installationFormArray;
                delete CPHForm.Operational_Diagrams_File;
                delete CPHForm.Power_Generating_File;
                for (let i = 0; i <= CPHFormArray.length; i++) {
                    let data = Object.assign({}, CPHForm, CPHFormArray[i])
                    // data.Connection_Id = req.body.Connection_Id;
                    // data.No_Generator_Sets = i + 1;
                    // data.Generator_Type_Id = 1;
                    if (data.Id == null) {
                        data.Connection_Id = id;
                        // data.No_Generator_Sets = i + 1;
                        data.Generator_Type_Id = 5;
                        let responce = await ConnectionNewGenerationKWMW.create(data);
                        arr.push(responce);
                    } else {
                        let responce = await ConnectionNewGenerationKWMW.update(data);
                        arr.push(responce);
                    }
                }
                if (arr.length === CPHFormArray.length) {
                    ConnectionNewGenerationKWMWSave = true;
                } else {
                    ConnectionNewGenerationKWMWSave = false;
                }

            } else {
                const responce = await ConnectionNewGenerationKWMW.remove(id);
                if (responce) {
                    ConnectionNewGenerationKWMWSave = true;
                } else {
                    ConnectionNewGenerationKWMWSave = false;
                }
            }
            // console.log(Object.keys(energyStorageForm).length)
            if (energyStorageForm) {
                // const otherFormArray = otherForm.FormArray
                // delete otherForm.FormArray;
                // console.log(pvPhotoVoltaicForm);
                // for (let i = 0; i < otherFormArray.length; i++) {    
                let engstorage = Object.assign({}, energyStorageForm)
                console.log(engstorage);
                // data.No_Generator_Sets = i+1;
                engstorage.Generator_Radio_Button = 5;
                engstorage.Connection_Id = id;
                delete engstorage.OperatingFile1
                delete engstorage.OperatingFile2
                delete engstorage.SupportingFile1
                delete engstorage.SupportingFile2

                let result = null;
                if (engstorage.Id == null) {
                    result = await ConnectionNewGeneration3_68kwEngStorage.create(engstorage);

                } else {
                    result = await ConnectionNewGeneration3_68kwEngStorage.update(engstorage, id);
                }
                if (result) {
                    ConnectionNewGenerationKWMWSave = true;
                } else {
                    ConnectionNewGenerationKWMWSave = false;
                }
                // }

            } else {
                const responce = await ConnectionNewGenerationKWMW.remove(id);
                if (responce) {
                    ConnectionNewGenerationKWMWSave = true;
                } else {
                    ConnectionNewGenerationKWMWSave = false;
                }
            }
            if (otherForm) {
                // console.log(pvPhotoVoltaicForm);
                let arr = new Array();
                const otherFormArray = otherForm.installationFormArray
                delete otherForm.installationFormArray;
                delete otherForm.Operational_Diagrams_File;
                delete otherForm.Power_Generating_File;
                // console.log(pvPhotoVoltaicForm);
                for (let i = 0; i < otherFormArray.length; i++) {
                    let data = Object.assign({}, otherForm, otherFormArray[i])
                    // data.Connection_Id = req.body.Connection_Id;
                    // data.No_Generator_Sets = i + 1;
                    // data.Generator_Type_Id = 1;
                    if (data.Id == null) {
                        data.Connection_Id = id;
                        // data.No_Generator_Sets = i + 1;
                        data.Generator_Type_Id = 7;
                        let responce = await ConnectionNewGenerationKWMW.create(data);
                        arr.push(responce);
                    } else {
                        const responce = await ConnectionNewGenerationKWMW.update(data);
                        arr.push(responce);
                    }
                }
                if (arr.length === otherFormArray.length) {
                    ConnectionNewGenerationKWMWSave = true;
                } else {
                    ConnectionNewGenerationKWMWSave = false;
                }

            } else {
                const responce = await ConnectionNewGenerationKWMW.remove(id);
                if (responce) {
                    ConnectionNewGenerationKWMWSave = true;
                } else {
                    ConnectionNewGenerationKWMWSave = false;
                }
            }
            if (ConnectionNewGenerationKWMWSave) {
                res.status(201).json({
                    "message": "successfully updated"
                });
            } else {
                res.status(400).json({
                    "error": "something went wrong"
                });
            }
        }
    } catch (error) {
        console.log(error);
    }
}
// const getConnectionNewGenerationKWMW = async(req , res)=>{
//     try {
//         let Id = req.params.id;

//         if (!Id) {
//             res.status(400).json({
//                 "message" : "Bad request"
//             });
//         } else {
//             let result = null;
//             // if(pvPhotoVoltaicForm){
//             let responce = await ConnectionNewGenerationKWMW.findbyConnectionId(Id);
//             const responce2 = await ConnectionNewGeneration3_68kwEngStorage.findbyid(Id);
//             Object.keys(responce2).forEach((key)=>{
//                 result = responce2[key];
//             }); 
//             responce.push(result)

//             if(Object.keys(responce).length === 0){
//                 res.status(200).json({
//                     "message" : "Not Found"
//                 });
//             }else{
//                 //Object.keys(responce).forEach((key)=>{
//                     //let row = responce[key]
//                     res.status(200).json(responce);
//                 //});
//         } 
//     } 
//  }catch (error) {
//        console.log(error); 
//     }
// }
// 

const getConnectionNewGenerationKWMW = async (req, res) => {
    try {
        let Id = req.params.id;

        if (!Id) {
            res.status(400).json({
                "message": "Bad request"
            });
        } else {
            const connectionnewgenerationkwmw = new Object();
            const responce = await ConnectionNewGenerationKWMW.findbyConnectionId(Id);
            const result = await ConnectionNewGeneration3_68kwEngStorage.findbyid(Id, 5);
            console.log(result);
            if (Object.keys(responce).length === 0) {
                res.status(404).json({
                    "message": "Not Found"
                });
            } else {

                let pvphotovoltaicform = new Object();
                let pvinstallationFormArray = new Array();
                let windform = new Object();
                let windinstallationFormArray = new Array();
                let hydroform = new Object();
                let hydroinstallationFormArray = new Array();
                let biomassform = new Object();
                let biomassinstallationFormArray = new Array();
                let CHPform = new Object();
                let CHPinstallationFormArray = new Array();
                let engstorageform = new Array();
                let Otherform = new Object();
                let OtherinstallationFormArray = new Array();
                for (var key = 0; key < responce.length; key++) {
                    let row = responce[key];
                    if (row.Generator_Type_Id === 1) {
                        let pvPhotoVoltaic = new Object();
                        pvPhotoVoltaic.Id = row.Id;
                        pvPhotoVoltaic.No_Generating_Units_Sync = row.No_Generating_Units_Sync;
                        pvPhotoVoltaic.Type_Prime_Movers_Sync = row.Type_Prime_Movers_Sync;
                        pvPhotoVoltaic.Energy_Source_Availability_Sync = row.Energy_Source_Availability_Sync;
                        pvPhotoVoltaic.Technology_Production_Type_Sync = row.Technology_Production_Type_Sync;
                        pvPhotoVoltaic.No_Generating_Units_Fixed = row.No_Generating_Units_Fixed;
                        pvPhotoVoltaic.Type_Prime_Movers_Fixed = row.Type_Prime_Movers_Fixed;
                        pvPhotoVoltaic.Energy_Source_Availability_Fixed = row.Energy_Source_Availability_Fixed;
                        pvPhotoVoltaic.Technology_Production_Type_Fixed = row.Technology_Production_Type_Fixed;
                        pvPhotoVoltaic.No_Generating_Units_Double = row.No_Generating_Units_Double;
                        pvPhotoVoltaic.Type_Prime_Movers_Double = row.Type_Prime_Movers_Double;
                        pvPhotoVoltaic.Energy_Source_Availability_Double = row.Energy_Source_Availability_Double;
                        pvPhotoVoltaic.Technology_Production_Type_Double = row.Technology_Production_Type_Double;
                        pvPhotoVoltaic.No_Generating_Units_Series = row.No_Generating_Units_Series;
                        pvPhotoVoltaic.Type_Prime_Movers_Series = row.Type_Prime_Movers_Series;
                        pvPhotoVoltaic.Energy_Source_Availability_Series = row.Energy_Source_Availability_Series;
                        pvPhotoVoltaic.Technology_Production_Type_Series = row.Technology_Production_Type_Series;
                        pvPhotoVoltaic.No_Generating_Units_Elec = row.No_Generating_Units_Elec;
                        pvPhotoVoltaic.Type_Prime_Movers_Elec = row.Type_Prime_Movers_Elec;
                        pvPhotoVoltaic.Energy_Source_Availability_Elec = row.Energy_Source_Availability_Elec;
                        pvPhotoVoltaic.Technology_Production_Type_Elec = row.Technology_Production_Type_Elec;
                        pvPhotoVoltaic.Generating_Units_Other = row.Generating_Units_Other;
                        pvPhotoVoltaic.No_Generating_Units_Other = row.No_Generating_Units_Other;
                        pvPhotoVoltaic.Type_Prime_Movers_Other = row.Type_Prime_Movers_Other;
                        pvPhotoVoltaic.Energy_Source_Availability_Other = row.Energy_Source_Availability_Other;
                        pvPhotoVoltaic.Technology_Production_Type_Other = row.Technology_Production_Type_Other;
                        pvPhotoVoltaic.Power_Generating_Modules_Name = row.Power_Generating_Modules_Name;
                        pvPhotoVoltaic.Sub_Transient = row.Sub_Transient;
                        pvPhotoVoltaic.Maximum_Fault_Level = row.Maximum_Fault_Level;
                        pvPhotoVoltaic.Rated_Terminal_Voltage = row.Rated_Terminal_Voltage;
                        pvPhotoVoltaic.Apparent_Power_Rating = row.Apparent_Power_Rating;
                        pvPhotoVoltaic.Rated_Terminal_Current = row.Rated_Terminal_Current;
                        pvPhotoVoltaic.Rated_Active_Power = row.Rated_Active_Power;
                        pvPhotoVoltaic.Registered_Capacity = row.Registered_Capacity;
                        pvPhotoVoltaic.Min_Active_Power_Exp = row.Min_Active_Power_Exp;
                        pvPhotoVoltaic.Max_Active_Power_Exp = row.Max_Active_Power_Exp;
                        pvPhotoVoltaic.Max_Reactive_Power_Exp = row.Max_Reactive_Power_Exp;
                        pvPhotoVoltaic.Max_Reactive_Power_Imp = row.Max_Reactive_Power_Imp;
                        pvinstallationFormArray.push(pvPhotoVoltaic);
                        // pvphotovoltaicform.Connection_Id = Id;
                        pvphotovoltaicform.No_Generator_Sets = row.No_Generator_Sets;
                        pvphotovoltaicform.Generator_Size = row.Generator_Size;
                        pvphotovoltaicform.installationFormArray = pvinstallationFormArray;
                        pvphotovoltaicform.Peak_Asymmetrical = row.Peak_Asymmetrical;
                        pvphotovoltaicform.RMS_Value_Initial_Symmetrical_0ms = row.RMS_Value_Initial_Symmetrical_0ms;
                        pvphotovoltaicform.RMS_Value_Initial_Symmetrical_100ms = row.RMS_Value_Initial_Symmetrical_100ms;
                        pvphotovoltaicform.Security_Required = row.Security_Required;
                        pvphotovoltaicform.Supply_Onsite_Premises = row.Supply_Onsite_Premises;
                        pvphotovoltaicform.Max_Active_Power_Imp = row.Max_Active_Power_Imp;
                        pvphotovoltaicform.Max_Reactive_Power_Imp_MVAr = row.Max_Reactive_Power_Imp_MVAr;
                        pvphotovoltaicform.Onsite_Operational_Diagrams = row.Onsite_Operational_Diagrams;
                        pvphotovoltaicform.Operational_Diagrams_File = await getFileDetails(row.Onsite_Operational_Diagrams);
                        pvphotovoltaicform.Interface_Transformer = row.Interface_Transformer;
                        pvphotovoltaicform.Exp_MPAN = row.Exp_MPAN;
                        pvphotovoltaicform.Power_Generating_Interface = row.Power_Generating_Interface;
                        pvphotovoltaicform.Power_Generating_File = await getFileDetails(row.Power_Generating_Interface);
                        pvphotovoltaicform.Elec_Stor_Plant_Op_Max_Power_Swing = row.Elec_Stor_Plant_Op_Max_Power_Swing;
                        pvphotovoltaicform.Impedance_Data = row.Impedance_Data;
                        pvphotovoltaicform.No_Generating_Transformer = row.No_Generating_Transformer;
                        pvphotovoltaicform.Rated_Apparent_Power = row.Rated_Apparent_Power;
                        pvphotovoltaicform.Positive_Sequence_Reactance = row.Positive_Sequence_Reactance;
                        pvphotovoltaicform.Generator_Type_Id = row.Generator_Type_Id;
                        pvphotovoltaicform.Generation_Technology_Type = row.Generation_Technology_Type;

                        //pvphotovoltaicform.push(pvPhotoVoltaic);



                        connectionnewgenerationkwmw.pvPhotoVoltaicForm = pvphotovoltaicform;

                    } else if (row.Generator_Type_Id === 2) {
                        let windForm = new Object();
                        windForm.Id = row.Id;
                        windForm.No_Generating_Units_Sync = row.No_Generating_Units_Sync;
                        windForm.Type_Prime_Movers_Sync = row.Type_Prime_Movers_Sync;
                        windForm.Energy_Source_Availability_Sync = row.Energy_Source_Availability_Sync;
                        windForm.Technology_Production_Type_Sync = row.Technology_Production_Type_Sync;
                        windForm.No_Generating_Units_Fixed = row.No_Generating_Units_Fixed;
                        windForm.Type_Prime_Movers_Fixed = row.Type_Prime_Movers_Fixed;
                        windForm.Energy_Source_Availability_Fixed = row.Energy_Source_Availability_Fixed;
                        windForm.Technology_Production_Type_Fixed = row.Technology_Production_Type_Fixed;
                        windForm.No_Generating_Units_Double = row.No_Generating_Units_Double;
                        windForm.Type_Prime_Movers_Double = row.Type_Prime_Movers_Double;
                        windForm.Energy_Source_Availability_Double = row.Energy_Source_Availability_Double;
                        windForm.Technology_Production_Type_Double = row.Technology_Production_Type_Double;
                        windForm.No_Generating_Units_Series = row.No_Generating_Units_Series;
                        windForm.Type_Prime_Movers_Series = row.Type_Prime_Movers_Series;
                        windForm.Energy_Source_Availability_Series = row.Energy_Source_Availability_Series;
                        windForm.Technology_Production_Type_Series = row.Technology_Production_Type_Series;
                        windForm.No_Generating_Units_Elec = row.No_Generating_Units_Elec;
                        windForm.Type_Prime_Movers_Elec = row.Type_Prime_Movers_Elec;
                        windForm.Energy_Source_Availability_Elec = row.Energy_Source_Availability_Elec;
                        windForm.Technology_Production_Type_Elec = row.Technology_Production_Type_Elec;
                        windForm.Generating_Units_Other = row.Generating_Units_Other;
                        windForm.No_Generating_Units_Other = row.No_Generating_Units_Other;
                        windForm.Type_Prime_Movers_Other = row.Type_Prime_Movers_Other;
                        windForm.Energy_Source_Availability_Other = row.Energy_Source_Availability_Other;
                        windForm.Technology_Production_Type_Other = row.Technology_Production_Type_Other;
                        windForm.Power_Generating_Modules_Name = row.Power_Generating_Modules_Name;
                        windForm.Sub_Transient = row.Sub_Transient;
                        windForm.Maximum_Fault_Level = row.Maximum_Fault_Level;
                        windForm.Rated_Terminal_Voltage = row.Rated_Terminal_Voltage;
                        windForm.Apparent_Power_Rating = row.Apparent_Power_Rating;
                        windForm.Rated_Terminal_Current = row.Rated_Terminal_Current;
                        windForm.Rated_Active_Power = row.Rated_Active_Power;
                        windForm.Registered_Capacity = row.Registered_Capacity;
                        windForm.Min_Active_Power_Exp = row.Min_Active_Power_Exp;
                        windForm.Max_Active_Power_Exp = row.Max_Active_Power_Exp;
                        windForm.Max_Reactive_Power_Exp = row.Max_Reactive_Power_Exp;
                        windForm.Max_Reactive_Power_Imp = row.Max_Reactive_Power_Imp;
                        windinstallationFormArray.push(windForm);
                        // windform.Connection_Id = Id;
                        windform.No_Generator_Sets = row.No_Generator_Sets;
                        windform.Generator_Size = row.Generator_Size;
                        windform.installationFormArray = windinstallationFormArray;
                        windform.Peak_Asymmetrical = row.Peak_Asymmetrical;
                        windform.RMS_Value_Initial_Symmetrical_0ms = row.RMS_Value_Initial_Symmetrical_0ms;
                        windform.RMS_Value_Initial_Symmetrical_100ms = row.RMS_Value_Initial_Symmetrical_100ms;
                        windform.Security_Required = row.Security_Required;
                        windform.Supply_Onsite_Premises = row.Supply_Onsite_Premises;
                        windform.Max_Active_Power_Imp = row.Max_Active_Power_Imp;
                        windform.Max_Reactive_Power_Imp_MVAr = row.Max_Reactive_Power_Imp_MVAr;
                        windform.Onsite_Operational_Diagrams = row.Onsite_Operational_Diagrams;
                        windform.Operational_Diagrams_File = await getFileDetails(row.Onsite_Operational_Diagrams);
                        windform.Interface_Transformer = row.Interface_Transformer;
                        windform.Exp_MPAN = row.Exp_MPAN;
                        windform.Power_Generating_Interface = row.Power_Generating_Interface;
                        windform.Power_Generating_File = await getFileDetails(row.Power_Generating_Interface);
                        windform.Elec_Stor_Plant_Op_Max_Power_Swing = row.Elec_Stor_Plant_Op_Max_Power_Swing;
                        windform.Impedance_Data = row.Impedance_Data;
                        windform.No_Generating_Transformer = row.No_Generating_Transformer;
                        windform.Rated_Apparent_Power = row.Rated_Apparent_Power;
                        windform.Positive_Sequence_Reactance = row.Positive_Sequence_Reactance;
                        windform.Generator_Type_Id = row.Generator_Type_Id;
                        windform.Generation_Technology_Type = row.Generation_Technology_Type;

                        connectionnewgenerationkwmw.windForm = windform;
                    } else if (row.Generator_Type_Id === 3) {
                        let hydro = new Object();
                        hydro.Id = row.Id;
                        hydro.No_Generating_Units_Sync = row.No_Generating_Units_Sync;
                        hydro.Type_Prime_Movers_Sync = row.Type_Prime_Movers_Sync;
                        hydro.Energy_Source_Availability_Sync = row.Energy_Source_Availability_Sync;
                        hydro.Technology_Production_Type_Sync = row.Technology_Production_Type_Sync;
                        hydro.No_Generating_Units_Fixed = row.No_Generating_Units_Fixed;
                        hydro.Type_Prime_Movers_Fixed = row.Type_Prime_Movers_Fixed;
                        hydro.Energy_Source_Availability_Fixed = row.Energy_Source_Availability_Fixed;
                        hydro.Technology_Production_Type_Fixed = row.Technology_Production_Type_Fixed;
                        hydro.No_Generating_Units_Double = row.No_Generating_Units_Double;
                        hydro.Type_Prime_Movers_Double = row.Type_Prime_Movers_Double;
                        hydro.Energy_Source_Availability_Double = row.Energy_Source_Availability_Double;
                        hydro.Technology_Production_Type_Double = row.Technology_Production_Type_Double;
                        hydro.No_Generating_Units_Series = row.No_Generating_Units_Series;
                        hydro.Type_Prime_Movers_Series = row.Type_Prime_Movers_Series;
                        hydro.Energy_Source_Availability_Series = row.Energy_Source_Availability_Series;
                        hydro.Technology_Production_Type_Series = row.Technology_Production_Type_Series;
                        hydro.No_Generating_Units_Elec = row.No_Generating_Units_Elec;
                        hydro.Type_Prime_Movers_Elec = row.Type_Prime_Movers_Elec;
                        hydro.Energy_Source_Availability_Elec = row.Energy_Source_Availability_Elec;
                        hydro.Technology_Production_Type_Elec = row.Technology_Production_Type_Elec;
                        hydro.Generating_Units_Other = row.Generating_Units_Other;
                        hydro.No_Generating_Units_Other = row.No_Generating_Units_Other;
                        hydro.Type_Prime_Movers_Other = row.Type_Prime_Movers_Other;
                        hydro.Energy_Source_Availability_Other = row.Energy_Source_Availability_Other;
                        hydro.Technology_Production_Type_Other = row.Technology_Production_Type_Other;
                        hydro.Power_Generating_Modules_Name = row.Power_Generating_Modules_Name;
                        hydro.Sub_Transient = row.Sub_Transient;
                        hydro.Maximum_Fault_Level = row.Maximum_Fault_Level;
                        hydro.Rated_Terminal_Voltage = row.Rated_Terminal_Voltage;
                        hydro.Apparent_Power_Rating = row.Apparent_Power_Rating;
                        hydro.Rated_Terminal_Current = row.Rated_Terminal_Current;
                        hydro.Rated_Active_Power = row.Rated_Active_Power;
                        hydro.Registered_Capacity = row.Registered_Capacity;
                        hydro.Min_Active_Power_Exp = row.Min_Active_Power_Exp;
                        hydro.Max_Active_Power_Exp = row.Max_Active_Power_Exp;
                        hydro.Max_Reactive_Power_Exp = row.Max_Reactive_Power_Exp;
                        hydro.Max_Reactive_Power_Imp = row.Max_Reactive_Power_Imp;
                        hydroinstallationFormArray.push(hydro);
                        // hydroform.Connection_Id = Id;
                        hydroform.No_Generator_Sets = row.No_Generator_Sets;
                        hydroform.Generator_Size = row.Generator_Size;
                        hydroform.installationFormArray = hydroinstallationFormArray;
                        hydroform.Peak_Asymmetrical = row.Peak_Asymmetrical;
                        hydroform.RMS_Value_Initial_Symmetrical_0ms = row.RMS_Value_Initial_Symmetrical_0ms;
                        hydroform.RMS_Value_Initial_Symmetrical_100ms = row.RMS_Value_Initial_Symmetrical_100ms;
                        hydroform.Security_Required = row.Security_Required;
                        hydroform.Supply_Onsite_Premises = row.Supply_Onsite_Premises;
                        hydroform.Max_Active_Power_Imp = row.Max_Active_Power_Imp;
                        hydroform.Max_Reactive_Power_Imp_MVAr = row.Max_Reactive_Power_Imp_MVAr;
                        hydroform.Onsite_Operational_Diagrams = row.Onsite_Operational_Diagrams;
                        hydroform.Operational_Diagrams_File = await getFileDetails(row.Onsite_Operational_Diagrams);
                        hydroform.Interface_Transformer = row.Interface_Transformer;
                        hydroform.Exp_MPAN = row.Exp_MPAN;
                        hydroform.Power_Generating_Interface = row.Power_Generating_Interface;
                        hydroform.Power_Generating_File = await getFileDetails(row.Power_Generating_Interface);
                        hydroform.Elec_Stor_Plant_Op_Max_Power_Swing = row.Elec_Stor_Plant_Op_Max_Power_Swing;
                        hydroform.Impedance_Data = row.Impedance_Data;
                        hydroform.No_Generating_Transformer = row.No_Generating_Transformer;
                        hydroform.Rated_Apparent_Power = row.Rated_Apparent_Power;
                        hydroform.Positive_Sequence_Reactance = row.Positive_Sequence_Reactance;
                        hydroform.Generator_Type_Id = row.Generator_Type_Id;
                        hydroform.Generation_Technology_Type = row.Generation_Technology_Type;

                        connectionnewgenerationkwmw.hydroForm = hydroform;
                    } else if (row.Generator_Type_Id == 4) {
                        let biomass = new Object();
                        biomass.Id = row.Id;
                        biomass.No_Generating_Units_Sync = row.No_Generating_Units_Sync;
                        biomass.Type_Prime_Movers_Sync = row.Type_Prime_Movers_Sync;
                        biomass.Energy_Source_Availability_Sync = row.Energy_Source_Availability_Sync;
                        biomass.Technology_Production_Type_Sync = row.Technology_Production_Type_Sync;
                        biomass.No_Generating_Units_Fixed = row.No_Generating_Units_Fixed;
                        biomass.Type_Prime_Movers_Fixed = row.Type_Prime_Movers_Fixed;
                        biomass.Energy_Source_Availability_Fixed = row.Energy_Source_Availability_Fixed;
                        biomass.Technology_Production_Type_Fixed = row.Technology_Production_Type_Fixed;
                        biomass.No_Generating_Units_Double = row.No_Generating_Units_Double;
                        biomass.Type_Prime_Movers_Double = row.Type_Prime_Movers_Double;
                        biomass.Energy_Source_Availability_Double = row.Energy_Source_Availability_Double;
                        biomass.Technology_Production_Type_Double = row.Technology_Production_Type_Double;
                        biomass.No_Generating_Units_Series = row.No_Generating_Units_Series;
                        biomass.Type_Prime_Movers_Series = row.Type_Prime_Movers_Series;
                        biomass.Energy_Source_Availability_Series = row.Energy_Source_Availability_Series;
                        biomass.Technology_Production_Type_Series = row.Technology_Production_Type_Series;
                        biomass.No_Generating_Units_Elec = row.No_Generating_Units_Elec;
                        biomass.Type_Prime_Movers_Elec = row.Type_Prime_Movers_Elec;
                        biomass.Energy_Source_Availability_Elec = row.Energy_Source_Availability_Elec;
                        biomass.Technology_Production_Type_Elec = row.Technology_Production_Type_Elec;
                        biomass.Generating_Units_Other = row.Generating_Units_Other;
                        biomass.No_Generating_Units_Other = row.No_Generating_Units_Other;
                        biomass.Type_Prime_Movers_Other = row.Type_Prime_Movers_Other;
                        biomass.Energy_Source_Availability_Other = row.Energy_Source_Availability_Other;
                        biomass.Technology_Production_Type_Other = row.Technology_Production_Type_Other;
                        biomass.Power_Generating_Modules_Name = row.Power_Generating_Modules_Name;
                        biomass.Sub_Transient = row.Sub_Transient;
                        biomass.Maximum_Fault_Level = row.Maximum_Fault_Level;
                        biomass.Rated_Terminal_Voltage = row.Rated_Terminal_Voltage;
                        biomass.Apparent_Power_Rating = row.Apparent_Power_Rating;
                        biomass.Rated_Terminal_Current = row.Rated_Terminal_Current;
                        biomass.Rated_Active_Power = row.Rated_Active_Power;
                        biomass.Registered_Capacity = row.Registered_Capacity;
                        biomass.Min_Active_Power_Exp = row.Min_Active_Power_Exp;
                        biomass.Max_Active_Power_Exp = row.Max_Active_Power_Exp;
                        biomass.Max_Reactive_Power_Exp = row.Max_Reactive_Power_Exp;
                        biomass.Max_Reactive_Power_Imp = row.Max_Reactive_Power_Imp;
                
                        biomassinstallationFormArray.push(biomass);
                        // biomassform.Connection_Id = Id;
                        biomassform.No_Generator_Sets = row.No_Generator_Sets;
                        biomassform.Generator_Size = row.Generator_Size;
                        biomassform.installationFormArray = biomassinstallationFormArray;
                        biomassform.Peak_Asymmetrical = row.Peak_Asymmetrical;
                        biomassform.RMS_Value_Initial_Symmetrical_0ms = row.RMS_Value_Initial_Symmetrical_0ms;
                        biomassform.RMS_Value_Initial_Symmetrical_100ms = row.RMS_Value_Initial_Symmetrical_100ms;
                        biomassform.Security_Required = row.Security_Required;
                        biomassform.Supply_Onsite_Premises = row.Supply_Onsite_Premises;
                        biomassform.Max_Active_Power_Imp = row.Max_Active_Power_Imp;
                        biomassform.Max_Reactive_Power_Imp_MVAr = row.Max_Reactive_Power_Imp_MVAr;
                        biomassform.Onsite_Operational_Diagrams = row.Onsite_Operational_Diagrams;
                        biomassform.Operational_Diagrams_File = await getFileDetails(row.Onsite_Operational_Diagrams);
                        biomassform.Interface_Transformer = row.Interface_Transformer;
                        biomassform.Exp_MPAN = row.Exp_MPAN;
                        biomassform.Power_Generating_Interface = row.Power_Generating_Interface;
                        biomassform.Power_Generating_File = await getFileDetails(row.Power_Generating_Interface);
                        biomassform.Elec_Stor_Plant_Op_Max_Power_Swing = row.Elec_Stor_Plant_Op_Max_Power_Swing;
                        biomassform.Impedance_Data = row.Impedance_Data;
                        biomassform.No_Generating_Transformer = row.No_Generating_Transformer;
                        biomassform.Rated_Apparent_Power = row.Rated_Apparent_Power;
                        biomassform.Positive_Sequence_Reactance = row.Positive_Sequence_Reactance;
                        biomassform.Generator_Type_Id = row.Generator_Type_Id;
                        biomassform.Generation_Technology_Type = row.Generation_Technology_Type;
                        connectionnewgenerationkwmw.biomassForm = biomassform;
                        console.log(">>1640",connectionnewgenerationkwmw.biomassForm);
                    } else if (row.Generator_Type_Id === 5) {
                        let CHP = new Object();
                        CHP.Id = row.Id;
                        CHP.No_Generating_Units_Sync = row.No_Generating_Units_Sync;
                        CHP.Type_Prime_Movers_Sync = row.Type_Prime_Movers_Sync;
                        CHP.Energy_Source_Availability_Sync = row.Energy_Source_Availability_Sync;
                        CHP.Technology_Production_Type_Sync = row.Technology_Production_Type_Sync;
                        CHP.No_Generating_Units_Fixed = row.No_Generating_Units_Fixed;
                        CHP.Type_Prime_Movers_Fixed = row.Type_Prime_Movers_Fixed;
                        CHP.Energy_Source_Availability_Fixed = row.Energy_Source_Availability_Fixed;
                        CHP.Technology_Production_Type_Fixed = row.Technology_Production_Type_Fixed;
                        CHP.No_Generating_Units_Double = row.No_Generating_Units_Double;
                        CHP.Type_Prime_Movers_Double = row.Type_Prime_Movers_Double;
                        CHP.Energy_Source_Availability_Double = row.Energy_Source_Availability_Double;
                        CHP.Technology_Production_Type_Double = row.Technology_Production_Type_Double;
                        CHP.No_Generating_Units_Series = row.No_Generating_Units_Series;
                        CHP.Type_Prime_Movers_Series = row.Type_Prime_Movers_Series;
                        CHP.Energy_Source_Availability_Series = row.Energy_Source_Availability_Series;
                        CHP.Technology_Production_Type_Series = row.Technology_Production_Type_Series;
                        CHP.No_Generating_Units_Elec = row.No_Generating_Units_Elec;
                        CHP.Type_Prime_Movers_Elec = row.Type_Prime_Movers_Elec;
                        CHP.Energy_Source_Availability_Elec = row.Energy_Source_Availability_Elec;
                        CHP.Technology_Production_Type_Elec = row.Technology_Production_Type_Elec;
                        CHP.Generating_Units_Other = row.Generating_Units_Other;
                        CHP.No_Generating_Units_Other = row.No_Generating_Units_Other;
                        CHP.Type_Prime_Movers_Other = row.Type_Prime_Movers_Other;
                        CHP.Energy_Source_Availability_Other = row.Energy_Source_Availability_Other;
                        CHP.Technology_Production_Type_Other = row.Technology_Production_Type_Other;
                        CHP.Power_Generating_Modules_Name = row.Power_Generating_Modules_Name;
                        CHP.Sub_Transient = row.Sub_Transient;
                        CHP.Maximum_Fault_Level = row.Maximum_Fault_Level;
                        CHP.Rated_Terminal_Voltage = row.Rated_Terminal_Voltage;
                        CHP.Apparent_Power_Rating = row.Apparent_Power_Rating;
                        CHP.Rated_Terminal_Current = row.Rated_Terminal_Current;
                        CHP.Rated_Active_Power = row.Rated_Active_Power;
                        CHP.Registered_Capacity = row.Registered_Capacity;
                        CHP.Min_Active_Power_Exp = row.Min_Active_Power_Exp;
                        CHP.Max_Active_Power_Exp = row.Max_Active_Power_Exp;
                        CHP.Max_Reactive_Power_Exp = row.Max_Reactive_Power_Exp;
                        CHP.Max_Reactive_Power_Imp = row.Max_Reactive_Power_Imp;
                        CHPinstallationFormArray.push(CHP);
                        // CHPform.Connection_Id = Id;
                        CHPform.No_Generator_Sets = row.No_Generator_Sets;
                        CHPform.Generator_Size = row.Generator_Size;
                        CHPform.installationFormArray = CHPinstallationFormArray;
                        CHPform.Peak_Asymmetrical = row.Peak_Asymmetrical;
                        CHPform.RMS_Value_Initial_Symmetrical_0ms = row.RMS_Value_Initial_Symmetrical_0ms;
                        CHPform.RMS_Value_Initial_Symmetrical_100ms = row.RMS_Value_Initial_Symmetrical_100ms;
                        CHPform.Security_Required = row.Security_Required;
                        CHPform.Supply_Onsite_Premises = row.Supply_Onsite_Premises;
                        CHPform.Max_Active_Power_Imp = row.Max_Active_Power_Imp;
                        CHPform.Max_Reactive_Power_Imp_MVAr = row.Max_Reactive_Power_Imp_MVAr;
                        CHPform.Onsite_Operational_Diagrams = row.Onsite_Operational_Diagrams;
                        CHPform.Operational_Diagrams_File = await getFileDetails(row.Onsite_Operational_Diagrams);
                        CHPform.Interface_Transformer = row.Interface_Transformer;
                        CHPform.Exp_MPAN = row.Exp_MPAN;
                        CHPform.Power_Generating_Interface = row.Power_Generating_Interface;
                        CHPform.Power_Generating_File = await getFileDetails(row.Power_Generating_Interface);
                        CHPform.Elec_Stor_Plant_Op_Max_Power_Swing = row.Elec_Stor_Plant_Op_Max_Power_Swing;
                        CHPform.Impedance_Data = row.Impedance_Data;
                        CHPform.No_Generating_Transformer = row.No_Generating_Transformer;
                        CHPform.Rated_Apparent_Power = row.Rated_Apparent_Power;
                        CHPform.Positive_Sequence_Reactance = row.Positive_Sequence_Reactance;
                        CHPform.Generator_Type_Id = row.Generator_Type_Id;
                        CHPform.Generation_Technology_Type = row.Generation_Technology_Type;

                        connectionnewgenerationkwmw.CHPCombinedHeatandPowerForm = CHPform;
                    } else if (row.Generator_Type_Id === 7) {
                        //console.log("nothing in the table");
                        let other = new Object();
                        other.Id = row.Id;
                        other.No_Generating_Units_Sync = row.No_Generating_Units_Sync;
                        other.Type_Prime_Movers_Sync = row.Type_Prime_Movers_Sync;
                        other.Energy_Source_Availability_Sync = row.Energy_Source_Availability_Sync;
                        other.Technology_Production_Type_Sync = row.Technology_Production_Type_Sync;
                        other.No_Generating_Units_Fixed = row.No_Generating_Units_Fixed;
                        other.Type_Prime_Movers_Fixed = row.Type_Prime_Movers_Fixed;
                        other.Energy_Source_Availability_Fixed = row.Energy_Source_Availability_Fixed;
                        other.Technology_Production_Type_Fixed = row.Technology_Production_Type_Fixed;
                        other.No_Generating_Units_Double = row.No_Generating_Units_Double;
                        other.Type_Prime_Movers_Double = row.Type_Prime_Movers_Double;
                        other.Energy_Source_Availability_Double = row.Energy_Source_Availability_Double;
                        other.Technology_Production_Type_Double = row.Technology_Production_Type_Double;
                        other.No_Generating_Units_Series = row.No_Generating_Units_Series;
                        other.Type_Prime_Movers_Series = row.Type_Prime_Movers_Series;
                        other.Energy_Source_Availability_Series = row.Energy_Source_Availability_Series;
                        other.Technology_Production_Type_Series = row.Technology_Production_Type_Series;
                        other.No_Generating_Units_Elec = row.No_Generating_Units_Elec;
                        other.Type_Prime_Movers_Elec = row.Type_Prime_Movers_Elec;
                        other.Energy_Source_Availability_Elec = row.Energy_Source_Availability_Elec;
                        other.Technology_Production_Type_Elec = row.Technology_Production_Type_Elec;
                        other.Generating_Units_Other = row.Generating_Units_Other;
                        other.No_Generating_Units_Other = row.No_Generating_Units_Other;
                        other.Type_Prime_Movers_Other = row.Type_Prime_Movers_Other;
                        other.Energy_Source_Availability_Other = row.Energy_Source_Availability_Other;
                        other.Technology_Production_Type_Other = row.Technology_Production_Type_Other;
                        other.Power_Generating_Modules_Name = row.Power_Generating_Modules_Name;
                        other.Sub_Transient = row.Sub_Transient;
                        other.Maximum_Fault_Level = row.Maximum_Fault_Level;
                        other.Rated_Terminal_Voltage = row.Rated_Terminal_Voltage;
                        other.Apparent_Power_Rating = row.Apparent_Power_Rating;
                        other.Rated_Terminal_Current = row.Rated_Terminal_Current;
                        other.Rated_Active_Power = row.Rated_Active_Power;
                        other.Registered_Capacity = row.Registered_Capacity;
                        other.Min_Active_Power_Exp = row.Min_Active_Power_Exp;
                        other.Max_Active_Power_Exp = row.Max_Active_Power_Exp;
                        other.Max_Reactive_Power_Exp = row.Max_Reactive_Power_Exp;
                        other.Max_Reactive_Power_Imp = row.Max_Reactive_Power_Imp;
                        OtherinstallationFormArray.push(other);
                        // other.Connection_Id = Id;
                        Otherform.No_Generator_Sets = row.No_Generator_Sets;
                        Otherform.Generator_Size = row.Generator_Size;
                        Otherform.installationFormArray = OtherinstallationFormArray;
                        Otherform.Peak_Asymmetrical = row.Peak_Asymmetrical;
                        Otherform.RMS_Value_Initial_Symmetrical_0ms = row.RMS_Value_Initial_Symmetrical_0ms;
                        Otherform.RMS_Value_Initial_Symmetrical_100ms = row.RMS_Value_Initial_Symmetrical_100ms;
                        Otherform.Security_Required = row.Security_Required;
                        Otherform.Supply_Onsite_Premises = row.Supply_Onsite_Premises;
                        Otherform.Max_Active_Power_Imp = row.Max_Active_Power_Imp;
                        Otherform.Max_Reactive_Power_Imp_MVAr = row.Max_Reactive_Power_Imp_MVAr;
                        Otherform.Onsite_Operational_Diagrams = row.Onsite_Operational_Diagrams;
                        Otherform.Operational_Diagrams_File = await getFileDetails(row.Onsite_Operational_Diagrams);
                        Otherform.Interface_Transformer = row.Interface_Transformer;
                        Otherform.Exp_MPAN = row.Exp_MPAN;
                        Otherform.Power_Generating_Interface = row.Power_Generating_Interface;
                        Otherform.Power_Generating_File = await getFileDetails(row.Power_Generating_Interface);
                        Otherform.Elec_Stor_Plant_Op_Max_Power_Swing = row.Elec_Stor_Plant_Op_Max_Power_Swing;
                        Otherform.Impedance_Data = row.Impedance_Data;
                        Otherform.No_Generating_Transformer = row.No_Generating_Transformer;
                        Otherform.Rated_Apparent_Power = row.Rated_Apparent_Power;
                        Otherform.Positive_Sequence_Reactance = row.Positive_Sequence_Reactance;
                        Otherform.Generator_Type_Id = row.Generator_Type_Id;
                        Otherform.Generation_Technology_Type = row.Generation_Technology_Type;

                        connectionnewgenerationkwmw.otherForm = Otherform;
                    } else {
                        console.log("nothing");
                    }
                };
                if (result.length > 0) {
                    for (var key = 0; key < result.length; key++) {
                        let row = result[key]
                        console.log(row);
                        if (row.Generator_Radio_Button == 5) {
                            row.OperatingFile1 = await getFileDetails(row.Operating_Attachment_1);
                            row.OperatingFile2 = await getFileDetails(row.Operating_Attachment_2);
                            row.SupportingFile1 = await getFileDetails(row.Supporting_Attachment_1);
                            row.SupportingFile2 = await getFileDetails(row.Supporting_Attachment_2);
                            delete row.Id;
                            // let engstorage = new Object();
                            // engstorage = row;
                            // engstorageform.push(row);
                            connectionnewgenerationkwmw.energyForm = row;
                        }
                    }
                }
            }
            console.log(connectionnewgenerationkwmw)
            let ResponceArray = new Array();
            ResponceArray.push(connectionnewgenerationkwmw);
            if (ResponceArray.length == 0) {
                responce.status(404).json(ResponceArray);
            } else {
                res.status(200).json(ResponceArray);
            }

        }
    } catch (error) {
        console.log(error);
    }
}

const reduceConnection_New_Generation_KW_MW = async (req, res) => {
    try {
        let Id = req.params.id;

        if (!Id) {
            res.status(400).json({
                "message": "Bad request"
            });
        } else {
            const responce = await GroundPumpData.reduce(Id);
            if (responce) {
                res.status(200).json({
                    message: `Successfully deleted for Id ${Id}`
                });
            } else {
                res.status(404).json({
                    "message": `Id ${Id} Not Present`
                });
            }
        }
    } catch (error) {
        console.log(error);
    }
}
const createConnectionNewGeneration3_68kwEngStorage = async (req, res) => {
    try {
        let data = req.body;
        let ConnectionNewGenerationEngStorageSave = [];
        if (Object.keys(data).length === 0) {
            res.status(400).json({
                "error": "Not found"
            })

        } else {
            for (let index = 0; index < data.length; index++) {
                const responce = await ConnectionNewGeneration3_68kwEngStorage.create(newconnectionnewgenerationKWMW[index]);
                ConnectionNewGenerationEngStorageSave.push(responce);
            }
            if (ConnectionNewGenerationEngStorageSave.length === data.length) {
                res.status(201).json({
                    "message": "Sucessfuully added"
                })

            } else {
                res.status(404).json({
                    "error": "something went wrong"
                });
            }
        }
    } catch (error) {
        console.log(error);
    }
}
const getConnectionNewGeneration3_68kwEngStorage = async (req, res) => {
    try {
        let Id = req.params.id;

        if (!Id) {
            res.status(400).json({
                "message": "Bad request"
            });
        } else {
            const responce = await ConnectionNewGeneration3_68kwEngStorage.findbyid(Id);
            if (Object.keys(responce).length === 0) {
                res.status(404).json({
                    "message": "Not Found"
                });
            } else {
                Object.keys(responce).forEach((key) => {
                    let row = responce[key]
                    res.status(200).json(row);
                });
            }
        }
    } catch (error) {
        console.log(error);
    }
}
// Connection_New_Generation_200kw
const createConnection_New_Generation_200kw = async (req, res) => {
    try {
        let data = new Object();
        Object.keys(req.body).forEach((key) => {
            let obj = req.body[key];
            Object.assign(data, obj);
        });

        if (Object.keys(data).length === 0) {
            res.status(400).json({
                "error": "Bad request"
            })

        } else {
            let responce = false;
            // Object.keys(data).forEach(async (key) => {
            let Connection_Id = data.Connection_Id;
            let pvPhotoVoltaic = data.pvPhotoVoltaicForm;
            let windForm = data.windForm;
            let hydroForm = data.hydroForm;
            let biomassForm = data.biomassForm;
            let CHPForm = data.CHPCombinedHeatandPowerForm;
            let engstorage = data.energyForm;
            let otherForm = data.otherForm;
            if (pvPhotoVoltaic) {
                let resarray = new Array();
                const FormArray = pvPhotoVoltaic.installationFormArray;
                for (let i = 0; i < FormArray.length; i++) {
                    FormArray[i].Generator_Type_Id = 1;
                    FormArray[i].Connection_Id = Connection_Id;
                    FormArray[i].No_Inverters = pvPhotoVoltaic.No_Inverters;
                    FormArray[i].Inverter_Rating = pvPhotoVoltaic.inverterFormArray.toString();
                    FormArray[i].Inverter_Design = pvPhotoVoltaic.Inverter_Design
                    FormArray[i].No_Generator_Sets = pvPhotoVoltaic.No_Generator_Sets;
                    FormArray[i].Generator_Size = pvPhotoVoltaic.Generator_Size;
                    let result = await ConnectionNewGeneration200kw.create(FormArray[i]);
                    resarray.push(result);
                    if (resarray.length = FormArray.length) {
                        responce = true;
                        console.log("Success for PhotoVoltaic form");

                    } else {
                        responce = false;
                        console.log("error in PhotoVoltaic form");
                    }
                }
            } else {
                responce = true;
                console.log("pv empty");
            }

            if (windForm) {
                let resarray = new Array();
                const FormArray = windForm.installationFormArray;
                for (let i = 0; i < windForm.No_Generator_Sets; i++) {
                    FormArray[i].Generator_Type_Id = 2;
                    FormArray[i].Connection_Id = Connection_Id;
                    FormArray[i].No_Inverters = windForm.No_Inverters;
                    FormArray[i].Inverter_Rating = windForm.inverterFormArray.toString();
                    FormArray[i].Inverter_Design = windForm.Inverter_Design
                    FormArray[i].No_Generator_Sets = windForm.No_Generator_Sets;
                    FormArray[i].Generator_Size = windForm.Generator_Size;
                    let result = await ConnectionNewGeneration200kw.create(FormArray[i]);
                    resarray.push(result);
                    if (resarray.length = FormArray.length) {
                        responce = true;
                        console.log("Success for Wind form");

                    } else {
                        responce = false;
                        console.log("error in Wind form");
                    }
                }
            }
            else {
                responce = true;
                console.log("wind empty");
            }
            if (hydroForm) {
                let resarray = new Array();
                const FormArray = hydroForm.installationFormArray;
                for (let i = 0; i < hydroForm.No_Generator_Sets; i++) {
                    FormArray[i].Generator_Type_Id = 3;
                    FormArray[i].Connection_Id = Connection_Id;
                    FormArray[i].No_Inverters = hydroForm.No_Inverters;
                    FormArray[i].Inverter_Rating = hydroForm.inverterFormArray.toString();
                    FormArray[i].Inverter_Design = hydroForm.Inverter_Design;
                    FormArray[i].No_Generator_Sets = hydroForm.No_Generator_Sets;
                    FormArray[i].Generator_Size = hydroForm.Generator_Size;
                    let result = await ConnectionNewGeneration200kw.create(FormArray[i]);
                    resarray.push(result);
                    if (resarray.length = FormArray.length) {
                        responce = true;
                        console.log("Success for Hydro form");

                    } else {
                        responce = false;
                        console.log("error in Hydro form");
                    }

                }
            }
            else {
                responce = true;
                console.log("hydro empty");
            }
            if (biomassForm) {
                let resarray = new Array();
                const FormArray = biomassForm.installationFormArray;
                for (let i = 0; i < biomassForm.No_Generator_Sets; i++) {
                    FormArray[i].Generator_Type_Id = 4;
                    FormArray[i].Generator_Type_Id = 3;
                    FormArray[i].Connection_Id = Connection_Id;
                    FormArray[i].No_Inverters = biomassForm.No_Inverters;
                    FormArray[i].Inverter_Rating = biomassForm.inverterFormArray.toString();
                    FormArray[i].Inverter_Design = biomassForm.Inverter_Design;
                    FormArray[i].No_Generator_Sets = biomassForm.No_Generator_Sets;
                    FormArray[i].Generator_Size = biomassForm.Generator_Size;
                    let result = await ConnectionNewGeneration200kw.create(FormArray[i]);
                    resarray.push(result);
                    if (resarray.length = FormArray.length) {
                        responce = true;
                        console.log("Success for Biomass form");

                    } else {
                        responce = false;
                        console.log("error in Biomass form");
                    }

                }
            }
            else {
                responce = true;
                console.log("Biomass empty");
            }
            if (CHPForm) {
                let resarray = new Array();
                const FormArray = CHPForm.installationFormArray;
                for (let i = 0; i < CHPForm.No_Generator_Sets; i++) {
                    FormArray[i].Generator_Type_Id = 5;
                    FormArray[i].Generator_Type_Id = 3;
                    FormArray[i].Connection_Id = Connection_Id;
                    FormArray[i].No_Inverters = CHPForm.No_Inverters;
                    FormArray[i].Inverter_Rating = CHPForm.inverterFormArray.toString();
                    FormArray[i].Inverter_Design = CHPForm.Inverter_Design;
                    FormArray[i].No_Generator_Sets = CHPForm.No_Generator_Sets;
                    FormArray[i].Generator_Size = CHPForm.Generator_Size;
                    let result = await ConnectionNewGeneration200kw.create(FormArray[i]);
                    resarray.push(result);
                    if (resarray.length = FormArray.length) {
                        responce = true;
                        console.log("Success for CHP form");

                    } else {
                        responce = false;
                        console.log("error in CHP form");
                    }

                }
            }
            else {
                responce = true;
                console.log("CHP empty");
            }
            if (engstorage) {
                engstorage.Generator_Radio_Button = 3;
                engstorage.Connection_Id = Connection_Id;
                let result = await ConnectionNewGeneration3_68kwEngStorage.create(engstorage);
                if (result) {
                    console.log("Success for EnergyStorage form");

                } else {
                    responce = false;
                    console.log("error in EnergyStorage form");
                }
            } else {
                responce = true;
                console.log("EnergyStorage empty");
            }
            if (otherForm) {
                let resarray = new Array();
                const FormArray = otherForm.installationFormArray;
                for (let i = 0; i < FormArray.length; i++) {
                    FormArray[i].Generator_Type_Id = 7;
                    FormArray[i].Connection_Id = Connection_Id;
                    FormArray[i].No_Inverters = otherForm.No_Inverters;
                    FormArray[i].Inverter_Rating = otherForm.inverterFormArray.toString();
                    FormArray[i].Inverter_Design = otherForm.Inverter_Design;
                    FormArray[i].No_Generator_Sets = otherForm.No_Generator_Sets;
                    FormArray[i].Generator_Size = otherForm.Generator_Size;
                    let result = await ConnectionNewGeneration200kw.create(FormArray[i]);
                    resarray.push(result);
                    if (resarray.length = FormArray.length) {
                        responce = true;
                        console.log("Success for other form");

                    } else {
                        responce = false;
                        console.log("error in other form");
                    }

                }
            }
            else {
                responce = true;
                console.log("CHP empty");
            }

            if (responce) {
                res.status(200).json({
                    "message": "Successfully added"
                })
            }
            else {
                res.status(400).json({
                    "message": "Something went wrong"
                })
            }


        }
    } catch (error) {
        console.log(error);
    }
}

const updateConnection_New_Generation_200kw = (req, res) => {
    try {
        return new Promise(async (resolve, reject) => {
            let newConnectionnewgeneration200kw = req.body;

            let id = req.params.id;
            if (Object.keys(newConnectionnewgeneration200kw).length === 0 && !req.params.id) {
                res.status(400).json({
                    "error": "Not Found"
                })
            } else {
                let resvariable = false;
                for (let key = 0; key < newConnectionnewgeneration200kw.length; key++) {


                    let pvPhotoVoltaic = newConnectionnewgeneration200kw[key].pvPhotoVoltaicForm;
                    let windForm = newConnectionnewgeneration200kw[key].windForm;
                    let hydroForm = newConnectionnewgeneration200kw[key].hydroForm;
                    let biomassForm = newConnectionnewgeneration200kw[key].biomassForm;
                    let CHPForm = newConnectionnewgeneration200kw[key].CHPCombinedHeatandPowerForm;
                    let OtherForm = newConnectionnewgeneration200kw[key].otherForm;
                    let engstorage = newConnectionnewgeneration200kw[key].energyForm;


                    if (pvPhotoVoltaic) {
                        let array = new Array();
                        const FormArray = pvPhotoVoltaic.installationFormArray;
                        for (let i = 0; i < FormArray.length; i++) {

                            FormArray[i].No_Generator_Sets = pvPhotoVoltaic.No_Generator_Sets;
                            FormArray[i].Generator_Size = pvPhotoVoltaic.Generator_Size;
                            FormArray[i].Generator_Type_Id = 1;
                            FormArray[i].No_Inverters = pvPhotoVoltaic.No_Inverters;
                            FormArray[i].Inverter_Rating = pvPhotoVoltaic.inverterFormArray.toString();
                            FormArray[i].Inverter_Design = pvPhotoVoltaic.Inverter_Design;
                            FormArray[i].Generation_Technology_Type = pvPhotoVoltaic.Generation_Technology_Type;
                            if (FormArray[i].Id === null) {
                                FormArray[i].Connection_Id = id;

                                let result = await ConnectionNewGeneration200kw.create(FormArray[i]);
                                array.push(result);
                            }
                            else {
                                let result = await ConnectionNewGeneration200kw.update(FormArray[i]);
                                array.push(result);
                            }
                            //console.log("result>>", result);

                        }
                        if (array.length === FormArray.length) {
                            resvariable = true;
                            console.log("update for PhotoVoltaic form");
                        } else {
                            resvariable = false;
                            console.log("updateerror in PhotoVoltaic form");
                        }
                    } else {
                        let gentype_id = 1;
                        let result = await ConnectionNewGeneration200kw.remove(id, gentype_id);
                        if (result) {
                            resvariable = true;
                            console.log("removed pvphotovoltaic form");
                        } else {
                            resvariable = false;
                        }
                    }

                    if (windForm) {
                        let array = new Array();
                        const FormArray = windForm.installationFormArray;
                        for (let i = 0; i < FormArray.length; i++) {
                            console.log(windForm.No_Generator_Sets);
                            FormArray[i].No_Generator_Sets = windForm.No_Generator_Sets;
                            FormArray[i].Generator_Size = windForm.Generator_Size;
                            FormArray[i].No_Inverters = windForm.No_Inverters;
                            FormArray[i].Inverter_Rating = windForm.inverterFormArray.toString();
                            FormArray[i].Inverter_Design = windForm.Inverter_Design;
                            FormArray[i].Generator_Type_Id = 2;
                            FormArray[i].Generation_Technology_Type = windForm.Generation_Technology_Type;
                            if (FormArray[i].Id === null) {
                                FormArray[i].Connection_Id = id;
                                let result = await ConnectionNewGeneration200kw.create(FormArray[i]);
                                array.push(result);
                            }
                            else {
                                let result = await ConnectionNewGeneration200kw.update(FormArray[i]);
                                array.push(result);
                            }

                        }
                        if (array.length === FormArray.length) {
                            resvariable = true;
                            console.log("update for Wind form");
                        } else {
                            resvariable = false;
                            console.log("updateerror in Wind form");
                        }
                    } else {
                        let gentype_id = 2;
                        let result = await ConnectionNewGeneration200kw.remove(id, gentype_id);
                        if (result) {
                            resvariable = true;
                            console.log("removed wind form");
                        }
                        else {
                            resvariable = false;
                        }
                    }
                    if (hydroForm) {
                        let array = new Array();
                        const FormArray = hydroForm.installationFormArray;
                        for (let i = 0; i < FormArray.length; i++) {
                            let result;
                            FormArray[i].No_Generator_Sets = hydroForm.No_Generator_Sets;
                            FormArray[i].Generator_Size = hydroForm.Generator_Size;
                            FormArray[i].No_Inverters = hydroForm.No_Inverters;
                            FormArray[i].Inverter_Rating = hydroForm.inverterFormArray.toString();
                            FormArray[i].Inverter_Design = hydroForm.Inverter_Design;
                            FormArray[i].Generator_Type_Id = 3;
                            FormArray[i].Generation_Technology_Type = hydroForm.Generation_Technology_Type;

                            if (FormArray[i].Id === null) {
                                FormArray[i].Connection_Id = id;
                                let result = await ConnectionNewGeneration200kw.create(FormArray[i]);
                                array.push(result);
                            }
                            else {
                                let result = await ConnectionNewGeneration200kw.update(FormArray[i]);
                                array.push(result);
                            }

                        }
                        if (array.length === FormArray.length) {
                            resvariable = true;
                            console.log("update for hydro form");

                        } else {
                            resvariable = false;
                            console.log("updateerror in hydro form");

                        }
                    } else {
                        let gentype_id = 3;
                        let result = await ConnectionNewGeneration200kw.remove(id, gentype_id);
                        if (result) {
                            resvariable = true;
                            console.log("removed hydro form");
                        }
                        else {
                            resvariable = false;
                        }
                    }
                    if (biomassForm) {

                        let array = new Array();
                        const FormArray = biomassForm.installationFormArray;

                        for (let i = 0; i < FormArray.length; i++) {


                            FormArray[i].No_Generator_Sets = biomassForm.No_Generator_Sets;
                            FormArray[i].Generator_Size = biomassForm.Generator_Size;
                            FormArray[i].No_Inverters = biomassForm.No_Inverters;
                            FormArray[i].Inverter_Rating = biomassForm.inverterFormArray.toString();
                            FormArray[i].Inverter_Design = biomassForm.Inverter_Design;
                            FormArray[i].Generator_Type_Id = 4;
                            FormArray[i].Generation_Technology_Type = biomassForm.Generation_Technology_Type;

                            if (FormArray[i].Id === null) {
                                FormArray[i].Connection_Id = id;
                                let result = await ConnectionNewGeneration200kw.create(FormArray[i]);
                                array.push(result);

                            }
                            else {
                                let result = await ConnectionNewGeneration200kw.update(FormArray[i]);
                                array.push(result);
                            }

                        }
                        if (array.length === FormArray.length) {
                            resvariable = true;
                            console.log("update for Biomass form");
                        } else {
                            resvariable = false;
                            console.log("updateerror in Biomass form");
                        }
                    } else {
                        let gentype_id = 4;
                        let result = await ConnectionNewGeneration200kw.remove(id, gentype_id);
                        if (result) {
                            resvariable = true;
                            console.log("removed biomass form");
                        } else {
                            resvariable = false;
                        }
                    }
                    if (CHPForm) {
                        let array = new Array();
                        const FormArray = CHPForm.installationFormArray;
                        for (let i = 0; i < FormArray.length; i++) {

                            FormArray[i].No_Generator_Sets = CHPForm.No_Generator_Sets;
                            FormArray[i].Generator_Size = CHPForm.Generator_Size;
                            FormArray[i].No_Inverters = CHPForm.No_Inverters;
                            FormArray[i].Inverter_Rating = CHPForm.inverterFormArray.toString();
                            FormArray[i].Inverter_Design = CHPForm.Inverter_Design;
                            FormArray[i].Generator_Type_Id = 5;
                            FormArray[i].Generation_Technology_Type = CHPForm.Generation_Technology_Type;

                            if (FormArray[i].Id === null) {
                                FormArray[i].Connection_Id = id;
                                let result = await ConnectionNewGeneration200kw.create(FormArray[i]);
                                array.push(result);
                            }
                            else {
                                let result = await ConnectionNewGeneration200kw.update(FormArray[i]);
                                array.push(result);
                            }

                        }
                        if (array.length === FormArray.length) {
                            resvariable = true;
                            console.log("update for CHP form");
                        } else {
                            resvariable = false;
                            console.log("updateerror in CHP form");
                        }
                    } else {
                        let gentype_id = 5;
                        let result = await ConnectionNewGeneration200kw.remove(id, gentype_id);
                        if (result) {
                            resvariable = true;
                            console.log("removed chp form");
                        } else {
                            resvariable = false;
                        }
                    }

                    if (OtherForm) {
                        let array = new Array();
                        const FormArray = OtherForm.installationFormArray;
                        for (let i = 0; i < FormArray.length; i++) {

                            FormArray[i].No_Generator_Sets = OtherForm.No_Generator_Sets;
                            FormArray[i].Generator_Size = OtherForm.Generator_Size;
                            FormArray[i].No_Inverters = OtherForm.No_Inverters;
                            FormArray[i].Inverter_Rating = OtherForm.inverterFormArray.toString();
                            FormArray[i].Inverter_Design = OtherForm.Inverter_Design;
                            FormArray[i].Generator_Type_Id = 7;
                            FormArray[i].Generation_Technology_Type = OtherForm.Generation_Technology_Type;
                            FormArray[i].Inverter_Rating = FormArray[i].Inverter_Rating.toString();
                            if (FormArray[i].Id === null) {
                                FormArray[i].Connection_Id = id;

                                let result = await ConnectionNewGeneration200kw.create(FormArray[i]);
                                array.push(result);
                                //console.log(result);
                            }
                            else {
                                let result = await ConnectionNewGeneration200kw.update(FormArray[i]);
                                array.push(result);
                            }

                        }
                        if (array.length === FormArray.length) {
                            resvariable = true;
                            console.log("update for other form");
                        } else {
                            resvariable = false;
                            console.log("updateerror in other form");
                        }
                    } else {
                        let gentype_id = 7;
                        let result = await ConnectionNewGeneration200kw.remove(id, gentype_id);
                        if (result) {
                            resvariable = true;
                            console.log("removed other form");
                        }
                        else {
                            resvariable = false;
                        }

                    }

                    if (engstorage) {
                        delete engstorage.OperatingFile1
                        delete engstorage.OperatingFile2
                        delete engstorage.SupportingFile1
                        delete engstorage.SupportingFile2
                        engstorage.Generator_Radio_Button = 3;
                        engstorage.Connection_Id = id;
                        let result = null;
                        if (engstorage.Id === null) {
                            result = await ConnectionNewGeneration3_68kwEngStorage.create(engstorage);

                        } else {
                            result = await ConnectionNewGeneration3_68kwEngStorage.update(engstorage, id);
                        }
                        if (result) {
                            resvariable = true;
                            console.log("update for EnergyStorage form");

                        } else {
                            resvariable = false;
                            console.log("updateerror in EnergyStorage form");
                        }
                    } else {
                        let gentype_radiobutton = 2;
                        let result = await ConnectionNewGeneration3_68kwEngStorage.remove(id, gentype_radiobutton);
                        if (result) {
                            resvariable = true;
                            console.log("removed energy storage");
                        }
                        else {
                            resvariable = false;
                        }


                    }
                }
                if (resvariable) {
                    res.status(201).json({
                        "message": "Sucessfuully updated"
                    })

                } else {
                    res.status(404).json({
                        "error": "Not Found"
                    });
                }
            }
        });
    } catch (error) {
        console.log(error);
    }
}

const getConnection_New_Generation_200kw = async (req, res) => {
    try {
        let connectionid = req.params.id;

        if (!connectionid) {
            res.status(400).json({
                "message": "Bad request"
            });
        } else {
            const connectionnewgeneration200kw = new Object();

            const responce = await ConnectionNewGeneration200kw.findbyConnectionId(connectionid);
            const result = await ConnectionNewGeneration3_68kwEngStorage.findbyid(connectionid, 3);
            // console.log(result);
            //console.log (responce);
            // const arraytoobject = function(row){
            //             return new Promise((resolve , reject)=>{
            //         let inverterRating = row.Inverter_Rating;
            //         let inverterFormArray = new Array();
            //         if(inverterRating !== null){
            //         const stringArray = inverterRating.split(',');
            //         for (let i = 0; i < stringArray.length; i++) {
            //             let Inverter = new Object();
            //             Inverter.Inverter_Rating = parseInt(stringArray [i]);
            //             inverterFormArray.push(Inverter);
            //         }
            //     }
            //     resolve( inverterFormArray);
            // });
            // }

            let pvphotovoltaicform = new Object();
            let windform = new Object();
            let hydroform = new Object();
            let biomassform = new Object();
            let CHPform = new Object();
            let Otherform = new Object();
            // let engstorageform = new Array();
            let pvinstallationFormArray = new Array();
            let hydroinstallationFormArray = new Array();
            let windinstallationFormArray = new Array();
            let biomassinstallationFormArray = new Array();
            let CHPinstallationFormArray = new Array();
            let OtherinstallationFormArray = new Array();
            for (var key = 0; key < responce.length; key++) {
                let row = responce[key];

                if (row.Generator_Type_Id == 1) {
                    let pvPhotoVoltaic = new Object();
                    pvPhotoVoltaic.Id = row.Id;
                    pvPhotoVoltaic.Rated_Terminal_Voltage = row.Rated_Terminal_Voltage;
                    pvPhotoVoltaic.Rated_Terminal_Current = row.Rated_Terminal_Current;
                    pvPhotoVoltaic.Registered_Capacity = row.Registered_Capacity;
                    pvPhotoVoltaic.Power_Rating = row.Power_Rating;
                    pvPhotoVoltaic.Island_Mode = row.Island_Mode;
                    pvPhotoVoltaic.Export_MPAN = row.Export_MPAN;
                    pvPhotoVoltaic.Supply_Onsite_Premises = row.Supply_Onsite_Premises;
                    pvPhotoVoltaic.Capacity_Onsite_Premises = row.Capacity_Onsite_Premises;
                    pvinstallationFormArray.push(pvPhotoVoltaic);
                    let inverterRating = row.Inverter_Rating;
                    let inverterFormArray = new Array();
                    if (inverterRating !== null) {
                        const stringArray = inverterRating.split(',');
                        for (let i = 0; i < stringArray.length; i++) {
                            let Inverter = new Object();
                            Inverter.Inverter_Rating = parseInt(stringArray[i]);
                            inverterFormArray.push(Inverter);
                        }
                    }
                    pvphotovoltaicform.No_Generator_Sets = row.No_Generator_Sets;
                    pvphotovoltaicform.Generator_Size = row.Generator_Size;
                    pvphotovoltaicform.installationFormArray = pvinstallationFormArray
                    pvphotovoltaicform.No_Inverters = row.No_Inverters
                    pvphotovoltaicform.Inverter_Design = row.Inverter_Design
                    pvphotovoltaicform.inverterFormArray = inverterFormArray;
                    connectionnewgeneration200kw.pvPhotoVoltaicForm = pvphotovoltaicform;
                } else if (row.Generator_Type_Id == 2) {
                    let windForm = new Object();
                    windForm.Id = row.Id;
                    windForm.Rated_Terminal_Voltage = row.Rated_Terminal_Voltage;
                    windForm.Rated_Terminal_Current = row.Rated_Terminal_Current;
                    windForm.Registered_Capacity = row.Registered_Capacity;
                    windForm.Power_Rating = row.Power_Rating;
                    windForm.Island_Mode = row.Island_Mode;
                    windForm.Export_MPAN = row.Export_MPAN;
                    windForm.Supply_Onsite_Premises = row.Supply_Onsite_Premises;
                    windForm.Capacity_Onsite_Premises = row.Capacity_Onsite_Premises;
                    windinstallationFormArray.push(windForm);
                    let inverterRating = row.Inverter_Rating;
                    let inverterFormArray = new Array();
                    if (inverterRating !== null) {
                        const stringArray = inverterRating.split(',');
                        for (let i = 0; i < stringArray.length; i++) {
                            let Inverter = new Object();
                            Inverter.Inverter_Rating = parseInt(stringArray[i]);
                            inverterFormArray.push(Inverter);
                        }
                    }
                    windform.No_Generator_Sets = row.No_Generator_Sets;
                    windform.Generator_Size = row.Generator_Size;
                    windform.installationFormArray = windinstallationFormArray
                    windform.No_Inverters = row.No_Inverters
                    windform.Inverter_Design = row.Inverter_Design
                    windform.inverterFormArray = inverterFormArray
                    connectionnewgeneration200kw.windForm = windform;
                } else if (row.Generator_Type_Id == 3) {
                    let hydroForm = new Object();
                    hydroForm.Id = row.Id;
                    hydroForm.Rated_Terminal_Voltage = row.Rated_Terminal_Voltage;
                    hydroForm.Rated_Terminal_Current = row.Rated_Terminal_Current;
                    hydroForm.Registered_Capacity = row.Registered_Capacity;
                    hydroForm.Power_Rating = row.Power_Rating;
                    hydroForm.Island_Mode = row.Island_Mode;
                    hydroForm.Export_MPAN = row.Export_MPAN;
                    hydroForm.Supply_Onsite_Premises = row.Supply_Onsite_Premises;
                    hydroForm.Capacity_Onsite_Premises = row.Capacity_Onsite_Premises;
                    hydroinstallationFormArray.push(hydroForm);
                    let inverterRating = row.Inverter_Rating;
                    let inverterFormArray = new Array();
                    if (inverterRating !== null) {
                        const stringArray = inverterRating.split(',');
                        for (let i = 0; i < stringArray.length; i++) {
                            let Inverter = new Object();
                            Inverter.Inverter_Rating = parseInt(stringArray[i]);
                            inverterFormArray.push(Inverter);
                        }
                    }
                    hydroform.No_Generator_Sets = row.No_Generator_Sets;
                    hydroform.Generator_Size = row.Generator_Size;
                    hydroform.installationFormArray = hydroinstallationFormArray
                    hydroform.No_Inverters = row.No_Inverters;
                    hydroform.Inverter_Design = row.Inverter_Design
                    hydroform.inverterFormArray = inverterFormArray;
                    connectionnewgeneration200kw.hydroForm = hydroform;
                } else if (row.Generator_Type_Id == 4) {
                    let biomassForm = new Object();
                    biomassForm.Id = row.Id;
                    biomassForm.Rated_Terminal_Voltage = row.Rated_Terminal_Voltage;
                    biomassForm.Rated_Terminal_Current = row.Rated_Terminal_Current;
                    biomassForm.Registered_Capacity = row.Registered_Capacity;
                    biomassForm.Power_Rating = row.Power_Rating;
                    biomassForm.Island_Mode = row.Island_Mode;
                    biomassForm.Export_MPAN = row.Export_MPAN;
                    biomassForm.Supply_Onsite_Premises = row.Supply_Onsite_Premises;
                    biomassForm.Capacity_Onsite_Premises = row.Capacity_Onsite_Premises;;
                    biomassinstallationFormArray.push(biomassForm);
                    let inverterRating = row.Inverter_Rating;
                    let inverterFormArray = new Array();
                    if (inverterRating !== null) {
                        const stringArray = inverterRating.split(',');
                        for (let i = 0; i < stringArray.length; i++) {
                            let Inverter = new Object();
                            Inverter.Inverter_Rating = parseInt(stringArray[i]);
                            inverterFormArray.push(Inverter);
                        }
                    }
                    biomassform.No_Generator_Sets = row.No_Generator_Sets;
                    biomassform.Generator_Size = row.Generator_Size;
                    biomassform.installationFormArray = biomassinstallationFormArray
                    biomassform.No_Inverters = row.No_Inverters;
                    biomassform.Inverter_Design = row.Inverter_Design
                    biomassform.inverterFormArray = inverterFormArray;
                    connectionnewgeneration200kw.biomassForm = biomassform;
                } else if (row.Generator_Type_Id == 5) {
                    let CHPForm = new Object();
                    CHPForm.Id = row.Id;
                    CHPForm.Rated_Terminal_Voltage = row.Rated_Terminal_Voltage;
                    CHPForm.Rated_Terminal_Current = row.Rated_Terminal_Current;
                    CHPForm.Registered_Capacity = row.Registered_Capacity;
                    CHPForm.Power_Rating = row.Power_Rating;
                    CHPForm.Island_Mode = row.Island_Mode;
                    CHPForm.Export_MPAN = row.Export_MPAN;
                    CHPForm.Supply_Onsite_Premises = row.Supply_Onsite_Premises;
                    CHPForm.Capacity_Onsite_Premises = row.Capacity_Onsite_Premises;
                    CHPinstallationFormArray.push(CHPForm);
                    let inverterRating = row.Inverter_Rating;
                    let inverterFormArray = new Array();
                    if (inverterRating !== null) {
                        const stringArray = inverterRating.split(',');
                        for (let i = 0; i < stringArray.length; i++) {
                            let Inverter = new Object();
                            Inverter.Inverter_Rating = parseInt(stringArray[i]);
                            inverterFormArray.push(Inverter);
                        }
                    }
                    CHPform.No_Generator_Sets = row.No_Generator_Sets;
                    CHPform.Generator_Size = row.Generator_Size;
                    CHPform.installationFormArray = CHPinstallationFormArray
                    CHPform.No_Inverters = row.No_Inverters;
                    CHPform.Inverter_Design = row.Inverter_Design
                    CHPform.inverterFormArray = inverterFormArray;
                    connectionnewgeneration200kw.CHPForm = CHPform;
                } else if (row.Generator_Type_Id == 7) {
                    let OtherForm = new Object();
                    OtherForm.Id = row.Id;
                    OtherForm.Rated_Terminal_Voltage = row.Rated_Terminal_Voltage;
                    OtherForm.Rated_Terminal_Current = row.Rated_Terminal_Current;
                    OtherForm.Registered_Capacity = row.Registered_Capacity;
                    OtherForm.Power_Rating = row.Power_Rating;
                    OtherForm.Island_Mode = row.Island_Mode;
                    OtherForm.Export_MPAN = row.Export_MPAN;
                    OtherForm.Supply_Onsite_Premises = row.Supply_Onsite_Premises;
                    OtherForm.Capacity_Onsite_Premises = row.Capacity_Onsite_Premises;
                    OtherinstallationFormArray.push(OtherForm);
                    let inverterRating = row.Inverter_Rating;
                    let inverterFormArray = new Array();
                    if (inverterRating !== null) {
                        const stringArray = inverterRating.split(',');
                        for (let i = 0; i < stringArray.length; i++) {
                            let Inverter = new Object();
                            Inverter.Inverter_Rating = parseInt(stringArray[i]);
                            inverterFormArray.push(Inverter);
                        }
                    }
                    Otherform.No_Generator_Sets = row.No_Generator_Sets;
                    Otherform.Generator_Size = row.Generator_Size;
                    Otherform.installationFormArray = OtherinstallationFormArray
                    Otherform.No_Inverters = row.No_Inverters;
                    Otherform.Inverter_Design = row.Inverter_Design
                    Otherform.inverterFormArray = inverterFormArray;
                    Otherform.Generation_Technology_Type = row.Generation_Technology_Type;
                    connectionnewgeneration200kw.otherForm = Otherform;
                }
            };

            for (var key = 0; key < result.length; key++) {
                let row = result[key];
                // console.log(row);
                if (row.Generator_Radio_Button == 3) {
                    delete row.Id;
                    delete row.Generator_Radio_Button;
                    delete row.Connection_Id;
                    row.OperatingFile1 = await getFileDetails(row.Operating_Attachment_1);
                    row.OperatingFile2 = await getFileDetails(row.Operating_Attachment_2);
                    row.SupportingFile1 = await getFileDetails(row.Supporting_Attachment_1);
                    row.SupportingFile2 = await getFileDetails(row.Supporting_Attachment_2);
                    let engstorageform = Object.assign({}, row);
                    // console.log(engstorageform);
                    // engstorageform.push(engstorageForm);
                    connectionnewgeneration200kw.energyForm = engstorageform;
                };
            };
            let ResponceArray = new Array();
            ResponceArray.push(connectionnewgeneration200kw);
            if (Object.keys(connectionnewgeneration200kw).length !== 0) {
                res.status(200).json(ResponceArray);
            } else {
                res.status(200).json(ResponceArray);
            }
        }
    } catch (error) {
        console.log(error);
    }
}
const reduceConnection_New_Generation_200kw = async (req, res) => {
    try {
        let Id = req.params.id;

        if (!Id) {
            res.status(400).json({
                "message": "Bad request"
            });
        } else {
            const responce = await ConnectionNewGeneration200kw.reduce(Id);
            if (responce) {
                res.status(200).json({
                    message: `Successfully deleted for Id ${Id}`
                });
            } else {
                res.status(404).json({
                    "message": `Id ${Id} Not Present`
                });
            }
        }
    } catch (error) {
        console.log(error);
    }
}
export {
    createConnection_New_Generation, updateConnection_New_Generation, getConnectionNewGeneration,
    CreateConnection_New_Generation_3_68kws, getConnection_New_Generation_3_68kws, updateConnection_New_Generation_3_68kw, reduceConnection_New_Generation_3_68kws,
    createConnectionNewGenerationKWMW, updateConnectionNewGenerationKWMW, getConnectionNewGenerationKWMW, reduceConnection_New_Generation_KW_MW,
    createConnectionNewGeneration3_68kwEngStorage, getConnectionNewGeneration3_68kwEngStorage,
    createConnection_New_Generation_200kw, updateConnection_New_Generation_200kw, getConnection_New_Generation_200kw, reduceConnection_New_Generation_200kw
};