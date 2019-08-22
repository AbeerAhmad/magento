const express = require('express');
const orderRoute = express.Router();
const controller = require('../../../controller/sales/orders/order')
const OrderModel = require('../../../models/sales/order/order')






orderRoute.post('/new', (req, res) => {


    controller.addOrder(req,(err,order)=>{
        if(err){
            res.json({err:err})
        }else{
            res.json({order:order})
        }
    })
})  



orderRoute.get('/all', (req, res) => {



    controller.getOrders(req, (err, orders) => {
        if(err){
            res.json({err:err});
        } else if(orders.length>0){
            res.json({order:orders})
        }else {
            res.json({ result: "There are no orders" })
        }
    });
})


orderRoute.delete('/delete_all', (req, res) => {



    controller.deleteAll(req, (err, result) => {
        if(err){
            res.json({err:err})
        }else if (result) {
            res.json({ result: "All the orders have been deleted" })
        } else {
            res.json({ result: "There were no orders" })
        }

    })


})


orderRoute.delete('/delete', (req, res) => {

    controller.deleteOne(req, (err, result) => {
        if(err){
            res.json({err:err})
        }else if (result) {
            res.json({ result: "The selected order has been delete" })
        } else {
            res.json({ result: "Your order was not found" })
        }


    })
})


orderRoute.put('/update', (req, res) => {


    controller.update(req, (err, order) => {
        if(err){
            res.json({err:err})
        }else if (order.update) {
            res.json({ success: true })
        } else {
            res.json({ success: false })
        }
    })
})






//TBS

orderRoute.delete('/all_delete',(req,res)=>{


    OrderModel.deleteMany({},(err,orders)=>{         
        if(orders.n>0){
            res.json({result:"All deleted"})
        }else{
            res.json({result:"There were no orders"})
        }
    })
})


orderRoute.post('/get_all',(req,res)=>{
    OrderModel.find({},(err,orders)=>{
        res.json(err||orders)
    })

})

//..................




module.exports = orderRoute;