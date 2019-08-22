const express = require('express');
const invoice = express.Router();
const controller = require('../../../controller/sales/invoices/invoice')
const Invoice = require('../../../models/sales/invoice/invoice')






invoice.post('/new', (req, res) => {


    controller.addInvoice(req,(err,invoice)=>{
        if(err){
            res.json({err:err})
        }else{
            res.json({invoice:invoice})
        }
    })
})  



invoice.get('/all', (req, res) => {



    controller.getInvoices(req, (err, invoices) => {
        if(err){
            res.json({err:err});
        } else if(invoices.length>0){
            res.json({invoice:invoices})
        }else {
            res.json({ result: "There are no invoices" })
        }
    });
})


invoice.delete('/delete_all', (req, res) => {



    controller.deleteAll(req, (err, result) => {
        if(err){
            res.json({err:err})
        }else if (result.n > 0) {
            res.json({ result: "All the invoices have been deleted" })
        } else {
            res.json({ result: "There were no invoices" })
        }

    })


})


invoice.delete('/delete', (req, res) => {

    controller.deleteOne(req, (err, result) => {
        if(err){
            res.json({err:err})
        }else if (result) {
            res.json({ result: "The selected invoice has been delete" })
        } else {
            res.json({ result: "Your invoice was not found" })
        }


    })
})


invoice.put('/update', (req, res) => {


    controller.update(req, (err, invoice) => {
        if(err){
            res.json({err:err})
        }else if (invoice.update) {
            res.json({ success: true })
        } else {
            res.json({ success: false })
        }
    })
})






//TBS

invoice.delete('/all_delete',(req,res)=>{


    Invoice.deleteMany({},(err,invoices)=>{         
        if(invoices.n>0){
            res.json({result:"All deleted"})
        }else{
            res.json({result:"There were no invoices"})
        }
    })
})

invoice.post('/abc',(req,res)=>{
    const user = req.body.user
    console.log(user);

})

//..................




module.exports = invoice;