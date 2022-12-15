import express from "express";
import {singleUpload} from '../middelware/upload.js'
import uploadController from "../controller/uploadController.js";
import {
    createConnection_Site_Details, createConnection_Jobs, getConnectionJob, createConnectionInvoiceDetails,
    creatConnectionYourConnectionDate,updateConnection_Jobs, updateConnection_Site_Details,
    updateConnectionInvoiceDetails, getConnectionInvoiceDetails, updateConnectionYourConnectionDate, getConnectionYourConnectionDate,
    creatConnectionSiteInformation, updateConnectionSiteInformation, getConnectionSiteInformation,getConnectionStatus,
    createConnection_Site_Owner_Details, updateConnection_Site_Owner_Details, getConnectionsiteownerdetails,
    createConnection_Site_Contact_Details, updateConnection_Site_Contact_Details, getConnectionSiteContactDetails,
    createConnection_Single_Installer_Details, updateConnection_Single_Installer_Details, getConnectionSingleInstallerDetails,
    createConnection_Multiple_Installer_Details, updateConnection_Multiple_Installer_Details, getConnectionMultipleInstallerDetails,
    createConnection_Single_Premises_Details, updateConnection_Single_Premises_Details, getConnectionSinglepremisedetails,deleteConnectionSinglepremisedetails,
    createConnection_Multiple_Premises_Details, updateConnection_Multiple_Premises_Details, getConnectioMultiplepremisedetails,deleteConnectionMultiplepremisedetails,
    createConnection_Your_Work_Date, updateConnection_Your_Work_Date, getConnectionWorkDate,
    createConnection_Moving_Equipment, updateConnection_Moving_Equipment, getConnectionMovingEquipment,
    createConnection_Existing_Generation, updateConnection_Existing_Generation, getConnectionExistingGeneration,
    createConnection_Your_Connection, updateConnection_Your_Connection, getConnectionYourConnection,
    createConnection_Contact_Preference, updateConnection_Contact_Preference, getConnectionContactPreference,
    createConnectionAdditionalInformation , updateConnectionAdditionalInformation , getConnectionAdditionalInformation,
    FindConnnectionSiteDetails,
    createconnectionelectricalequipment, updateconnectionelectricalequipment, getConnectionElectricalEquipment,
    reducegroundpump,reduceairpump,reducemotor,reducewelder,
    getConnectionProgression,getConnectionSitePlan,createConnectionSitePlan,updateConnectionSitePlan
} from "../controller/connectionController.js";

import {
    createConnection_New_Generation, updateConnection_New_Generation, getConnectionNewGeneration,
    CreateConnection_New_Generation_3_68kws, getConnection_New_Generation_3_68kws, updateConnection_New_Generation_3_68kw,reduceConnection_New_Generation_3_68kws,
    createConnectionNewGenerationKWMW, updateConnectionNewGenerationKWMW, getConnectionNewGenerationKWMW,reduceConnection_New_Generation_KW_MW,
    createConnection_New_Generation_200kw, updateConnection_New_Generation_200kw, getConnection_New_Generation_200kw,reduceConnection_New_Generation_200kw
} from "../controller/Connection_New_Generation_Controller.js";
import {ConnectionTypesController,connectionTypesController} from "../controller/Connection_type_controller.js";
import usemyaddress from "../controller/customerController.js";
import {getConnectionList,PaginatedResult} from '../controller/getConnectionListController.js'
import {saveJobNote,getJobNote} from "../controller/connectionJobNoteController.js";
// import mapservice from "../services/siteplanMapService.js";
const router = express.Router();
// connection_Jobs
router.post('/connection_Jobs', createConnection_Jobs);
router.put('/connection_Jobs/:id', updateConnection_Jobs);
router.get('/connection_Jobs/:id', getConnectionJob);
// Connection_Site_Details
router.post('/connectionJob/Connection_Site_Details', createConnection_Site_Details);
router.put('/connectionJob/Connection_Site_Details/:id', updateConnection_Site_Details);
router.get('/connectionJob/Connection_Site_Details/:id', FindConnnectionSiteDetails)
// Connection_invoice_Details
router.post('/connection_Jobs/Connection_invoice_Details', createConnectionInvoiceDetails);
router.put('/connectionJob/Connection_invoice_Details/:id', updateConnectionInvoiceDetails);
router.get('/connectionJob/Connection_Invoice_Details/:id', getConnectionInvoiceDetails);
// Connection_Site_Information
router.post('/connection_Jobs/Connection_Site_Information', creatConnectionSiteInformation);
router.put('/connection_Jobs/Connection_Site_Information/:id', updateConnectionSiteInformation);
router.get('/connection_Jobs/Connection_Site_Information/:id', getConnectionSiteInformation);
// Connection_Your_Connection_Date
router.post('/connection_Jobs/Connection_Your_Connection_Date', creatConnectionYourConnectionDate);
router.put('/connectionJob/Connection_Your_Connection_Date/:id', updateConnectionYourConnectionDate);
router.get('/connectionJob/Connection_Your_Connection_Date/:id', getConnectionYourConnectionDate);
// Connection_Site_Owner_Details
router.post('/connectionJob/Connection_Site_Owner_Details', createConnection_Site_Owner_Details);
router.put('/connectionJob/Connection_Site_Owner_Details/:id', updateConnection_Site_Owner_Details);
router.get('/connectionJob/Connection_Site_Owner_Details/:id', getConnectionsiteownerdetails);
// Connection_Site_Contact_Details
router.post('/connectionJob/Connection_Site_Contact_Details', createConnection_Site_Contact_Details);
router.put('/connectionJob/Connection_Site_Contact_Details/:id', updateConnection_Site_Contact_Details);
router.get('/connectionJob/Connection_Site_Contact_Details/:id', getConnectionSiteContactDetails);
// Connection_Single_Installer_Details
router.post('/connectionJob/Connection_Single_Installer_Details', createConnection_Single_Installer_Details);
router.put('/connectionJob/Connection_Single_Installer_Details/:id', updateConnection_Single_Installer_Details);
router.get('/connectionJob/Connection_Single_Installer_Details/:id', getConnectionSingleInstallerDetails);
// Connection_Multiple_Installer_Details
router.post('/connectionJob/Connection_Multiple_Installer_Details', createConnection_Multiple_Installer_Details);
router.put('/connectionJob/Connection_Multiple_Installer_Details/:id', updateConnection_Multiple_Installer_Details);
router.get('/connectionJob/Connection_Multiple_Installer_Details/:id', getConnectionMultipleInstallerDetails);
// Connection_Single_Premises_Details
router.post('/connectionJob/Connection_Single_Premises_Details', createConnection_Single_Premises_Details);
router.put('/connectionJob/Connection_Single_Premises_Details/:id', updateConnection_Single_Premises_Details);
router.get('/connectionJob/Connection_Single_Premises_Details/:id', getConnectionSinglepremisedetails);
router.delete('/connectionJob/Connection_Single_Premises_Details/:id', deleteConnectionSinglepremisedetails);
// Connection_Multiple_Premises_Details
router.post('/connectionJob/Connection_Multiple_Premises_Details', createConnection_Multiple_Premises_Details);
router.put('/connectionJob/Connection_Multiple_Premises_Details/:id', updateConnection_Multiple_Premises_Details);
router.get('/connectionJob/Connection_Multiple_Premises_Details/:id', getConnectioMultiplepremisedetails);
router.delete('/connectionJob/Connection_Multiple_Premises_Details/:id',deleteConnectionMultiplepremisedetails)
// Connection_Your_Work_Date
router.post('/connectionJob/Connection_Your_Work_Date', createConnection_Your_Work_Date);
router.put('/connectionJob/Connection_Your_Work_Date/:id', updateConnection_Your_Work_Date);
router.get('/connectionJob/Connection_Your_Work_Date/:id', getConnectionWorkDate);
// Connection_Moving_Equipment
router.post('/connectionJob/Connection_Moving_Equipment', createConnection_Moving_Equipment);
router.put('/connectionJob/Connection_Moving_Equipment/:id', updateConnection_Moving_Equipment);
router.get('/connectionJob/Connection_Moving_Equipment/:id', getConnectionMovingEquipment);
// Connection_Existing_Generation
router.post('/connectionJob/Connection_Existing_Generation', createConnection_Existing_Generation);
router.put('/connectionJob/Connection_Existing_Generation/:id', updateConnection_Existing_Generation);
router.get('/connectionJob/Connection_Existing_Generation/:id', getConnectionExistingGeneration);
// Connection_Your_Connection
router.post('/connectionJob/Connection_Your_Connection', createConnection_Your_Connection);
router.put('/connectionJob/Connection_Your_Connection/:id', updateConnection_Your_Connection);
router.get('/connectionJob/Connection_Your_Connection/:id', getConnectionYourConnection);
// Connection_Contact_Preference
router.post('/connectionJob/Connection_Contact_Preference', createConnection_Contact_Preference);
router.put('/connectionJob/Connection_Contact_Preference/:id', updateConnection_Contact_Preference);
router.get('/connectionJob/Connection_Contact_Preference/:id', getConnectionContactPreference);
// Connection_Electrical_Equipment
router.post('/connectionJob/Connection_Electrical_Equipment', createconnectionelectricalequipment);
router.put('/connectionJob/Connection_Electrical_Equipment/:id', updateconnectionelectricalequipment);
router.get('/connectionJob/Connection_Electrical_Equipment/:id', getConnectionElectricalEquipment);
router.delete('/connectionJob/Connection_Electrical_Equipment/GroundPump/:id',reducegroundpump);
router.delete('/connectionJob/Connection_Electrical_Equipment/AirPump/:id',reduceairpump);
router.delete('/connectionJob/Connection_Electrical_Equipment/Motor/:id', reducemotor);
router.delete('/connectionJob/Connection_Electrical_Equipment/Welder/:id', reducewelder);
// Connection_New_Generation
router.post('/connectionJob/Connection_New_Generation', createConnection_New_Generation);
router.put('/connectionJob/Connection_New_Generation/:id', updateConnection_New_Generation);
router.get('/connectionJob/Connection_New_Generation/:id', getConnectionNewGeneration);
// Connection_New_Generation_3_68kw_Eng_Storage
// router.post('/connectionJob/Connection_New_Generation_3_68kw_Eng_Storage', createConnectionNewGeneration3_68kwEngStorage);
// router.get('/connectionJob/Connection_New_Generation_3_68kw_Eng_Storage/:id', getConnectionNewGeneration3_68kwEngStorage);
// Connection_New_Generation_3_68kws
router.post('/connectionJob/Connection_New_Generation_3_68kw', CreateConnection_New_Generation_3_68kws)
router.get('/connectionJob/Connection_New_Generation_3_68kw/:id', getConnection_New_Generation_3_68kws)
router.put('/connectionJob/Connection_New_Generation_3_68kw/:id',updateConnection_New_Generation_3_68kw);
router.delete('/connectionJob/Connection_New_Generation_3_68kw/:id', reduceConnection_New_Generation_3_68kws);
// Connection_New_Generation_200kw
router.post('/connectionJob/Connection_New_Generation_200kw', createConnection_New_Generation_200kw);
router.put('/connectionJob/Connection_New_Generation_200kw/:id', updateConnection_New_Generation_200kw);
router.get('/connectionJob/Connection_New_Generation_200kw/:id', getConnection_New_Generation_200kw);
router.delete('/connectionJob/Connection_New_Generation_200kw/:id', reduceConnection_New_Generation_200kw);
// Connection_New_Generation_KW_MW
router.post('/connectionJob/Connection_New_Generation_KW_MW', createConnectionNewGenerationKWMW);
router.put('/connectionJob/Connection_New_Generation_KW_MW/:id', updateConnectionNewGenerationKWMW);
router.get('/connectionJob/Connection_New_Generation_KW_MW/:id', getConnectionNewGenerationKWMW);
router.delete('/connectionJob/Connection_New_Generation_KW_MW/:id', reduceConnection_New_Generation_KW_MW);
// Connection_Progression
router.get('/Connection_Progression', getConnectionProgression);
// router.put('/connectionJob/Connection_Progression', updateconnectionprogression);
// connection_Status
// router.put('/connection_Status/:id', updateConnection_Status);
router.get('/connection_Status', getConnectionStatus);
// Connection_Type
router.get('/connectionJob/Connection_Type/:Connection_Type', ConnectionTypesController);
// router.put('/Connection_Types/:id', updateConnection_Types);
// ConnectionAdditionalInformation
router.post('/connectionJob/ConnectionAdditionalInformation',createConnectionAdditionalInformation);
router.put('/connectionJob/ConnectionAdditionalInformation/:id',updateConnectionAdditionalInformation ); 
router.get('/connectionJob/ConnectionAdditionalInformation/:id',getConnectionAdditionalInformation);
//ConnectionSitePlan
router.get('/connectionJob/Connection_Site_Plan/:Id',getConnectionSitePlan);
router.put('/connectionJob/Connection_Site_Plan',createConnectionSitePlan);
//router.put('/connectionJob/Connection_Site_Plan/:Id',updateConnectionSitePlan)


// Upload File 
router.post('/upload',singleUpload,uploadController);


//USE MY CORRESPONDENCE ADDRESS
router.get('/connectionJob/Use_Correspondence_Address', usemyaddress);
// router.get('/map', mapservice);

router.get('/connectionJob/Connection_Type', connectionTypesController);

// Search Connection
router.post('/getConnection',getConnectionList)
// Connection Job Note
router.post('/connectionJob/connectioJobNote',saveJobNote);
router.get('/connectionJob/connectioJobNote',getJobNote);
export default router;