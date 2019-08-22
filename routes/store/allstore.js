const express = require("express");
const AllStoreController = require('../../controller/store/allstore/allstore')
const AllStore = require('../../models/store/store/Store')
const multer = require('multer');


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
   
  var upload = multer({ storage: storage })
const AllStoreRoutes = express.Router();




AllStoreRoutes.post('/new', upload.single('file'), function (req, res, next) {
    if(req.file){
        req.body.imgSrc = req.file.path;
    }
    AllStoreController.newStore(req,function(err,store){
        if(err){
            res.json({err:err})
        }else if(store._id){
            res.json({success:true})
        }
    })

})
AllStoreRoutes.post('/update', upload.single('file'), function (req, res, next) {
    if(req.file){
        req.body.imgSrc = req.file.path;
    }
    AllStoreController.updateStore(req,function(err,store){
        if(err){
            res.json({err:err})
        }else if(store._id){
            res.json({success:true})
        }
    })

})


AllStoreRoutes.post('/delete_store',(req,res)=>{
    AllStoreController.deleteStore(req.body,(err,store)=>{
        if(err){
            res.json({err:err})
        }else if(store._id){
            res.json({success:true})
        }else{
            res.json({success:false})
        }
    });
})

AllStoreRoutes.get('/all',(req,res)=>{
    AllStore.find({},(err,stores)=>{
        res.json(stores)
    })
})


AllStoreRoutes.delete('/delete_all',(req,res)=>{
    ALlStore.deleteMany({},(err,result)=>{
        console.log(result)
    })
})









module.exports = AllStoreRoutes;