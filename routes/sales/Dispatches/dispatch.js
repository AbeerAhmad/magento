const express = require('express');
const dispatch = express.Router();
const Dispatch = require('../../../models/sales/dispatch/dispatch')




dispatch.post('/createdispatch', (req, res) => {
    let object = new Dispatch({ carrier: req.body.carrier, ReadyAt: req.body.readyat, location: req.body.location, Current_time: req.body.currenttime, NumberOfShipments: req.body.Nos, failedShipments: 0 })
    object.save((err, object) => {
        if (err) {
            res.json({ err: err })
        } else {
            res.json({ success: true })
            console.log('added to db')
        }
    }
    )
})

dispatch.get('/alldispatch', (req, res) => {
    Dispatch.find({
    }).exec(function (err, ads) {
        if (err) {
            return res.json({ success: false, err: err })
        }
        res.json(ads)
    });
})

dispatch.post('/dispatchdetails', (req, res) => {
    let id = req.body._id
    Dispatch.findById(id, function (err, data) {
        res.json(data)
    })
})

module.exports = dispatch;