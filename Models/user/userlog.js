const pool = require("../../config/database");

const express = require("express");

const router = express.Router();

//http://localhost:5000/logindetails?email=aaa&deviceid=aaa&android=aaa&brand=aaa&model=aaa&date=aaa

router.get('/',async(req,res)=>{

    var email = req.query.email;
    var deviceid = req.query.deviceid;
    var android = req.query.android;
    var brand = req.query.brand;
    var model = req.query.model;
    var datetime = req.query.date;
 

    var sql = "INSERT INTO user_login (android_id, brand, date_time, device_id,email,model) VALUES (?,?,?,?,?,?)";

    let query = pool.query(sql,[android,brand,datetime,deviceid,email,model],(err,result)=>{

        if(err){
            console.log(err);
            res.send("db error");

        }else{
            
            res.send("log added");
        }
    });

   
});


module.exports = router;