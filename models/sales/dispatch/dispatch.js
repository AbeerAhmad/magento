let mongoose = require('mongoose');

let Dispatch_Schema = mongoose.Schema({

    carrier:{                    //invoice
      type:String,
      required:true
    },
    ReadyAt:{                  //purchase date
        type:String,
        required:true
    },
    location:{                  // order number
        type:String,
        required:true
    },
    Current_time:{
        type:String,
        required:true
    },
    NumberOfShipments:{
        type:Number,
        required:true
    },
    failedShipments:{
        type:Number,
        required:true
    }

})


module.exports = mongoose.model('Dispatch',Dispatch_Schema)
