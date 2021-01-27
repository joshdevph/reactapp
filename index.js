const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes.js')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const fileUpload = require('express-fileupload')


const app = express()
dotenv.config()

// Use Json Middleware
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(fileUpload())

mongoose.connect(process.env.MONGGO_URI,
    {   useCreateIndex: true ,
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: true})
        .then(console.log("Db Connected")
)

//Port Listening
app.listen(process.env.PORT, (req, res) => {})



//Routes Goes here
app.use('/api/user', userRoutes)