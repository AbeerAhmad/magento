let mongoose = require('mongoose');

let transaction_Schema = mongoose.Schema({

    order_id:{                    //invoice
      type:String,
      required:true
    },
    transac_id:{                  //purchase date
        type:String,
        required:true
    },
    p_transac_id:{                  // order number
        type:String,
        required:true
    },
    method:{                  // order date
        type:String,
        required:true
    },
    type:{                  //bill to name
        type:String,
        required:true
    },
    from_date:{            //grand total base
        type:String,
        required:true
    },
    to_date:{        //grand total purchase
        type:String,
        required:true
    },
    closed:{
        type:Boolean,
        require:true
    },

    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
})


module.exports = mongoose.model('transaction',transaction_Schema)
