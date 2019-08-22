let mongoose = require('mongoose');

let AllStoreSchema = mongoose.Schema({
    

    name:{
        type:String,
        required:true
    },
    desc: {
        type:String,
        required:true
    },
    imgSrc  :{type:String},
    lat:{
        type:Number,
        required:true
    },
    lng:{
        type:Number,
        required:true
    },    
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
    }
})


module.exports = mongoose.model('All_Store',AllStoreSchema)
