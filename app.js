require("dotenv").config();

const express = require("express");

const mysql = require("mysql");

const pool = require("./config/database");

const userRoutes = require("./Models/user/checkuser");

const userLogs = require("./Models/user/userlog");

const traindetails = require("./Models/Train details/trains");

const shedules = require("./Models/train shedule/shedule");


const app = express();



app.use('/api/user',userRoutes );

app.use('/api/logindetails',userLogs);

app.use('/api/traindetails',traindetails);

app.use('/api/shedules',shedules);

app.get("/api",(req,res)=>{
    res.send("this is working")

});







app.listen(5000,()=>{
    console.log("server is running");
});