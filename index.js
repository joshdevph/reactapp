const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes.js')
const app = express()
dotenv.config()

mongoose.connect(process.env.MONGGO_URI,{ useCreateIndex: true , useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: true}).then(
    console.log("Db Connected")
)
// Use Json Middleware
app.use(express.json())


//Port Listening
app.listen(process.env.PORT, (req, res) => {})



//Routes Goes here
app.use('/api/user', userRoutes)