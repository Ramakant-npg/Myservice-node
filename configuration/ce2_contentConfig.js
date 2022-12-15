import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config();

const connectionDB = mysql.createConnection({
    host : process.env.RDS_HOST,
    user : process.env.RDS_USER,
    port : process.env.RDS_PORT,
    password : process.env.RDS_PASSWORD,
    database : process.env.RDS_DATABASE
});



export default connectionDB;
