let mongoose = require('mongoose');

let StatusSchema = mongoose.Schema({
    

    code:{
        type:String,
        required:true
    },
    label: {
        type:String,
        required:true
    },

    view:{
        type:String,
    },
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
    }
})


module.exports = mongoose.model('Order_Status',StatusSchema)
