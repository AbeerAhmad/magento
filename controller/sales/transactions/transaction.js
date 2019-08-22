const Transaction = require('../../../models/sales/transaction/transaction');


const transaction = {
    addTransaction:(data,cb)=>{




            const transaction = new Transaction(data.body);
                return transaction.save((err,transaction)=>{
                    cb(err,transaction)
                });

     },
    getTransactions:(data,cb)=>{
         Transaction.find({deleted:false,user:data.body.user},(err,transactions)=>{
             cb(err,transactions)
         })
     },
    deleteAll:(data,cb)=>{
        Transaction.updateMany({deleted:false,user:data.body.user},{deleted:true},(err,transactions)=>{
            cb(err,transactions)
        })
    },
    deleteOne:(data,cb)=>{

        Transaction.findByIdAndUpdate(data.body._id,{deleted:true},(err,transaction)=>{         
            cb(err,transaction)
        })
    },
    update:(data,cb)=>{

        Transaction.findByIdAndUpdate(data.body._id,data.body,(err,newtransaction)=>{           
            cb(err,{update:true})
        })

    }

    
}
module.exports = transaction;