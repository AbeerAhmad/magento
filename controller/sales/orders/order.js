const OrderModel = require('../../../models/sales/order/order');


const orderController = {
    addOrder:(data,cb)=>{


     
            const order = new OrderModel(data.body);            
                return order.save((err,order)=>{
                    cb(err,order)
                });




     },
    getOrders:(data,cb)=>{
         OrderModel.find({deleted:false,user:data.body.user},(err,orders)=>{         
             cb(err,orders)
         })
     },
    deleteAll:(data,cb)=>{
        OrderModel.updateMany({deleted:false,user:data.body.user},{deleted:true},(err,orders)=>{         
            cb(err,orders)
        })
    },
    deleteOne:(data,cb)=>{
        OrderModel.findByIdAndUpdate(data.body._id,{deleted:true},(err,order)=>{         
            cb(err,order)
        })
    },
    update:(data,cb)=>{

        OrderModel.findByIdAndUpdate(data.body._id,data.body,(err,newOrder)=>{
            cb(err,{update:true})
        })

    }

    
}
module.exports = orderController;