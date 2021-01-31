const pool = require("../../config/database");

const express = require("express");

const router =express.Router();

//http://localhost:5000/shedules?refno=1153

router.get('/',async(req,res)=>{
    var refno = req.query.refno;

    let sheduele_sql = "SELECT * FROM shedule WHERE refno= ?";

    let query= pool.query(sheduele_sql,[refno],(err,shedules)=>{
    if(err){
        res.send(err);
    }else{
        if(shedules.length>0){
           res.json(shedules);
          // res.end(JSON.stringify(shedules));

        }else{
            res.send("empty shedules");
        }
    }

    });

});



module.exports =router;
