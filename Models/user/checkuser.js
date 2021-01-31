const pool = require("../../config/database");

const express = require("express");

const router = express.Router();

//http://localhost:5000/user/checkuser?email=dilan&password=678&deviceid=PPR1.180610.011

 router.get('/checkuser',async(req,res)=>{

    
    var email = req.query.email;
    var pass = req.query.password;
    var device = req.query.deviceid;
   let user_sql = "SELECT * FROM user WHERE email = '"+email+"' AND password = '"+pass+"'";
    let userlog_sql = "SELECT device_id FROM user_login WHERE email = ?";
    let query =   pool.query(user_sql,[email,pass],(err,users)=>{
      if(err){
            res.send("901");
            console.log(err);
      }
      else{
        
            if(users.length >0){

               console.log("email and password is correct");

               

                let chekquery =  pool.query(userlog_sql,[email],(err2,userlogs)=>{
                    if(err2){
                        res.send("901");
                        console.log(err2);
                    }else{
                        //check device is already in the user logs
                        if(userlogs.length >0){ 

                            
                            console.log("registered user");
                            //check device id matches with the registered email

                            if(device==userlogs[0].device_id){
                                res.send("100");
                                console.log("same device OK");

                            }else{
                                //same email with new device
                                res.send("101");
                                console.log("unauthorized new device");
                            }
                        //new user
                        }else{
                        res.send("100");
                        console.log("new user OK");
                        }
                    }

                });


              
            }
            else{
            res.send("104");
            console.log("email password incorrect ");
            
            }
        }

            var r = String(users);
            console.log(r);
    });


       //res.sendStatus(200);

    });


   

    module.exports =router; 