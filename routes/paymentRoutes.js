const express = require('express')
const route = express.Router()
const Payment = require('../models/Payment')
const User = require('../models/User')
const Product = require('../models/Product')


route.get('/getPayments', async (req, res) => {
    try {
        const payments = await Payment.find()
        res.json(payments)
    } catch (error) {
        return res.status(500).json({msg: err.message})
    }

})
route.post('/createPayments', async (req, res) => {
    try {
        const user = await User.findById(req.body.user).select('name email')
        if(!user) return res.status(400).json({msg: "User Does not exist"})
        const { cart, paymentID, address} = req.body
        const {_id, name, email} = user;

        const newPayment = new Payment({
            user_id: _id, name, email, cart, paymentID, address
        })

        await newPayment.save()
        // console.log(req.body.user);
        res.json({msg: "Payment Succes!"})

    } catch (err) {
        return res.status(500).json({msg: err.message})
    }

})


module.exports = route