const pool = require("../../config/database");

const express = require("express");

const router = express.Router();


//http://localhost:5000/traindetails/check?refno=11530

router.get('/check',async(req,res)=>{

    var refno = req.query.refno;

    let details_availability = "SELECT * FROM train_details WHERE refno = ? ";

    let query = pool.query(details_availability,[refno],(err,availability)=>{

        if(err){err
            console.log();
            res.send(err);
        }else{
            if(availability.length>0){
                //ref no availalbe in database
                res.send("1");
            }else{
                //ref no  not availalbe in database
                res.send("0");

            }
        }
    });



   


});

//http://localhost:5000/traindetails/details?refno=1153
router.get('/details',async(req,res)=>{

    var refno = req.query.refno;

    let train_details = "SELECT * FROM train_details WHERE refno = ? ";

    let query = pool.query(train_details,[refno],(err,details)=>{

        if(err){err
            console.log();
            res.send(err);
        }else{
            if(details.length>0){
                //ref no availalbe in database
                res.json(details);

            }else{
                //ref no  not availalbe in database
                res.send("0");   

            }
        }
    });



   


});


module.exports = router;