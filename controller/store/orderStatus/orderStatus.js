const OrderStatus = require('../../../models/store/OrderStatus/Status');
const fs = require('fs');
const path = require('path');


const StatusController = {
    
    newStatus:   (data,cb)=>{
        
        const Status = new OrderStatus(data.body);            
        return Status.save((err,status)=>{
            cb(err,status)
        });
    }
    // updateStore:(data,cb)=>{
    //     AllStore.findByIdAndUpdate(data.body.id,data.body,(err,newStore)=>{
    //         if(newStore._id && newStore.imgSrc){

    //                     fs.unlink(path.resolve(newStore.imgSrc),(err)=>{
    //                         if(err){
    //                             console.log(err);
    //                         }else{
    //                             console.log("Updated")
    //                         }
    //                     })


    //         }
    //         cb(err,newStore);
    //     });
    // },
    // deleteStore:(body,cb)=>{
    //     console.log(body);
    //     AllStore.findByIdAndDelete(body.id,(err,store)=>{
    //         if(store._id && store.imgSrc){
    //             fs.unlink(path.resolve(store.imgSrc),(err)=>{
    //                 if(err){
    //                     console.log(err);
    //                 }else{
    //                     console.log("DELETED")
    //                 }
    //             })
    //         }
    //         cb(err,store)
    //     })
    // }
}
module.exports = StatusController;