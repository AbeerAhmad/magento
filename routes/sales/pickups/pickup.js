const express = require('express');
const pickup = express.Router();
const controller = require('../../../controller/sales/pickups/pickup')
const Pickup = require('../../../models/sales/pickup/pickup')






pickup.post('/new', (req, res) => {


    controller.addPickup(req,(err,pickup)=>{
        if(err){
            res.json({err:err})
        }else{
            res.json({pickup:pickup})
        }
    })
})  



pickup.get('/all', (req, res) => {

    // req.body.user = JSON.parse(req.body.user); 

    controller.getPickups(req, (err, pickups) => {
        if(err){
            res.json({err:err});
        } else if(pickups.length>0){
            res.json({pickup:pickups})
        }else {
            res.json({ result: "There are no pickups" })
        }
    });
})


pickup.delete('/delete_all', (req, res) => {



    controller.deleteAll(req, (err, result) => {
        if(err){
            res.json({err:err})
        }else if (result ) {
            res.json({ result: "All the pickups have been deleted" })
        } else {
            res.json({ result: "There were no pickups" })
        }
    })


})


pickup.delete('/delete', (req, res) => {

    controller.deleteOne(req, (err, result) => {
        if(err){
            res.json({err:err})
        }else if (result._id) {
            res.json({ result: "The selected pickup has been delete" })
        } else {
            res.json({ result: "Your pickup was not found" })
        }


    })
})


pickup.put('/update', (req, res) => {


    controller.update(req, (err, pickup) => {
        if(err){
            res.json({err:err})
        }else if (pickup.update) {
            res.json({ success: true })
        } else {
            res.json({ success: false })
        }
    })
})






//TBS

pickup.delete('/all_delete',(req,res)=>{


    Pickup.deleteMany({},(err,pickups)=>{         
        if(pickups.n>0){
            res.json({result:"All deleted"})
        }else{
            res.json({result:"There were no pickups"})
        }
    })
})

pickup.post('/abc',(req,res)=>{
    const user = req.body.user


})

//..................




module.exports = pickup;