import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './api/connectionRoutes.js';
import connectionDB from './configuration/ce2_contentConfig.js'
dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;
const host = process.env.serverhost;
// Midelware
app.use(cors());
// app.use(express.json);
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded);

// Router
app.use(router);

// DB Connection
connectionDB.connect((error)=>{
    if(error) throw error;
    console.log("Connected with DB!");
});

// Error Handeler
// app.use((err , req , res , next)=>{
//     const statusCode = err.statusCode || 500;
//     res.status(statusCode).json({
//         success : 0,
//         message : err.message
//     })
// });

// Application port
app.listen(PORT , (error)=>{
    if(!error)
    console.log(`Application is success running on http://${host}:${PORT}`);
    else
    console.log(error);
});

app.get('/' , (req , res)=>{
    res.send("Welocome");
});