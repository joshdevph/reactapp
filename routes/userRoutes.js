const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator')
const UserSchema = require('../models/User')
const route = express.Router()
const auth = require('../middleware/auth')

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

        const token = createToken({id : user.id})
        const refreshtoken = createRefreshToken({id : user.id})

        res.cookie('refreshtoken', refreshtoken, {
            httpOnly: true,
            path: '/api/user/refresh_token'
        })
        res.json({token, message: "Registered Successfully"})



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
                const token = createToken({id : user.id})
                const refreshtoken = createRefreshToken({id : user.id})
        
                res.cookie('refreshtoken', refreshtoken, {
                    httpOnly: true,
                    path: '/api/user/refresh_token'
                })
                res.json({token, message: "You're Logged in"})
            }else{
                return res.status(500).json({message : "Wrong Password"})
            }
        } catch (error) {
            return res.status(500).json({message : "Server Error"})
        }
    }
)

route.get('/logout', async (req, res) =>{
    try {
        res.clearCookie('refreshtoken', {path: '/api/user/refresh_token'})
        return res.json({ message: "You're Successfully Logged Out"})
    } catch (error) {
        return res.status(500).json({message : "Server Error"})
    }
})
route.get('/refresh_token', (req, res) => {
    const rf_token = req.cookies.refreshtoken
    if(!rf_token ) return res.status(400).json({message : "Please Login or Register"})

    jwt.verify(rf_token, process.env.REFRESH_TOKEN, (err, user) => {
        if(err) return res.status(400).json({message : "Please Login or Register"})
        const token = createToken({id : user.id})
        res.json({token})
    })
})

route.get('/getUser', auth, async (req, res) =>{

    let user = await UserSchema.findById(req.user.id).select('-password')
    if(!user ) return res.status(400).json({message : "User Doesn't Exist"})
    res.json(user)
})

const createToken = (user) => {
    return jwt.sign(user, process.env.SECRET_TOKEN)
}

const createRefreshToken = (user) => {
    return jwt.sign(user, process.env.REFRESH_TOKEN)
}
module.exports =route;