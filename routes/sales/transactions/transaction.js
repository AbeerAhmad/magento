const express = require('express');
const transaction = express.Router();
const controller = require('../../../controller/sales/transactions/transaction')
const Transaction = require('../../../models/sales/transaction/transaction')






transaction.post('/new', (req, res) => {

    // req.body.user = JSON.parse(req.body.user); 
    controller.addTransaction(req,(err,transaction)=>{
        if(err){
            res.json({err:err})
        }else{
            res.json({transaction:transaction})
        }
    })
})  



transaction.get('/all', (req, res) => {

    // req.body.user = JSON.parse(req.body.user); 

    controller.getTransactions(req, (err, transactions) => {
        if(err){
            res.json({err:err});
        } else if(transaction.length>0){
            res.json({transaction:transaction})
        }else {
            res.json({ result: "There are no transaction" })
        }
    });
})


transaction.delete('/delete_all', (req, res) => {



    controller.deleteAll(req, (err, result) => {
        if(err){
            res.json({err:err})
        }else if (result) {
            res.json({ result: "All the transactions have been deleted" })
        } else {
            res.json({ result: "There were no transactions" })
        }

    })


})


transaction.delete('/delete', (req, res) => {

    controller.deleteOne(req, (err, result) => {
        if(err){
            res.json({err:err})
        }else if (result._id) {
            res.json({ result: "The selected transaction has been delete" })
        } else {
            res.json({ result: "Your transaction was not found" })
        }


    })
})


transaction.put('/update', (req, res) => {


    controller.update(req, (err, transaction) => {
        if(err){
            res.json({err:err})
        }else if (transaction.update) {
            res.json({ success: true })
        } else {
            res.json({ success: false })
        }
    })
})






//TBS

transaction.delete('/all_delete',(req,res)=>{


    Transaction.deleteMany({},(err,transactions)=>{         
        if(transactions.n>0){
            res.json({result:"All deleted"})
        }else{
            res.json({result:"There were no transactions"})
        }
    })
})

transaction.post('/abc',(req,res)=>{
    const user = req.body.user


})

//..................




module.exports = transaction;