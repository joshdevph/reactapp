const jwt = require('jsonwebtoken')
const UserSchema = require('../models/User')


const authAdmin = async (req, res, next) => {
    try {
        const user = await UserSchema.findOne({ _id : req.user.id})
        if(user.role === 0)
        return res.status(500).json({message : "Admin Access Denied"})
        next()
    } catch (error) {
        return res.status(500).json({message : "Server Error"})
    }
}

module.exports = authAdmin