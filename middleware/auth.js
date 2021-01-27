const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
    try {
        const token = req.header('Authorization')
        if(!token) return res.status(400).json({message : "User not Authorized"})
        jwt.verify(token, process.env.SECRET_TOKEN, (err, user) => {
            if(err) return res.status(400).json({message : "User not Authorized"})

            req.user = user

            next()
        })
    } catch (error) {
        return res.status(500).json({message : "Server Error"})
    }
}

module.exports = auth