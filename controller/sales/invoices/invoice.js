const InvoiceModel = require('../../../models/sales/invoice/invoice');


const invoice = {
    addInvoice:(data,cb)=>{

            const invoice = new InvoiceModel(data.body);            
                return invoice.save((err,invoice)=>{
                    cb(err,invoice)
                });
     },
    getInvoices:(data,cb)=>{
         InvoiceModel.find({deleted:false,user:data.body.user},(err,invoices)=>{         
             cb(err,invoices)
         })
     },
    deleteAll:(data,cb)=>{
        InvoiceModel.updateMany({deleted:false,user:data.body.user},{deleted:true},(err,invoices)=>{         
            cb(err,invoices)
        })
    },
    deleteOne:(data,cb)=>{
        InvoiceModel.findByIdAndUpdate(data.body._id,{deleted:true},(err,invoice)=>{         
            cb(err,invoice)
        })
    },
    update:(data,cb)=>{

        InvoiceModel.findByIdAndUpdate(data.body._id,data.body,(err,newinvoice)=>{
            cb(err,{update:true})
        })

    }

    
}
module.exports = invoice;