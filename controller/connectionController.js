import ConnectionSiteDetails from '../models/Connection_Site_Details_Model.js';
import { ConnectionJobs, Reference } from '../models/connection_Jobs_Model.js';
import ConnectionInvoiceDetails from '../models/Connection_Invoice_Details_Model.js';
import ConnectionSiteInformation from '../models/Connection_Site_Information_Model.js';
import ConnectionYourConnectionDate from '../models/Conection_Your_Connection_Date_Model.js';
import ConnectionProgression from '../models/Connection_Progression_Model.js';
import ConnectionSiteOwnerDetails from '../models/connection_site_owner_model.js';
import ConnectionSiteContactDetails from '../models/Connection_site_contact_model.js';
import ConnectionTypes from '../models/Connection_type_model.js';
import ConnectionStatus from '../models/Connection_status_model.js';
import { ConnectionSingleInstallerDetails, ConnectionMultipleInstallerDetails } from '../models/Connection_Installer_Details_model.js';
import { ConnectionMultiplePremisesDetails, ConnectionSinglePremisesDetails } from '../models/Connection_Premise_Details_model.js';
import ConnectionWorkDate from '../models/Connection_Work_Date_model.js';
import ConnectionMovingEquipment from '../models/Connection_Moving_Equipment_model.js';
import ConnectionExistingGeneration from '../models/Connection_Existing_Generation_model.js';
import ConnectionYourConnection from '../models/Connection_Your_Connection.js';
import ConnectionContactPreference from '../models/Connection_Contact_Preference_model.js';
import {
    ConnectionElectricalEquipment, Electrict_Heater, GroundPumpData, AirPumpData,
    MotorData, WelderData, HarmonicData
} from '../models/Connection_Electrical_Equipment_model.js';
import ConnectionAdditionalInformation from '../models/Connection_Additional_Information_model.js';
import ConnectionSitePlan from '../models/Connection_Site_Plan.js';
import { getFileDetails } from '../models/commonFile_model.js'

// Connection_Jobs
const createConnection_Jobs = async (req, res) => {
    try {
        let newconnectionjobs = new ConnectionJobs(req.body);
        if (req.body.constructor === Object && Object.keys(newconnectionjobs).length === 0) {
            res.status(404).json({ "error": "Bad Request" });
        } else {
            const connectionjobssave = await ConnectionJobs.create(newconnectionjobs);
            let newreference = new Reference(connectionjobssave)
            let reference = await ConnectionJobs.update(newreference, connectionjobssave);
            if (connectionjobssave && reference) {
                res.status(201).json([{ "Connection_Id": connectionjobssave }, newreference, { "message": "successfully added" }]);
            } else {
                res.status(400).json({
                    "error": "something went wrong"
                });
            }
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({"message" : "Internal Server Error"});
    }
};
const updateConnection_Jobs = async (req, res) => {
    try {
        let id = req.params.id;
        let newconnectionjobs = new ConnectionJobs(req.body);
        if (req.body.constructor === Object && Object.keys(newconnectionjobs).length === 0) {
            res.status(404).json({ "error": "Bad Request" });
        } else {
            const connectionjobsupdate = await ConnectionJobs.update(newconnectionjobs, id);
            if (connectionjobsupdate) {
                res.status(201).json({
                    "message": "successfully updated"
                });
            } else {
                res.status(200).json({
                    "message": "Noting Changed"
                });
            }
        }

    } catch (error) {
        res.status(500).json({"message" : "Internal Server Error"});
    }
};

const getConnectionJob = async (req, res) => {
    try {
        let id = req.params.id;

        if (!id) {
            res.status(400).json({
                "message": "Bad request"
            });
        } else {
            const responce = await ConnectionJobs.findbyid(id);
            // if (Object.keys(responce).length === 0) {
            //     res.status(200).json(responce);
            // } else {
            //     Object.keys(responce).forEach((key) => {
            //         let row = responce[key]
            //         res.status(200).json(responce);
            //     });
            // }
            res.status(200).json((responce.length > 0) ? responce : {});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({"message" : "Internal Server Error"});
    }
}

const createConnectionInvoiceDetails = async (req, res) => {
    try {
        console.log(req.body);
        let newconnectioninvoicedetails = req.body;
        if (Object.keys(newconnectioninvoicedetails).length === 0) {
            res.status(404).json({
                "error": "Not Found"
            }
            );
        } else {
            const connectionjobssave = await ConnectionInvoiceDetails.create(newconnectioninvoicedetails);
            if (connectionjobssave) {
                res.status(201).json({
                    "message": "successfully added"
                });
            } else {
                res.status(400).json({
                    "error": "something went wrong"
                });
            }
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({"message" : "Internal Server Error"});
    }
};

const getConnectionInvoiceDetails = async (req, res) => {
    try {
        let Id = req.params.id;

        if (!Id) {
            res.status(400).json({
                "message": "Bad request"
            });
        } else {
            const responce = await ConnectionInvoiceDetails.findbyId(Id);
            // if (Object.keys(responce).length === 0) {
            //     res.status(200).json(responce);
            // } else {
            //     Object.keys(responce).forEach((key) => {
            //         let row = responce[key]
            //         res.status(200).json(row);
            //     });
            // }
            res.status(200).json((responce.length > 0) ? responce[0] : {});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({"message" : "Internal Server Error"});
    }
}
const creatConnectionSiteInformation = async (req, res) => {
    try {
        let newconnectionsiteinformation = req.body;
        if (Object.keys(newconnectionsiteinformation).length === 0) {
            res.status(404).json({
                "error": "Not Found"
            }
            );
        } else {
            const connectionjobssave = await ConnectionSiteInformation.create(newconnectionsiteinformation);
            if (connectionjobssave) {
                res.status(201).json({
                    "message": "successfully added"
                });
            } else {
                res.status(400).json({
                    "error": "something went wrong"
                });
            }
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({"message" : "Internal Server Error"});
    }
};

const creatConnectionYourConnectionDate = async (req, res) => {
    try {
        let newconnectionyourconnectiondate = req.body;
        console.log(newconnectionyourconnectiondate);
        if (Object.keys(newconnectionyourconnectiondate).length === 0) {
            res.status(404).json({
                "error": "Not Found"
            }
            );
        } else {
            const connectionjobssave = await ConnectionYourConnectionDate.create(newconnectionyourconnectiondate);
            if (connectionjobssave) {
                res.status(201).json({
                    "message": "successfully added"
                });
            } else {
                res.status(400).json({
                    "error": "something went wrong"
                });
            }
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({"message" : "Internal Server Error"});
    }
};


const updateConnectionInvoiceDetails = async (req, res) => {
    try {
        let newConnectionInvoiceDetails = req.body;
        let id = req.params.id;

        console.log(id);
        console.log(req.body);
        if (Object.keys(newConnectionInvoiceDetails).length === 0 && !id) {
            res.status(404).json({
                "error": "Not Found"
            }
            );
        } else {
            const ConnectionInvoiceDetailsupdate = await ConnectionInvoiceDetails.update(newConnectionInvoiceDetails, id);
            if (ConnectionInvoiceDetailsupdate) {
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
        res.status(500).json({"message" : "Internal Server Error"});
    }
};

const updateConnection_Site_Details = async (req, res) => {
    try {
        let newConnection_Site_Detailsid = req.body;
        let id = req.params.id;
        if (Object.keys(newConnection_Site_Detailsid).length === 0 && !id) {
            res.status(404).json({
                "error": "Not Found"
            }
            );
        } else {
            const Connection_Site_Detailsupdate = await ConnectionSiteDetails.update(newConnection_Site_Detailsid, id);
            if (Connection_Site_Detailsupdate) {
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
        res.status(500).json({"message" : "Internal Server Error"});
    }
};

const FindConnnectionSiteDetails = async (req, res) => {
    try {
        let Con_Id = req.params.id;

        if (!Con_Id) {
            res.status(400).json({
                "message": "Bad request"
            });
        } else {
            const responce = await ConnectionSiteDetails.findbyid(Con_Id);
            // if (Object.keys(responce).length === 0) {
            //     res.status(200).json(responce);
            // } else {
            //     let row = new Object();
            //     Object.keys(responce).forEach((key) => {
            //         row = responce[key]
            //     });
            //     res.status(200).json(responce);
            // }
            res.status(200).json((responce.length > 0) ? responce[0] : {});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({"message" : "Internal Server Error"});
    }
};

const updateConnectionYourConnectionDate = async (req, res) => {
    try {
        let newConnectionYourConnectionDateid = req.body;
        let id = req.params.id;
        console.log(id);
        console.log(req.body);
        if (Object.keys(newConnectionYourConnectionDateid).length === 0 && !id) {
            res.status(404).send("Not Found");
        } else {
            const ConnectionYourConnectionDateupdate = await ConnectionYourConnectionDate.update(newConnectionYourConnectionDateid, id);
            if (ConnectionYourConnectionDateupdate) {
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
        res.status(500).json({"message" : "Internal Server Error"});
    }
};
const getConnectionYourConnectionDate = async (req, res) => {
    try {
        let Id = req.params.id;

        if (!Id) {
            res.status(400).json({
                "message": "Bad request"
            });
        } else {
            const responce = await ConnectionYourConnectionDate.findbyId(Id);
            // if (Object.keys(responce).length === 0) {
            //     res.status(404).json(responce);
            // } else {
            //     Object.keys(responce).forEach((key) => {
            //         let row = responce[key]
            //         res.status(200).json(responce);
            //     });
            // }
            res.status(200).json((responce.length > 0) ? responce: {});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({"message" : "Internal Server Error"})
    }
}
const updateconnectionprogression = async (req, res) => {
    try {
        let newconnectionprogression = req.body;
        // let id = req.params.id;
        if (Object.keys(newconnectionprogression).length === 0) {
            res.status(404).json({
                "error": "Not Found"
            }
            );
        } else {
            const updatebyid = await ConnectionProgression.update(newconnectionprogression);
            if (updatebyid) {
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
        res.status(500).json({"message" : "Internal Server Error"});
    }
};
const updateConnectionSiteInformation = async (req, res) => {
    try {
        let newConnectionSiteInformationid = req.body;
        let id = req.params.id;
        if (Object.keys(newConnectionSiteInformationid).length === 0 && !id) {
            res.status(404).json({
                "error": "Not Found"
            }
            );
        } else {
            const ConnectionSiteInformationupdate = await ConnectionSiteInformation.update(newConnectionSiteInformationid, id);
            if (ConnectionSiteInformationupdate) {
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
        res.status(500).json({"message" : "Internal Server Error"});
    }
};
const getConnectionSiteInformation = async (req, res) => {
    try {
        let Id = req.params.id;

        if (!Id) {
            res.status(400).json({
                "message": "Bad request"
            });
        } else {
            const responce = await ConnectionSiteInformation.findbyid(Id);
            // if (Object.keys(responce).length === 0) {
            //     res.status(404).json(responce);
            // } else {
            //     Object.keys(responce).forEach((key) => {
            //         let row = responce[key]
            //         res.status(200).json(row);
            //     });
            // }
            res.status(200).json((responce.length > 0) ? responce[0] : {});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({"message" : "Internal Server Error"})
    }
}

const createConnection_Site_Details = async (req, res) => {
    try {
        let newconnectionsitedetails = req.body;
        if (Object.keys(newconnectionsitedetails).length === 0) {
            res.status(404).json({
                "error": "Not Found"
            }
            );
        } else {
            const ConnectionSiteDetailsSave = await ConnectionSiteDetails.create(newconnectionsitedetails);
            if (ConnectionSiteDetailsSave) {
                res.status(201).json({
                    "message": "successfully added"
                });
            } else {
                res.status(400).json({
                    "error": "something went wrong"
                });
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({"message" : "Internal Server Error"});
    }
};
// Connection_Site_Owner_Details
const createConnection_Site_Owner_Details = async (req, res) => {

    try {
        let data = req.body;
        if (Object.keys(data).length === 0) {
            res.status(404).json({
                "error": "Not Found"
            }
            );
        }
        else {
            const ConnectionSiteOwnerDetailsSave = await ConnectionSiteOwnerDetails.create(data);

            if (ConnectionSiteOwnerDetailsSave) {
                res.status(201).json({
                    "message": "successfully added"
                });
            } else {
                res.status(400).json({
                    "error": "something went wrong"
                });
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({"message" : "Internal Server Error"});
    }
};
const updateConnection_Site_Owner_Details = async (req, res) => {

    try {
        let data = req.body;
        let job_id = req.params.id;
        console.log(data);
        console.log(job_id);

        if (Object.keys(data).length === 0 && !id) {
            res.status(404).json({
                "error": "Not Found"
            }
            );
        }
        else {
            const ConnectionSiteOwnerDetailsUpdate = await ConnectionSiteOwnerDetails.update(data, job_id);

            if (ConnectionSiteOwnerDetailsUpdate) {
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
        res.status(500).json({"message" : "Internal Server Error"});
    }
};
const getConnectionsiteownerdetails = async (req, res) => {
    try {
        let Id = req.params.id;

        if (!Id) {
            res.status(400).json({
                "message": "Bad request"
            });
        } else {
            const responce = await ConnectionSiteOwnerDetails.findbyid(Id);
            // if (Object.keys(responce).length === 0) {
            //     res.status(200).json(responce);
            // } else {
            //     Object.keys(responce).forEach((key) => {
            //         let row = responce[key]
            //         res.status(200).json(row);
            //     });
            // }
            res.status(200).json((responce.length > 0) ? responce[0] : {});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({"message" : "Internal Server Error"})
    }
}
const updateConnection_Types = async (req, res) => {
    try {
        let data = req.body;
        let id = req.params.id;

        if (Object.keys(data).length === 0) {
            res.status(404).json({
                "error": "Not Found"
            }
            );
        }
        else {
            const ConnectionTypeUpdate = await ConnectionTypes.update(data, id);

            if (ConnectionTypeUpdate) {
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
        res.status(500).json({"message" : "Internal Server Error"});
    }
}
// Connection_Multiple_Premises_Details
const createConnection_Multiple_Premises_Details = async (req, res) => {
    try {
        let data = req.body;
        console.log(data);
        let ConnectionMultiplePremisesDetailsSave = [];
        if (Object.keys(data).length === 0) {
            res.status(404).json({
                "error": "No record"
            }
            );
        } else {
            for (let index = 0; index < data.length; index++) {
                const responce = await ConnectionMultiplePremisesDetails.create(data[index]);
                ConnectionMultiplePremisesDetailsSave.push(responce);
            }
            if (ConnectionMultiplePremisesDetailsSave.length === data.length) {
                res.status(201).json({
                    "message": "successfully added"
                });
            }
            else {
                res.status(400).json({
                    "error": "something went wrong"
                });
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({"message" : "Internal Server Error"});
    }
}
const updateConnection_Multiple_Premises_Details = async (req, res) => {
    try {
        let data = req.body;
        console.log(data);
        const obj = JSON.stringify(data);
        console.log(obj);
        let job_id = req.params.id;
        if (Object.keys(data).length === 0) {
            res.status(404).json({
                "error": "Not Found"
            }
            );
        }
        else {
            let ConnectionMultiplePremisesDetailsUpdate = new Array();
            for (let i = 0; i < data.length; i++) {
                let { Id } = data[i];
                if (Id === null) {
                    const responce = await ConnectionMultiplePremisesDetails.create(data[i]);
                    ConnectionMultiplePremisesDetailsUpdate.push(responce);
                } else {
                    const responce = await ConnectionMultiplePremisesDetails.update(data[i]);
                    ConnectionMultiplePremisesDetailsUpdate.push(responce);
                }

            }
            if (ConnectionMultiplePremisesDetailsUpdate.length === data.length) {
                res.status(201).json({
                    "message": "successfully updated"
                });
            }
            else {
                res.status(400).json({
                    "error": "something went wrong"
                });
            }
        }
    } catch (error) {
        console.log(error);
    }
}
const getConnectioMultiplepremisedetails = async (req, res) => {
    try {
        let Id = req.params.id;

        if (!Id) {
            res.status(400).json({
                "message": "Bad request"
            });
        } else {
            const responce = await ConnectionMultiplePremisesDetails.findbyid(Id);
            // if (Object.keys(responce).length === 0) {
            //     res.status(404).json({
            //         "message": "Not Found"
            //     });
            // } else {
            // Object.keys(responce).forEach((key)=>{
            //  let row = responce[key]
            res.status(200).json((responce.length > 0) ? responce : {});
            //});
            // }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({"message" : "Internal Server Error"})
    }
}
const deleteConnectionMultiplepremisedetails = async (req, res) => {
    try {
        let Id = req.params.id;

        if (!Id) {
            res.status(400).json({
                "message": "Bad request"
            });
        } else {
            const responce = await ConnectionMultiplePremisesDetails.remove(Id);
            if (responce) {
                res.status(200).json({
                    message: `Successfully deleted for Id ${Id}`
                });
            } else {
                //Object.keys(responce).forEach((key)=>{
                //  let row = responce[key]
                res.status(404).json({
                    "message": `Id ${Id} Not Present`
                });
                //});
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({"message" : "Internal Server Error"});
    }
}

// Connection_Site_Contact_Details
const createConnection_Site_Contact_Details = async (req, res) => {
    try {
        let data = req.body;
        if (Object.keys(data).length === 0) {
            res.status(404).json({
                "error": "Not Found"
            }
            );
        }
        else {
            const ConnectionSiteContactDetailsSave = await ConnectionSiteContactDetails.create(data);

            if (ConnectionSiteContactDetailsSave) {
                res.status(201).json({
                    "message": "successfully added"
                });
            } else {
                res.status(400).json({
                    "error": "something went wrong"
                });
            }


        }
    } catch (error) {
        console.log(error);
        res.status(500).json({"message" : "Internal Server Error"});
    }
};
const updateConnection_Site_Contact_Details = async (req, res) => {

    try {
        let data = req.body;
        let job_id = req.params.id;

        if (Object.keys(data).length === 0) {
            res.status(404).json({
                "error": "Not Found"
            }
            );
        }
        else {
            const ConnectionSiteContactDetailsUpdate = await ConnectionSiteContactDetails.update(data, job_id);

            if (ConnectionSiteContactDetailsUpdate) {
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
        res.status(500).json({"message" : "Internal Server Error"});
    }
};
const getConnectionSiteContactDetails = async (req, res) => {
    try {
        let connectionid = req.params.id;

        if (!connectionid) {
            res.status(400).json({
                "message": "Bad request"
            });
        } else {
            const responce = await ConnectionSiteContactDetails.findbyConnectionId(connectionid);
            // if (Object.keys(responce).length === 0) {
            //     res.status(404).json({
            //         "message": "Not Found"
            //     });
            // } else {
            // Object.keys(responce).forEach((key) => {
            //     let row = responce[key]
            //     res.status(200).json(row);
            // });
            // }
            res.status(200).json((responce.length > 0) ? responce[0] : {});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({"message" : "Internal Server Error"})
        
    }
}

// Connection_Status
const updateConnection_Status = async (req, res) => {
    try {
        let data = req.body;
        let id = req.params.id;

        const results = await ConnectionStatus.update(data, id);
        res.status(201).json({
            data: results
        });
    } catch (error) {
        res.status(400).json({
            data: "Something went wrong"
        });
    }
}
const getConnectionStatus = async (req, res) => {
    try {
        // if (!constatus) {
        //     res.status(400).json({
        //         "message": "Bad request"
        //     });
        // } else {
        const responce = await ConnectionStatus.findall();
        // if (responce.length === 0) {
        //     res.status(404).json({
        //         "message": "Not Found"
        //     });
        // } else {

        res.status(200).json((responce.length > 0) ? responce[0] : {});
        // }
        // }
    } catch (error) {
        res.status(500).json({"message" : "Internal Server Error"});
    }
}
// Connection_Single_Installer_Detailss
const createConnection_Single_Installer_Details = async (req, res) => {
    try {
        let newconnectionsingleinstallerdetails = req.body;
        if (Object.keys(newconnectionsingleinstallerdetails).length === 0) {
            res.status(400).json({
                "error": "Bad request"
            })

        } else {
            let result = await ConnectionSingleInstallerDetails.save(newconnectionsingleinstallerdetails);
            if (result) {
                res.status(201).json({
                    "message": "Sucessfuully added"
                })

            } else {
                res.status(404).json({
                    "error": "Something went wrong"
                });
            }
        }
    } catch (error) {
        res.status(500).json({"message" : "Internal Server Error"});
    }
}

const updateConnection_Single_Installer_Details = async (req, res) => {
    try {
        let newconnectionsingleinstallerdetails = req.body;
        let id = req.params.id;
        if (Object.keys(newconnectionsingleinstallerdetails).length === 0 && !req.params.id) {
            res.status(400).json({
                "error": "Bad request"
            })

        } else {
            let result = await ConnectionSingleInstallerDetails.update(newconnectionsingleinstallerdetails, id);
            if (result) {
                res.status(201).json({
                    "message": "Sucessfuully updated"
                })

            } else {
                res.status(404).json({
                    "error": "Something went wrong"
                });
            }
        }
    } catch (error) {
        res.status(500).json({"message" : "Internal Server Error"});
    }
}
const getConnectionSingleInstallerDetails = async (req, res) => {
    try {
        let Id = req.params.id;

        if (!Id) {
            res.status(400).json({
                "message": "Bad request"
            });
        } else {
            const responce = await ConnectionSingleInstallerDetails.findbyId(Id);
            // if (Object.keys(responce).length === 0) {
            //     res.status(404).json({
            //         "message": "Not Found"
            //     });
            // } else {
            // Object.keys(responce).forEach((key) => {
            //     let row = responce[key]
            //     res.status(200).json(row);
            // });
            // }
            res.status(200).json((responce.length > 0) ? responce[0] : {});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({"message" : "Internal Server Error"});
    }
}
// Connection_Multiple_Installer_Details
const createConnection_Multiple_Installer_Details = async (req, res) => {
    try {
        let newconnectionmultipleinstallerdetails = req.body;
        if (Object.keys(newconnectionmultipleinstallerdetails).length === 0) {
            res.status(400).json({
                "error": "Bad request"
            })

        } else {
            let result = await ConnectionMultipleInstallerDetails.save(newconnectionmultipleinstallerdetails);
            if (result) {
                res.status(201).json({
                    "message": "Sucessfuully added"
                })

            } else {
                res.status(404).json({
                    "error": "Something went wrong"
                });
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({"message" : "Internal Server Error"});
    }
}

const updateConnection_Multiple_Installer_Details = async (req, res) => {
    try {
        let newconnectionmultipleinstallerdetails = req.body;
        let id = req.params.id;
        if (Object.keys(newconnectionmultipleinstallerdetails).length === 0 && !req.params.id) {
            res.status(400).json({
                "error": "Bad request"
            })

        } else {
            let result = await ConnectionMultipleInstallerDetails.update(newconnectionmultipleinstallerdetails, id);
            if (result) {
                res.status(201).json({
                    "message": "Sucessfuully updated"
                })

            } else {
                res.status(404).json({
                    "error": "Something went wrong"
                });
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({"message" : "Internal Server Error"});
    }
}
const getConnectionMultipleInstallerDetails = async (req, res) => {
    try {
        let Id = req.params.id;

        if (!Id) {
            res.status(400).json({
                "message": "Bad request"
            });
        } else {
            const responce = await ConnectionMultipleInstallerDetails.findbyId(Id);
            // if (Object.keys(responce).length === 0) {
            //     res.status(404).json({
            //         "message": "Not Found"
            //     });
            // } else {
            // Object.keys(responce).forEach((key) => {
            //     let row = responce[key]
            //     res.status(200).json(row);
            // });
            // }
            res.status(200).json((responce.length > 0) ? responce[0] : {});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({"message" : "Internal Server Error"});
    }
}
// Connection_Single_Premises_Details
const createConnection_Single_Premises_Details = async (req, res) => {
    try {
        let data = req.body;
        if (Object.keys(data).length === 0) {
            res.status(404).json({
                "error": "Not Found"
            }
            );
        }
        else {
            let ConnectionSinglePremisesDetailsSave = new Array();
            for (let i = 0; i < data.length; i++) {
                const responce = await ConnectionSinglePremisesDetails.create(data[i]);
                ConnectionSinglePremisesDetailsSave.push(responce);
            }

            if (ConnectionSinglePremisesDetailsSave.length === data.length) {
                res.status(201).json({
                    "message": "successfully added"
                });
            }
            else {
                res.status(400).json({
                    "error": "something went wrong"
                });
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({"message" : "Internal Server Error"});
    }
}
const updateConnection_Single_Premises_Details = async (req, res) => {
    console.log("step1");
    try {
        let data = req.body;
        console.log(data);
        let job_id = req.params.id;
        if (Object.keys(data).length === 0) {
            res.status(404).json({
                "error": "Not Found"
            }
            );
        }
        else {
            const ConnectionSinglePremisesDetailsUpdate = new Array();

            for (let index = 0; index < data.length; index++) {
                let { Id } = data[index];
                // console.log("step2");
                console.log((Id === null));
                if (Id === null) {
                    let result = await ConnectionSinglePremisesDetails.create(data[index]);
                    ConnectionSinglePremisesDetailsUpdate.push(result);
                } else {
                    let result = await ConnectionSinglePremisesDetails.update(data[index], Id, job_id);
                    ConnectionSinglePremisesDetailsUpdate.push(result);
                }

            }
            if (ConnectionSinglePremisesDetailsUpdate.length === data.length) {
                res.status(201).json({
                    "message": "successfully updated"
                });
            }
            else {
                res.status(400).json({
                    "error": "something went wrong"
                });
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({"message" : "Internal Server Error"});
    }
}
const getConnectionSinglepremisedetails = async (req, res) => {
    try {
        let Id = req.params.id;

        if (!Id) {
            res.status(400).json({
                "message": "Bad request"
            });
        } else {
            const responce = await ConnectionSinglePremisesDetails.findbyid(Id);
            // if (Object.keys(responce).length === 0) {
            //     res.status(404).json({
            //         "message": "Not Found"
            //     });
            // } else {
            //Object.keys(responce).forEach((key)=>{
            //  let row = responce[key]
            res.status(200).json((responce.length > 0) ? responce : {});
            //});
            // }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({"message" : "Internal Server Error"});
    }
}
const deleteConnectionSinglepremisedetails = async (req, res) => {
    try {
        let Id = req.params.id;

        if (!Id) {
            res.status(400).json({
                "message": "Bad request"
            });
        } else {
            const responce = await ConnectionSinglePremisesDetails.remove(Id);
            if (responce) {
                res.status(200).json({
                    message: `Successfully deleted for Id ${Id}`
                });
            } else {
                //Object.keys(responce).forEach((key)=>{
                //  let row = responce[key]
                res.status(404).json({
                    "message": `Id ${Id} Not Present`
                });
                //});
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({"message" : "Internal Server Error"});
    }
}
const createConnection_Your_Work_Date = async (req, res) => {
    try {
        let data = req.body;
        if (Object.keys(data).length === 0) {
            res.status(404).json({
                "error": "Not Found"
            }
            );
        }
        else {
            const ConnectionWorkDateSave = await ConnectionWorkDate.create(data);
            if (ConnectionWorkDateSave) {
                res.status(201).json({
                    "message": "successfully added"
                });
            }
            else {
                res.status(400).json({
                    "error": "something went wrong"
                });
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({"message" : "Internal Server Error"});
    }
}
const updateConnection_Your_Work_Date = async (req, res) => {
    try {
        let data = req.body;
        let con_id = req.params.id;
        if (Object.keys(data).length === 0) {
            res.status(404).json({
                "error": "Not Found"
            }
            );
        }
        else {
            const ConnectionWorkDateUpdate = await ConnectionWorkDate.update(data, con_id);
            if (ConnectionWorkDateUpdate) {
                res.status(201).json({
                    "message": "successfully updated"
                });
            }
            else {
                res.status(400).json({
                    "error": "something went wrong"
                });
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({"message" : "Internal Server Error"});
    }
}
const createConnection_Moving_Equipment = async (req, res) => {
    try {
        let data = req.body;
        if (Object.keys(data).length === 0) {
            res.status(400).json({
                "error": "Bad Request"
            }
            );
        }
        else {
            const ConnectionMovingEquipmentSave = await ConnectionMovingEquipment.create(data);
            if (ConnectionMovingEquipmentSave) {
                res.status(201).json({
                    "message": "successfully added"
                });
            }
            else {
                res.status(404).json({
                    "error": "Not Found"
                });
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({"message" : "Internal Server Error"});
    }

}
const updateConnection_Moving_Equipment = async (req, res) => {
    try {
        let data = req.body;
        let con_id = req.params.id;
        if (Object.keys(data).length === 0) {
            res.status(400).json({
                "error": "Bad request"
            }
            );
        }
        else {
            const ConnectionMovingEquipmentUpdate = await ConnectionMovingEquipment.update(data, con_id);
            if (ConnectionMovingEquipmentUpdate) {
                res.status(201).json({
                    "message": "successfully updated"
                });
            }
            else {
                res.status(404).json({
                    "error": "Not Found"
                });
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({"message" : "Internal Server Error"});
    }
}
const getConnectionMovingEquipment = async (req, res) => {
    try {
        let connectionid = req.params.id;

        if (!connectionid) {
            res.status(400).json({
                "message": "Bad request"
            });
        } else {
            const responce = await ConnectionMovingEquipment.findbyConnectionId(connectionid);
            // if (Object.keys(responce).length === 0) {
            //     res.status(200).json(responce);
            // } else {
                let row = new  Object()
                Object.keys(responce).forEach((key) => {
                    Object.assign(row, responce[key]);
                    const Equipment_Require_Movingarray = new Array();
                    const stringArray = row.Equipment_Require_Moving.split(',');
                    for (let i = 0; i < stringArray.length; i++) {
                        Equipment_Require_Movingarray.push(parseInt(stringArray[i]));
                    }
                    delete row.Equipment_Require_Moving;
                    row.Equipment_Require_Moving = Equipment_Require_Movingarray;
                });
                res.status(200).json((responce.length > 0) ? row : {});
            // }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({"message" : "Internal Server Error"});
    }
}
const getConnectionWorkDate = async (req, res) => {
    try {
        let connectionid = req.params.id;

        if (!connectionid) {
            res.status(400).json({
                "message": "Bad request"
            });
        } else {
            const responce = await ConnectionWorkDate.findbyid(connectionid);
            // if (Object.keys(responce).length === 0) {
            //     res.status(200).json({});
            // } else {
                //Object.keys(responce).forEach((key)=>{
                ///  let row = responce[key]
                res.status(200).json((responce.length > 0) ? responce : {});
                //});
            // }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({"message" : "Internal Server Error"});
    }
}
// Connection_Existing_Generation
const createConnection_Existing_Generation = async (req, res) => {
    try {
        let newConnectionexistinggeneration = req.body;
        if (Object.keys(newConnectionexistinggeneration).length === 0) {
            res.status(400).json({
                "error": "Bad request"
            })

        } else {
            let result = await ConnectionExistingGeneration.save(newConnectionexistinggeneration);
            if (result) {
                res.status(201).json({
                    "message": "Sucessfuully added"
                })

            } else {
                res.status(404).json({
                    "error": "Not Found"
                });
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({"message" : "Internal Server Error"});
    }
}

const updateConnection_Existing_Generation = async (req, res) => {
    try {
        let newConnectionexistinggeneration = req.body;
        let id = req.params.id;
        if (Object.keys(newConnectionexistinggeneration).length === 0 && !req.params.id) {
            console.log(!req.params.id);
            res.status(400).json({
                "error": "Bad request"
            })

        } else {
            let result = await ConnectionExistingGeneration.update(newConnectionexistinggeneration, id);
            if (result) {
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
        res.status(500).json({"message" : "Internal Server Error"});
    }
}
const getConnectionExistingGeneration = async (req, res) => {
    try {
        let Id = req.params.id;

        if (!Id) {
            res.status(400).json({
                "message": "Bad request"
            });
        } else {
            const responce = await ConnectionExistingGeneration.findbyId(Id);
            // if (Object.keys(responce).length === 0) {
            //     res.status(200).json(responce);
            // } else {
            //     //Object.keys(responce).forEach((key)=>{
            //     //  let row = responce[key]
            //     res.status(200).json(responce);
            //     //});
            // }
            res.status(200).json((responce.length > 0) ? responce : {});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({"message" : "Internal Server Error"});
    }
}
// Connection_Your_Connection
const createConnection_Your_Connection = async (req, res) => {
    try {
        let newconnectionyourconnection = req.body;
        if (Object.keys(newconnectionyourconnection).length === 0) {
            res.status(400).json({
                "error": "Bad request"
            });

        } else {
            let result = await ConnectionYourConnection.create(newconnectionyourconnection);
            if (result) {
                res.status(201).json({
                    "message": "Sucessfuully added"
                })

            } else {
                res.status(404).json({
                    "error": "Something went wrong"
                });
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({"message" : "Internal Server Error"});
    }
}
const updateConnection_Your_Connection = async (req, res) => {
    try {
        let newconnectionyourconnection = req.body;
        let id = req.params.id;
        if (Object.keys(newconnectionyourconnection).length === 0 && !req.params.id) {
            res.status(400).json({
                "error": "Bad request"
            })

        } else {
            let result = await ConnectionYourConnection.update(newconnectionyourconnection, id);
            if (result) {
                res.status(201).json({
                    "message": "Sucessfuully updated"
                })

            } else {
                res.status(404).json({
                    "error": "Something went wrong"
                });
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({"message" : "Internal Server Error"});
    }
}
const getConnectionYourConnection = async (req, res) => {
    try {
        let connectionid = req.params.id;

        if (!connectionid) {
            res.status(400).json({
                "message": "Bad request"
            });
        } else {
            const responce = await ConnectionYourConnection.findbyConnectionId(connectionid);
            let row = new Object();
            if (Object.keys(responce).length === 0) {
                res.status(200).json(responce);
            } else {
                Object.keys(responce).forEach((key) => {
                    row = responce[key]
                });

                let Poc_ContestableArary = new Array();
                const stringArray = row.Poc_Contestable.split(',');
                for (let i = 0; i < stringArray.length; i++) {
                    Poc_ContestableArary.push(parseInt(stringArray[i]));
                }
                let connectionYourConnection = new Object();
                delete row.Poc_Contestable;
                Object.assign(connectionYourConnection, row);
                connectionYourConnection.Poc_Contestable = Poc_ContestableArary;
                res.status(200).json(connectionYourConnection);
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({"message" : "Internal Server Error"});
    }
}
// Connection_Contact_Preference
const createConnection_Contact_Preference = async (req, res) => {
    try {
        let newconnectioncontactpreference = req.body;
        if (Object.keys(newconnectioncontactpreference).length === 0) {
            res.status(400).json({
                "error": "Bad request"
            })

        } else {
            let result = await ConnectionContactPreference.save(newconnectioncontactpreference);
            if (result) {
                res.status(201).json({
                    "message": "Sucessfuully added"
                })

            } else {
                res.status(404).json({
                    "error": "Not Found"
                });
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({"message" : "Internal Server Error"});
    }
}

const updateConnection_Contact_Preference = async (req, res) => {
    try {
        let newconnectioncontactpreference = req.body;
        let id = req.params.id;
        if (Object.keys(newconnectioncontactpreference).length === 0 && !req.params.id) {
            console.log(!req.params.id);
            res.status(400).json({
                "error": "Bad request"
            })

        } else {
            let result = await ConnectionContactPreference.update(newconnectioncontactpreference, id);
            if (result) {
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
        res.status(500).json({"message" : "Internal Server Error"});
    }
}
const getConnectionContactPreference = async (req, res) => {
    try {
        let Id = req.params.id;

        if (!Id) {
            res.status(400).json({
                "message": "Bad request"
            });
        } else {
            const responce = await ConnectionContactPreference.findbyId(Id);
            // if (Object.keys(responce).length === 0) {
            //     res.status(200).json(responce);
            // } else {
            //     //Object.keys(responce).forEach((key)=>{
            //     //  let row = responce[key]
            //     res.status(200).json(responce);
            //     //  console.log(responce);                
            //     //});
            // }
            res.status(200).json((responce.length > 0) ? responce : {});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({"message" : "Internal Server Error"});
    }
}

// connectionelectricalequipment
const createconnectionelectricalequipment = async (req, res) => {
    try {
        let responce = null;
        const electricHeaterData = req.body.electricHeaterData;
        const groundPumpData = req.body.groundPumpData;
        const airPumpData = req.body.airPumpData;
        const motorData = req.body.motorData;
        const welderData = req.body.welderData;
        const harmonicData = req.body.harmonicData;
        // try {
        const connectionelectricalequipment = new Object();
        connectionelectricalequipment.Connection_Id = req.body.Connection_Id;
        connectionelectricalequipment.Install_Electric_Heater = electricHeaterData.Install_Electric_Heater;
        connectionelectricalequipment.Install_Ground_Pump = groundPumpData.Install_Ground_Pump;
        connectionelectricalequipment.Install_Air_Pump = airPumpData.Install_Air_Pump
        connectionelectricalequipment.Install_Motor = motorData.Install_Motor
        connectionelectricalequipment.Install_Welder = welderData.Install_Welder
        connectionelectricalequipment.Install_Harmonic_Distortion = harmonicData.Install_Harmonic_Distortion
        if (Object.keys(connectionelectricalequipment).length === 0) {
            res.status(400).json({
                "error": "Bad request"
            });
        } else {
            responce = await ConnectionElectricalEquipment.save(connectionelectricalequipment);
            console.log(responce);
        }

        // } catch (error) {
        //     res.status(400).json({ message: "data insertion for Connection Electricalequipment unsuccessfull" })
        // }

        if (electricHeaterData.Install_Electric_Heater === true) {
            let ElectrictHeater = new Object();
            ElectrictHeater.Connection_Id = req.body.Connection_Id;
            ElectrictHeater.Electrical_Equipment_Id = responce;
            ElectrictHeater.No_Electric_Shower = electricHeaterData.No_Electric_Shower;
            ElectrictHeater.Load_Electric_Shower = electricHeaterData.Load_Electric_Shower;
            ElectrictHeater.No_Water_Heater = electricHeaterData.No_Water_Heater;
            ElectrictHeater.Load_Water_Heater = electricHeaterData.Load_Water_Heater;
            ElectrictHeater.No_Storage_Heater = electricHeaterData.No_Storage_Heater;
            ElectrictHeater.Load_Storage_Heater = electricHeaterData.Load_Storage_Heater;
            ElectrictHeater.No_DASH = electricHeaterData.No_DASH;
            ElectrictHeater.Load_DASH = electricHeaterData.Load_DASH;
            ElectrictHeater.No_Other_Heater = electricHeaterData.No_Other_Heater;
            ElectrictHeater.Load_Other_Heater = electricHeaterData.Load_Other_Heater;
            console.log(ElectrictHeater);
            if (Object.keys(ElectrictHeater).length === 0) {
                res.status(400).json({
                    "error": "Bad request"
                })
            } else {
                let result = await Electrict_Heater.save(ElectrictHeater);
                if (result) {
                    console.log("success for ElectrictHeater")
                }
            }

        } else {
            console.log("Electrical Heater Emplty");
        }
        if (groundPumpData.Install_Ground_Pump === true) {
            const FormArray = groundPumpData.pumpFormArray
            console.log(FormArray);
            for (let i = 0; i < groundPumpData.No_Ground_Pump; i++) {
                let groundpumpdata = new Object();
                groundpumpdata.Connection_Id = req.body.Connection_Id;
                groundpumpdata.Electrical_Equipment_Id = responce;
                groundpumpdata.No_Ground_Pump = i + 1;
                groundpumpdata.Phase_Ground_Pump = FormArray[i].Phase_Ground_Pump;
                groundpumpdata.Current_Ground_Pump = FormArray[i].Current_Ground_Pump;
                groundpumpdata.Rating_Ground_Pump = FormArray[i].Rating_Ground_Pump;
                groundpumpdata.Model_Ground_Pump = FormArray[i].Model_Ground_Pump;
                groundpumpdata.BS_BN_Ground_Pump = FormArray[i].BS_BN_Ground_Pump;
                console.log(groundpumpdata);
                let result = await GroundPumpData.save(groundpumpdata)
                if (result) {
                    console.log("success for Ground Pump data")
                }
            }
        } else {
            console.log("Ground pump data empty");
        }
        if (airPumpData.Install_Air_Pump === true) {
            let FormArray = airPumpData.airFormArray
            console.log(FormArray)
            for (let i = 0; i < airPumpData.No_Air_Pump; i++) {
                let airpumpdata = new Object();
                airpumpdata.Connection_Id = req.body.Connection_Id;
                airpumpdata.Electrical_Equipment_Id = responce;
                airpumpdata.No_Air_Pump = i + 1;
                airpumpdata.Phase_Air_Pump = FormArray[i].Phase_Air_Pump;
                airpumpdata.Current_Air_Pump = FormArray[i].Current_Air_Pump;
                airpumpdata.Rating_Air_Pump = FormArray[i].Rating_Air_Pump;
                airpumpdata.Model_Air_Pump = FormArray[i].Model_Air_Pump;
                airpumpdata.BS_BN_Air_Pump = FormArray[i].BS_BN_Air_Pump;
                console.log(airpumpdata);
                let result = await AirPumpData.save(airpumpdata)
                if (result) {
                    console.log("success for Air Pump data")
                }
            }
        } else {
            console.log("Air Pump data empty");
        }
        if (motorData.Install_Motor === true) {
            const FormArray = motorData.motorFormArray
            console.log(FormArray);
            for (let i = 0; i < motorData.No_Motor; i++) {
                let motordata = new Object();
                motordata.Connection_Id = req.body.Connection_Id;
                motordata.Electrical_Equipment_Id = responce;
                motordata.No_Motor = i + 1;
                motordata.Phase_Motor = FormArray[i].Phase_Motor;
                motordata.Type_Motor = FormArray[i].Type_Motor;
                motordata.Current_Motor = FormArray[i].Current_Motor;
                motordata.Rating_Motor = FormArray[i].Rating_Motor;
                motordata.Hourly_Motor_Start = FormArray[i].Hourly_Motor_Start;
                console.log(motordata);
                let result = await MotorData.save(motorData)
                if (result) {
                    console.log("success for Motor data")
                }
            }
        } else {
            console.log("Motor data empty");
        }
        if (welderData.Install_Welder === true) {
            const FormArray = welderData.welderFormArray
            console.log(FormArray);
            for (let i = 0; i < welderData.No_Welder; i++) {
                let welderdata = new Object();
                welderdata.Connection_Id = req.body.Connection_Id;
                welderdata.Electrical_Equipment_Id = responce;
                welderdata.No_Welder = i + 1;
                welderdata.Voltage_Welder = FormArray[i].Voltage_Welder;
                welderdata.Current_Welder = FormArray[i].Current_Welder;
                welderdata.Rating_Welder = FormArray[i].Rating_Welder;
                welderdata.Weld_Per_Minute = FormArray[i].Weld_Per_Minute;
                welderdata.Phase_Welder = FormArray[i].Phase_Welder;
                console.log(welderdata);
                let result = await WelderData.save(welderdata);
                if (result) {
                    console.log("success for welder data")
                }
            }
        } else {
            console.log("welder data empty");
        }
        if (harmonicData.Install_Harmonic_Distortion === true) {
            let harmonicdata = new Object();
            harmonicdata.Connection_Id = req.body.Connection_Id;
            harmonicdata.Electrical_Equipment_Id = responce;
            harmonicdata.Details_Harmonic_Distortion = harmonicData.Details_Harmonic_Distortion;
            harmonicdata.Harmonic_Data_Sheets = null;
            let result = await HarmonicData.save(harmonicdata);
            if (result) {
                console.log("success for Harmonic data");
            }
        } else {
            console.log("Harmonic data empty");
        }
        res.status(201).json({
            "message": "Sucessfuully added"
        });
    }
    catch (error) {
        res.status(500).json({"message" : "Internal Server Error"});
    }
};

const updateconnectionelectricalequipment = async (req, res) => {
    let newConnectionelectricalequipment = req.body;
    console.log(newConnectionelectricalequipment);
    let id = req.params.id;
    if (Object.keys(newConnectionelectricalequipment).length === 0 && !req.params.id) {
        res.status(400).json({
            "error": "Bad request"
        })

    } else {
        let responce = null;
        let track = true;
        const electricHeaterData = req.body.electricHeaterData;
        const groundPumpData = req.body.groundPumpData;
        const airPumpData = req.body.airPumpData;
        const motorData = req.body.motorData;
        const welderData = req.body.welderData;
        const harmonicData = req.body.harmonicData;

        const connectionelectricalequipment = new Object();
        connectionelectricalequipment.Id = req.body.Electrical_Equipment_Id;
        connectionelectricalequipment.Connection_Id = req.body.Connection_Id;
        connectionelectricalequipment.Install_Electric_Heater = electricHeaterData.Install_Electric_Heater;
        connectionelectricalequipment.Install_Ground_Pump = groundPumpData.Install_Ground_Pump;
        connectionelectricalequipment.Install_Air_Pump = airPumpData.Install_Air_Pump
        connectionelectricalequipment.Install_Motor = motorData.Install_Motor
        connectionelectricalequipment.Install_Welder = welderData.Install_Welder
        connectionelectricalequipment.Install_Harmonic_Distortion = harmonicData.Install_Harmonic_Distortion
        if (Object.keys(connectionelectricalequipment).length === 0) {
            res.status(400).json({
                "error": "Bad request"
            });
        } else {
            // console.log(connectionelectricalequipment);
            responce = await ConnectionElectricalEquipment.update(connectionelectricalequipment, id);
            if (responce) {
                track = true;
            } else {
                track = false
            }

        }

        // } catch (error) {
        //     res.status(400).json({ message: "data insertion for Connection Electricalequipment unsuccessfull" })
        // }

        if (electricHeaterData.Install_Electric_Heater === true || 1) {
            let ElectrictHeater = new Object();
            ElectrictHeater.Id = electricHeaterData.Id;
            ElectrictHeater.Connection_Id = id;
            ElectrictHeater.Electrical_Equipment_Id = req.body.Electrical_Equipment_Id;
            ElectrictHeater.No_Electric_Shower = electricHeaterData.No_Electric_Shower;
            ElectrictHeater.Load_Electric_Shower = electricHeaterData.Load_Electric_Shower;
            ElectrictHeater.No_Water_Heater = electricHeaterData.No_Water_Heater;
            ElectrictHeater.Load_Water_Heater = electricHeaterData.Load_Water_Heater;
            ElectrictHeater.No_Storage_Heater = electricHeaterData.No_Storage_Heater;
            ElectrictHeater.Load_Storage_Heater = electricHeaterData.Load_Storage_Heater;
            ElectrictHeater.No_DASH = electricHeaterData.No_DASH;
            ElectrictHeater.Load_DASH = electricHeaterData.Load_DASH;
            ElectrictHeater.No_Other_Heater = electricHeaterData.No_Other_Heater;
            ElectrictHeater.Load_Other_Heater = electricHeaterData.Load_Other_Heater;
            // console.log(ElectrictHeater);
            if (Object.keys(ElectrictHeater).length === 0) {
                res.status(400).json({
                    "error": "Bad request"
                })
            } else {
                let result = null;
                // console.log((ElectrictHeater.Id != null));
                if (ElectrictHeater.Id != null) {
                    result = await Electrict_Heater.update(ElectrictHeater);
                    if (result) {
                        track = true;
                    } else {
                        track = false
                    }
                } else {
                    console.log("Id not present");
                }

                if (result) {
                    console.log("success for ElectrictHeater")
                } else {
                    console.log("success for ElectrictHeater")
                }
            }
        } else {
            let result = await Electrict_Heater.remove(id);
            if (result) {
                track = true;
            } else {
                track = false;
            }
        }
        if (groundPumpData.Install_Ground_Pump === true || 1) {
            let arr = new Array();
            const FormArray = groundPumpData.pumpFormArray
            // console.log(FormArray);
            for (let i = 0; i < groundPumpData.No_Ground_Pump; i++) {
                let groundpumpdata = new Object();
                groundpumpdata.Connection_Id = id;
                groundpumpdata.Electrical_Equipment_Id = req.body.Electrical_Equipment_Id;
                groundpumpdata.No_Ground_Pump = i + 1;
                groundpumpdata.Id = FormArray[i].Id;
                groundpumpdata.Phase_Ground_Pump = FormArray[i].Phase_Ground_Pump;
                groundpumpdata.Current_Ground_Pump = FormArray[i].Current_Ground_Pump;
                groundpumpdata.Rating_Ground_Pump = FormArray[i].Rating_Ground_Pump;
                groundpumpdata.Model_Ground_Pump = FormArray[i].Model_Ground_Pump;
                groundpumpdata.BS_BN_Ground_Pump = FormArray[i].BS_BN_Ground_Pump;
                // console.log(groundpumpdata);
                if (groundpumpdata.Id != null) {
                    let result = await GroundPumpData.update(groundpumpdata);
                    arr.push(result)
                } else {
                    delete groundpumpdata.Id;
                    let result = await GroundPumpData.save(groundpumpdata);
                    arr.push(result)
                }

                if (arr.length === groundPumpData.No_Ground_Pump) {
                    console.log("success for Ground Pump data")
                    track = true;

                } else {
                    console.log("faied for Ground Pump data")
                    track = false;
                }
            }
        } else {
            let result = await GroundPumpData.remove(id);
            if (result) {
                track = true;
            } else {
                track = false
            }
        }

        if (airPumpData.Install_Air_Pump === true || 1) {
            let FormArray = airPumpData.airFormArray
            let responcearray = new Array();
            console.log(FormArray)
            for (let i = 0; i < airPumpData.No_Air_Pump; i++) {
                let airpumpdata = new Object();
                airpumpdata.Connection_Id = id;
                airpumpdata.Electrical_Equipment_Id = req.body.Electrical_Equipment_Id;
                airpumpdata.No_Air_Pump = i + 1;
                airpumpdata.Id = FormArray[i].Id;
                airpumpdata.Phase_Air_Pump = FormArray[i].Phase_Air_Pump;
                airpumpdata.Current_Air_Pump = FormArray[i].Current_Air_Pump;
                airpumpdata.Rating_Air_Pump = FormArray[i].Rating_Air_Pump;
                airpumpdata.Model_Air_Pump = FormArray[i].Model_Air_Pump;
                airpumpdata.BS_BN_Air_Pump = FormArray[i].BS_BN_Air_Pump;
                // console.log(airpumpdata);
                if (airpumpdata.Id != null) {
                    let result = await AirPumpData.update(airpumpdata);
                    responcearray.push(result)
                } else {
                    delete airpumpdata.Id;
                    let result = await AirPumpData.save(airpumpdata)
                    responcearray.push(result)
                }

                if (responcearray.length === airPumpData.No_Air_Pump) {
                    console.log("success for Air Pump data")
                    track = true;
                } else {
                    console.log("failed for Air Pump data")
                    track = false;
                }
            }
        } else {
            let result = await AirPumpData.remove(id);
            if (result) {
                track = true;
            } else {
                track = false
            }
        }
        if (motorData.Install_Motor === true || 1) {
            const FormArray = motorData.motorFormArray
            let responcearray = new Array();
            console.log(FormArray);
            for (let i = 0; i < motorData.No_Motor; i++) {

                let motordata = new Object();
                motordata.Connection_Id = id;
                motordata.Electrical_Equipment_Id = req.body.Electrical_Equipment_Id;
                motordata.No_Motor = i + 1;
                motordata.Id = FormArray[i].Id;
                motordata.Phase_Motor = FormArray[i].Phase_Motor;
                motordata.Type_Motor = FormArray[i].Type_Motor;
                motordata.Current_Motor = FormArray[i].Current_Motor;
                motordata.Rating_Motor = FormArray[i].Rating_Motor;
                motordata.Hourly_Motor_Start = FormArray[i].Hourly_Motor_Start;
                console.log(motordata);
                if (motordata.Id != null) {
                    let result = await MotorData.update(motordata)
                    responcearray.push(result)
                } else {
                    delete motordata.Id;
                    console.log("step motor");
                    let result = await MotorData.save(motordata);
                    responcearray.push(result)
                }

                if (responcearray.length = motorData.No_Motor) {
                    console.log("success for Motor data")
                    track = true;
                } else {
                    console.log("failed for Motor data")
                    track = false;
                }
            }
        } else {
            let result = await MotorData.remove(id);
            if (result) {
                track = true;
            } else {
                track = false
            }
        }
        if (welderData.Install_Welder === true || 1) {
            const FormArray = welderData.welderFormArray
            let responcearray = new Array();
            // console.log(FormArray);
            for (let i = 0; i < welderData.No_Welder; i++) {
                let welderdata = new Object();
                welderdata.Connection_Id = id;
                welderdata.Electrical_Equipment_Id = req.body.Electrical_Equipment_Id;
                welderdata.No_Welder = i + 1;
                welderdata.Id = FormArray[i].Id;
                welderdata.Voltage_Welder = FormArray[i].Voltage_Welder;
                welderdata.Current_Welder = FormArray[i].Current_Welder;
                welderdata.Rating_Welder = FormArray[i].Rating_Welder;
                welderdata.Weld_Per_Minute = FormArray[i].Weld_Per_Minute;
                welderdata.Phase_Welder = FormArray[i].Phase_Welder;
                // console.log(welderdata);
                if (welderdata.Id != null) {
                    let result = await WelderData.update(welderdata);
                    console.log("step")
                    responcearray.push(result)
                } else {
                    delete welderdata.Id;
                    let result = await WelderData.save(welderdata);
                    responcearray.push(result)
                }
                if (responcearray.length === welderData.No_Welder) {
                    console.log("success for welder data")
                    track = true;
                } else {
                    console.log(" failed for welder data")
                    track = false;
                }
            }
        } else {
            let result = await WelderData.remove(id);
            if (result) {
                track = true;
            } else {
                track = false
            }
        }
        if (harmonicData.Install_Harmonic_Distortion === true || 1) {
            console.log(harmonicData);
            let harmonicdata = new Object();
            harmonicdata.Connection_Id = id;
            harmonicdata.Electrical_Equipment_Id = req.body.Electrical_Equipment_Id;
            harmonicdata.Details_Harmonic_Distortion = harmonicData.Details_Harmonic_Distortion;
            harmonicdata.Harmonic_Data_Sheets = harmonicData.Harmonic_Data_Sheets;
            // console.log(harmonicdata);
            let result = await HarmonicData.update(harmonicdata, id);
            if (result) {
                console.log("success for Harmonic data")
                if (result) {
                    track = true;
                } else {
                    track = false
                }
            }
        } else {
            let result = await HarmonicData.remove(id);
            if (result) {
                track = true;
            } else {
                track = false
            }
        }
        if (track) {
            res.status(201).json({
                "message": "Sucessfuully updated"
            })

        } else {
            res.status(404).json({
                "error": "Not Found"
            });
        }
    }
}
const getConnectionElectricalEquipment = async (req, res) => {
    try {
        let connectionid = req.params.id;

        if (!connectionid) {
            res.status(400).json({
                "message": "Bad request"
            });
        } else {
            const connectionElectricalEquipment = new Object();

            const responce = await ConnectionElectricalEquipment.findbyConnectionId(connectionid);
            Object.keys(responce).forEach((key) => {
                let row = responce[key];
                Object.assign(connectionElectricalEquipment, row);
            });
            // console.log(responce);
            const ElectrictHeater = new Object();
            ElectrictHeater.Install_Electric_Heater = connectionElectricalEquipment.Install_Electric_Heater;
            if (connectionElectricalEquipment.Install_Electric_Heater) {
                const result = await Electrict_Heater.findbyConnectionId(connectionid);
                Object.keys(result).forEach((key) => {
                    let row = result[key];
                    Object.assign(ElectrictHeater, row);
                });
            }
            // console.log(ElectrictHeater);
            // let row1 = new Object();
            // Object.keys(ElectrictHeater).forEach((key) => {
            //     let row = ElectrictHeater[key];
            //     Object.assign(row1, row);
            // });
            // console.log(responce);
            // console.log(ElectrictHeater);
            let groundPumpData = new Object();
            if (connectionElectricalEquipment.Install_Ground_Pump) {
                const Ground_PumpData = await GroundPumpData.findbyConnectionId(connectionid)
                groundPumpData.Install_Ground_Pump = connectionElectricalEquipment.Install_Ground_Pump;
                groundPumpData.No_Ground_Pump = Ground_PumpData.length;
                groundPumpData.pumpFormArray = Ground_PumpData;
            }
            let airPumpData = new Object();
            if (connectionElectricalEquipment.Install_Air_Pump) {
                const Air_PumpData = await AirPumpData.findbyConnectionId(connectionid)
                console.log(Air_PumpData);
                airPumpData.Install_Air_Pump = connectionElectricalEquipment.Install_Air_Pump;
                airPumpData.No_Air_Pump = Air_PumpData.length;
                airPumpData.airFormArray = Air_PumpData;
            }
            let motorData = new Object();
            if (connectionElectricalEquipment.Install_Motor) {
                const Motor_PumpData = await MotorData.findbyConnectionId(connectionid)
                motorData.Install_Motor = connectionElectricalEquipment.Install_Motor;
                motorData.No_Motor = Motor_PumpData.length;
                motorData.motorFormArray = Motor_PumpData;
            }
            let welderData = new Object();
            if (connectionElectricalEquipment.Install_Welder) {
                const welder_PumpData = await WelderData.findbyConnectionId(connectionid)
                welderData.Install_Welder = connectionElectricalEquipment.Install_Welder;
                welderData.No_Welder = welder_PumpData.length;
                welderData.welderFormArray = welder_PumpData;
            }
            let Harmonic_Data = new Object();
            if (connectionElectricalEquipment.Install_Harmonic_Distortion) {
                const result = await HarmonicData.findbyConnectionId(connectionid);
                Object.keys(result).forEach((key) => {
                    let row = result[key];
                    // delete row.Electrical_Equipment_Id;
                    Object.assign(Harmonic_Data, row);
                });
                Harmonic_Data.Install_Harmonic_Distortion = connectionElectricalEquipment.Install_Harmonic_Distortion;
            }
            const ConnectionelectricalEquipment = new Object();
            ConnectionelectricalEquipment.Electrical_Equipment_Id = connectionElectricalEquipment.Id;
            ConnectionelectricalEquipment.electricHeaterData = ElectrictHeater;
            ConnectionelectricalEquipment.groundPumpData = groundPumpData;
            ConnectionelectricalEquipment.airPumpData = airPumpData;
            ConnectionelectricalEquipment.motorData = motorData;
            ConnectionelectricalEquipment.welderData = welderData;
            ConnectionelectricalEquipment.harmonicData = Harmonic_Data;
            // console.log(ConnectionelectricalEquipment);
            if (Object.keys(responce).length === 0) {
                res.status(200).json(responce);
            } else {
                //Object.keys(responce).forEach((key)=>{
                // let row = responce[key]
                res.status(200).json(ConnectionelectricalEquipment);
                //res.status(200).json(row);
                //});
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({"message" : "Internal Server Error"});
    }
}
const reducegroundpump = async (req, res) => {
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
        res.status(500).json({"message" : "Internal Server Error"});
    }
}
const reduceairpump = async (req, res) => {
    try {
        let Id = req.params.id;

        if (!Id) {
            res.status(400).json({
                "message": "Bad request"
            });
        } else {
            const responce = await AirPumpData.reduce(Id);
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
        res.status(500).json({"message" : "Internal Server Error"});
    }
}
const reducemotor = async (req, res) => {
    try {
        let Id = req.params.id;

        if (!Id) {
            res.status(400).json({
                "message": "Bad request"
            });
        } else {
            const responce = await MotorData.reduce(Id);
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
        res.status(500).json({"message" : "Internal Server Error"});
    }
}
const reducewelder = async (req, res) => {
    try {
        let Id = req.params.id;

        if (!Id) {
            res.status(400).json({
                "message": "Bad request"
            });
        } else {
            const responce = await WelderData.reduce(Id);
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
        res.status(500).json({"message" : "Internal Server Error"});
    }
}
const getConnectionProgression = async (req, res) => {
    try {
        // let id = req.params.id;

        // if (!id) {
        //     res.status(400).json({
        //         "message": "Bad request"
        //     });
        // } else {
        const responce = await ConnectionProgression.findall();
        if (responce.length === 0) {
            res.status(200).json(responce);
        } else {
            // Object.keys(responce).forEach((key) => {
            // let row = responce[key]
            res.status(200).json(responce);
            // });
        }
        // }
    } catch (error) {
        console.log(error);
        res.status(500).json({"message" : "Internal Server Error"});
    }
}
// ConnectionAdditionalInformation
const createConnectionAdditionalInformation = async (req, res) => {
    try {
        let data = req.body;
        if (Object.keys(data).length === 0) {
            res.status(404).json({
                "error": "Not Found"
            }
            );
        } else {
            const result = await ConnectionAdditionalInformation.save(data);
            if (result) {
                res.status(201).json({
                    "message": "successfully added"
                });
            } else {
                res.status(400).json({
                    "error": "something went wrong"
                });
            }
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({"message" : "Internal Server Error"});
    }
};
const updateConnectionAdditionalInformation = async (req, res) => {
    try {
        let data = req.body;
        let id = req.params.id;
        if (Object.keys(data).length === 0 && !id) {
            res.status(404).json({
                "error": "Not Found"
            }
            );
        } else {
            const result = await ConnectionAdditionalInformation.update(data, id);
            if (result) {
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
        res.status(500).json({"message" : "Internal Server Error"});
    }
};

const getConnectionAdditionalInformation = async (req, res) => {
    try {
        let Id = req.params.id;

        if (!Id) {
            res.status(400).json({
                "message": "Bad request"
            });
        } else {
            const responce = await ConnectionAdditionalInformation.findbyConnectionId(Id);
            // const filename = await getFileDetails(responce[0].Current_Upload_Additionalinfo)
            if (Object.keys(responce).length == 0) {
                res.status(200).json({});
            } else {
                let row = responce[0];
                row.File_Name = await getFileDetails(responce[0].Current_Upload_Additionalinfo);
                res.status(200).json(row);
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({"message" : "Internal Server Error"});
    }
}
//connectionsiteplan
const getConnectionSitePlan = async (req, res) => {
    try {
        let Connection_Id = req.params.Id;


        if (!Connection_Id) {
            res.status(400).json({
                "message": "Bad request"
            });
        } else {
            let result = new Object();
            const response = await ConnectionSitePlan.findbyId(Connection_Id);
            if (Object.keys(response).length == 0) {
                res.status(200).json({});
            } else {
                Object.keys(response).forEach((key) => {
                    let row = response[key]
                    result.Connection_Id = row.Connection_Id;
                    result.SiteData = row.Connection_Mapdata_Sitedata;
                    result.SiteId = row.SiteId;
                    //console.log(result.SiteData);
                    result.SiteData = JSON.parse(result.SiteData);
                    if (row.Connection_Mapdata_Upload1 === row.filebaseId) {
                        result.FileNameUpload1 = row.FileName;
                        result.FileBaseId1 = row.filebaseId;
                    }
                    if (row.Connection_Mapdata_Upload2 === row.filebaseId) {
                        result.FileNameUpload2 = row.FileName;
                        result.FileBaseId2 = row.filebaseId;
                    }
                    if (row.Connection_Mapdata_Upload3 === row.filebaseId) {
                        result.FileNameUpload3 = row.FileName;
                        result.FileBaseId3 = row.filebaseId;
                    }
                    if (row.Connection_Mapdata_Upload4 === row.filebaseId) {
                        result.FileNameUpload4 = row.FileName;
                        result.FileBaseId4 = row.filebaseId;
                    }
                    if (row.Connection_Mapdata_Upload5 === row.filebaseId) {
                        result.FileNameUpload5 = row.FileName;
                        result.FileBaseId5 = row.filebaseId;
                    }
                });
            }
            res.status(200).json(result);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({"message" : "Internal Server Error"});
    }
}

const createConnectionSitePlan = async (req, res) => {
    try {
        let data = req.body;

        data.Connection_Mapdata_Sitedata = JSON.stringify(data.Connection_Mapdata_Sitedata);

        let response;
        if (Object.keys(data).length === 0) {
            res.status(400).json({
                "error": "Not found"
            });
        } else {
            if (data.SiteId != null) {
                data.Id = data.SiteId;
                delete data.SiteId;
                data.Modified = new Date();
                response = await ConnectionSitePlan.update(data);
            }
            else {

                delete data.SiteId;
                data.Created = new Date();
                response = await ConnectionSitePlan.create(data);
            }

            if (response) {
                console.log(response);
                res.status(201).json({

                    "message": (response.insertId > 0) ? "Sucessfully Created" : "Successfully updated"
                })

            } else {
                res.status(404).json({
                    "error": "something went wrong"
                });
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({"message" : "Internal Server Error"});
    }
}

const updateConnectionSitePlan = async (req, res) => {
    try {
        let data = req.body;
        let id = req.params.Id;
        data.Modified = new Date();
        if (Object.keys(data).length === 0 && !id) {
            res.status(404).json({
                "error": "Not Found"
            }
            );
        } else {
            const result = await ConnectionSitePlan.update(data, id);
            if (result) {
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
        res.status(500).json({"message" : "Internal Server Error"});
    }
};



export {
    createConnection_Jobs, updateConnection_Jobs, getConnectionJob,
    createConnection_Site_Details, updateConnection_Site_Details, FindConnnectionSiteDetails,
    createConnectionInvoiceDetails,
    creatConnectionSiteInformation, updateConnectionSiteInformation, getConnectionSiteInformation,
    creatConnectionYourConnectionDate, updateConnectionYourConnectionDate, getConnectionYourConnectionDate,
    updateConnectionInvoiceDetails, getConnectionInvoiceDetails,
    createConnection_Site_Owner_Details, updateConnection_Site_Owner_Details, getConnectionsiteownerdetails,
    createConnection_Site_Contact_Details, updateConnection_Site_Contact_Details, getConnectionSiteContactDetails,
    createConnection_Single_Installer_Details, updateConnection_Single_Installer_Details, getConnectionSingleInstallerDetails,
    createConnection_Multiple_Installer_Details, updateConnection_Multiple_Installer_Details, getConnectionMultipleInstallerDetails,
    createConnection_Single_Premises_Details, updateConnection_Single_Premises_Details, getConnectionSinglepremisedetails, deleteConnectionSinglepremisedetails,
    createConnection_Multiple_Premises_Details, updateConnection_Multiple_Premises_Details, getConnectioMultiplepremisedetails, deleteConnectionMultiplepremisedetails,
    createConnection_Your_Work_Date, updateConnection_Your_Work_Date, getConnectionWorkDate,
    createConnection_Moving_Equipment, updateConnection_Moving_Equipment, getConnectionMovingEquipment,
    createConnection_Existing_Generation, updateConnection_Existing_Generation, getConnectionExistingGeneration,
    createConnection_Your_Connection, updateConnection_Your_Connection, getConnectionYourConnection,
    createConnection_Contact_Preference, updateConnection_Contact_Preference, getConnectionContactPreference,
    createconnectionelectricalequipment, updateconnectionelectricalequipment, getConnectionElectricalEquipment,
    reducegroundpump, reduceairpump, reducemotor, reducewelder,
    createConnectionAdditionalInformation, updateConnectionAdditionalInformation, getConnectionAdditionalInformation,
    updateconnectionprogression, getConnectionProgression,
    updateConnection_Types, updateConnection_Status, getConnectionStatus, getConnectionSitePlan, createConnectionSitePlan, updateConnectionSitePlan
}; 
