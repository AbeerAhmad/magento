const AllStore = require('../../../models/store/store/Store');
const fs = require('fs');
const path = require('path');


const AllStoreController = {
    
    newStore:   (data,cb)=>{
        
        const Store = new AllStore(data.body);            
        return Store.save((err,store)=>{
            cb(err,store)
        });
    },
    updateStore:(data,cb)=>{
        AllStore.findByIdAndUpdate(data.body.id,data.body,(err,newStore)=>{
            if(newStore._id && newStore.imgSrc){

                        fs.unlink(path.resolve(newStore.imgSrc),(err)=>{
                            if(err){
                                console.log(err);
                            }else{
                                console.log("Updated")
                            }
                        })


            }
            cb(err,newStore);
        });
    },
    deleteStore:(body,cb)=>{
        console.log(body);
        AllStore.findByIdAndDelete(body.id,(err,store)=>{
            if(store._id && store.imgSrc){
                fs.unlink(path.resolve(store.imgSrc),(err)=>{
                    if(err){
                        console.log(err);
                    }else{
                        console.log("DELETED")
                    }
                })
            }
            cb(err,store)
        })
    }
}
module.exports = AllStoreController;