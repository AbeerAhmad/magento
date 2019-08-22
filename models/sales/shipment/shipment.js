let mongoose = require('mongoose');

let shipment_Schema = mongoose.Schema({

    shipment:{                    //invoice
      type:String,
      required:true
    },
    ship_date:{                  //purchase date
        type:String,
        required:true
    },
    ordername:{                  // order number
        type:String,
        required:true
    },
    orderdate:{                  // order date
        type:String,
        required:true
    },

    ship_to_name:{
        type:String,
        required:true
    },
    action:{
        type:String,
        require:true
    },
   
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
})


module.exports = mongoose.model('shipments',shipment_Schema)
