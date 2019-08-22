let mongoose = require('mongoose');

let sales_orderSchema = mongoose.Schema({
    
    city:{                  
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    name: {
        type:String,
        required:true
    },
    total_base:{
        type:Number,
        required:true
    },
    total_purchase:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        required:true
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


module.exports = mongoose.model('orders',sales_orderSchema)
