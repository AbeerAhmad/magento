let mongoose = require('mongoose');

let sales_billSchema = mongoose.Schema({
    

    email:{
        type:String,
        required:true
    },
    firstname: {
        type:String,
    },
    lastname:String,
    reference_id:{
        type:Number,
        required:true
    },
    status:String,
    created_from:{
        type:String
    },
    created_to:{
        type:String
    }, 
    updated_from:{
        type:String
    }, 
    updated_to:{
        type:String
    },
    deleted:{
        type:Boolean,
        default:false
    },
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
    }
})


module.exports = mongoose.model('bills',sales_billSchema)
