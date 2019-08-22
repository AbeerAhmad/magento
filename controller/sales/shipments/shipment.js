const Shipment = require('../../../models/sales/shipment/shipment');


const shipment = {
    addShipment:(data,cb)=>{



            const shipment = new Shipment(data.body);
                return shipment.save((err,shipment)=>{
                    cb(err,shipment)
                });



     },
    getShipments:(data,cb)=>{
         Shipment.find({deleted:false,user:data.body.user},(err,shipments)=>{ 
             cb(err,shipment)
         })
     },
    deleteAll:(data,cb)=>{
        Shipment.updateMany({deleted:false,user:data.body.user},{deleted:true},(err,shipments)=>{         
            cb(err,shipments)
        })
    },
    deleteOne:(data,cb)=>{

        Shipment.findByIdAndUpdate(data.body._id,{deleted:true},(err,shipment)=>{        
            cb(err,shipment)
        })
    },
    update:(data,cb)=>{

        Shipment.findByIdAndUpdate(data.body._id,data.body,(err,newshipment)=>{           
            cb(err,{update:true})
        })

    }

    
}
module.exports = shipment;