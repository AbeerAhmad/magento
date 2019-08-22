const express = require('express');
const billRoute = express.Router();
const controller = require('../../../controller/sales/bills/bill')
const billModel = require('../../../models/sales/bill/bill')





billRoute.post('/new',(req,res)=>{
    controller.addBill(req,(err,bill)=>{
            res.json(err &&{err:err}||bill &&{bill:bill})

    })
})



billRoute.get('/all',(req,res)=>{
    controller.getBills(req,(err,bills)=>{
        if(err){
            res.json({err:err});
        } else if(pickups.length>0){
            res.json(pickups)
        }else {
            res.json({ result: "There are no pickups" })
        }    });
})
billRoute.delete('/delete_all',(req,res)=>{
    controller.deleteAll(req,(err,result)=>{
        if(err){
            res.json({err:err})
        }else if (result > 0) {
            res.json({ result: "All the pickups have been deleted" })
        } else {
            res.json({ result: "There were no pickups" })
        }

    })
    
    
})


billRoute.delete('/delete',(req,res)=>{
    controller.deleteOne(req,(err,result)=>{
        if(err)
        {
            res.json({err:err})
        }
        else{
            if(result._id){
                res.json({result:"The selected bill has been delete"})
            }else{
                res.json({result:"Your bill was not found"})
            }
        }


    })
})


billRoute.put('/update',(req,res)=>{
    controller.update(req,(err,bill)=>{
        res.json(err&&{err:err}||bill&&{success:true});
    })
})



//TBS
billRoute.delete('/all_delete',(req,res)=>{
    billModel.deleteMany({},(err,bills)=>{
        res.json({bills:bills})         

    })
})
//..................

module.exports = billRoute;

