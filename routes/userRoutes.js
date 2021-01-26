const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator')
const UserSchema = require('../models/User')
const route = express.Router()

// This route is for Registering of the user
route.post('/register',
[
    check('email', 'Provide a valid Email').isEmail(),
    check('password', 'Provide a valid Password').not().isEmpty(),
    check('name', 'Provide a name').not().isEmpty(),
],
async (req, res) => {
    try {
        let { name, password, email} = req.body
        let user = await UserSchema.findOne({email})
        const error = validationResult(req)
        if(!error.isEmpty()){
            return res.status(401).json(error.array())
        }

        if(user){
            return res.status(404).json({'msg':'Email is Already taken'})
        }
        const salt = await bcrypt.genSalt(10)
        password = await bcrypt.hash(password, salt)

        user = new UserSchema({
            name, email, password
        })

        await user.save()

        const payload = {
            user:{
                id : user.id
            }
        }

        jwt.sign(
            payload, 
            process.env.SECRET_TOKEN,
            (err,token) => {
                if(err)throw err;
                res.json({token, message:"Registered Successfully"})
            }
            )


    } catch (error) {
        return res.status(500).json({message : "Server Error"})
    }

})

// This route is for Login of the user
route.post(
    '/login',
    [
    check('email', 'Provide a valid Email').isEmail(),
    check('password', 'Provide a valid Password').not().isEmpty(),
    check('name', 'Provide a name').not().isEmpty(),
    ],
    async (req, res) => {
        try {
            const { email, password} = req.body
            let user = await UserSchema.findOne({email})
            if(!user){
                return res.status(404).json({'msg':'Your email is not registered'})
            }
            let validatePassword = await bcrypt.compare( password , user.password)

            if(validatePassword){
                const payload = {
                    user:{
                        id : user.id
                    }
                }
                jwt.sign(
                    payload, 
                    process.env.SECRET_TOKEN,
                    (err,token) => {
                        if(err)throw err;
                        res.json({token, msg : "You're Logged in"})
                    }
                )
            }else{
                return res.status(500).json({message : "Wrong Password"})
            }
        } catch (error) {
            return res.status(500).json({message : "Server Error"})
        }
    }
)
module.exports =route;