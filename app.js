require("dotenv").config();

const express = require("express");

const mysql = require("mysql");

const pool = require("./config/database");

const userRoutes = require("./Models/user/checkuser");

const userLogs = require("./Models/user/userlog");

const traindetails = require("./Models/Train details/trains");

const shedules = require("./Models/train shedule/shedule");


const app = express();


app.use('/user',userRoutes );

app.use('/logindetails',userLogs);

app.use('/traindetails',traindetails);

app.use('/shedules',shedules);

app.get("/",(req,res)=>{
    res.send("this is working")

});







app.listen(5000,()=>{
    console.log("server is running");
});