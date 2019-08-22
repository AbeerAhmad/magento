const Pickup = require('../../../models/sales/pickup/pickup');


const pickupController = {
    addPickup:(data,cb)=>{




            const pickup = new Pickup(data.body);            
                return pickup.save((err,pickup)=>{
                    cb(err,pickup)
                });




     },
    getPickups:(data,cb)=>{
        Pickup.find({deleted:false,user:data.body.user},(err,pickups)=>{         
             cb(err,pickups)
         })
     },
    deleteAll:(data,cb)=>{
        Pickup.updateMany({deleted:false,user:data.body.user},{deleted:true},(err,pickups)=>{         
            cb(err,pickups)
        })
    },
    deleteOne:(data,cb)=>{

        Pickup.findByIdAndUpdate(data.body._id,{deleted:true},(err,pickup)=>{         
            cb(err,pickup)
        })
    },
    update:(data,cb)=>{

        Pickup.findByIdAndUpdate(data.body._id,data.body,(err,newPickup)=>{         
            cb(err,{update:true})
        })

    }

    
}
module.exports = pickupController;