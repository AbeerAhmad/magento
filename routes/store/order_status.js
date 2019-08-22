const express = require('express');
const statusRouter = express.Router();
const statusController = require('../../controller/store/orderStatus/orderStatus')

statusRouter.post('/new',(req,res)=>{
    statusController.newStatus(req.body,(err,status)=>{
        if(err){
            res.json({err:err})
        }else if(status){
            res.json({success:true})
        }
    })
})



module.exports= statusRouter;