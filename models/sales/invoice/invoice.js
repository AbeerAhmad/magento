let mongoose = require('mongoose');

let invoice_Schema = mongoose.Schema({

    invname:{                    //invoice
      type:String,
      required:true
    },
    invdate:{                  //purchase date
        type:String,
        required:true
    },
    ordernum:{                  // order number
        type:Number,
        required:true
    },
    orderdate:{                  // order date
        type:String,
        required:true
    },
    ordname:{                  //bill to name
        type:String,
        required:true
    },
    total_base:{            //grand total base
        type:Number,
        required:true
    },
    total_purchase:{        //grand total purchase
        type:Number,
        required:true
    },
    action:{
        type:String,
        require:true
    },
    status:{
        type:String
    },
    deleted:{
        type:Boolean,
        default:false
    },
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
})


module.exports = mongoose.model('invoice',invoice_Schema)
