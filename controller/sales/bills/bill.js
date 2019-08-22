const BillModel = require('../../../models/sales/bill/bill');


const billController = {
    addBill:(data,cb)=>{



            const bill = new BillModel(data.body);            
                return bill.save((err,bill)=>{
                    cb(err,bill)
                });

     },
    getBills:(data,cb)=>{
         BillModel.find({deleted:false,user:data.body.user},(err,bills)=>{        
             cb(err,bills)
         })
     },
    deleteAll:(data,cb)=>{
        BillModel.updateMany({deleted:false,user:data.body.user},{deleted:true},(err,bills)=>{
            cb(err,bills)
        })
    },
    deleteOne:(data,cb)=>{

        BillModel.findByIdAndUpdate(data.body._id,{deleted:true},(err,bill)=>{         
            cb(err,bill)
        })
    },
    update:(data,cb)=>{

        BillModel.findByIdAndUpdate(data.body._id,data.body,(err,newbill)=>{          
            cb(err,newbill)
        })

    }

    
}
module.exports = billController;