const express = require('express');
const shipment = express.Router();
const controller = require('../../../controller/sales/shipments/shipment')
const Shipment = require('../../../models/sales/shipment/shipment')






shipment.post('/new', (req, res) => {

    // req.body.user = JSON.parse(req.body.user); 
    controller.addShipment(req,(err,shipment)=>{
        if(err){
            res.json({err:err})
        }else{
            res.json({shipment:shipment})
        }
    })
})  



shipment.get('/all', (req, res) => {

    // req.body.user = JSON.parse(req.body.user); 

    controller.getShipments(req, (err, shipments) => {
        if(err){
            res.json({err:err});
        } else if(shipments.length>0){
            res.json({shipment:shipments})
        }else {
            res.json({ result: "There are no shipments" })
        }
    });
})


shipment.delete('/delete_all', (req, res) => {



    controller.deleteAll(req, (err, result) => {
        if(err){
            res.json({err:err})
        }else if (result) {
            res.json({ result: "All the shipments have been deleted" })
        } else {
            res.json({ result: "There were no shipments" })
        }
    })


})


shipment.delete('/delete', (req, res) => {

    controller.deleteOne(req, (err, result) => {
        if(err){
            res.json({err:err})
        }else if (result._id) {
            res.json({ result: "The selected shipment has been delete" })
        } else {
            res.json({ result: "Your shipment was not found" })
        }

    })
})


shipment.put('/update', (req, res) => {


    controller.update(req, (err, shipment) => {
        if(err){
            res.json({err:err})
        }else if (shipment.update) {
            res.json({ success: true })
        } else {
            res.json({ success: false })
        }
    })
})






//TBS

shipment.delete('/all_delete',(req,res)=>{


    Shipment.deleteMany({},(err,shipments)=>{         
        if(shipments){
            res.json({result:"All deleted"})
        }else{
            res.json({result:"There were no shipments"})
        }
    })
})

shipment.post('/abc',(req,res)=>{
    const user = req.body.user

})

//..................




module.exports = shipment;