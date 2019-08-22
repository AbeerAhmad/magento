let mongoose = require('mongoose');

let pickup_Schema = mongoose.Schema({

    customer_name:{                    //invoice
      type:String,
      required:true
    },
    location:{                  //purchase date
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
    pickup_date:{                  //bill to name
        type:String,
        required:true
    },

    action:{
        type:String,
        require:true
    },
    status:{
        type:String
    },
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
})


module.exports = mongoose.model('pickups',pickup_Schema)
