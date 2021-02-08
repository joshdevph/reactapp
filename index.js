const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const path = require('path')


const userRoutes = require('./routes/userRoutes.js')
const categoryRoutes = require('./routes/categoryRoutes')
const uploadRoutes = require('./routes/uploadRoutes')
const productRoutes = require('./routes/productRoutes')
const paymentRoutes = require('./routes/paymentRoutes')

const app = express()
dotenv.config()

// Use Json Middleware
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(fileUpload({
    useTempFiles: true
}))

//Routes Goes here
app.use('/api/user', userRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/image', uploadRoutes)
app.use('/api/product', productRoutes)
app.use('/api/payment', paymentRoutes)

mongoose.connect(process.env.MONGGO_URI,
    {   useCreateIndex: true ,
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false})
        .then(console.log("Database Connected")
)

if(process.env.NODE_ENV === 'production'){
    
    app.use(express.static(__dirname + '/client/build'))
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '/client/build/index.html'), function(err) {
          if (err) {
            res.status(500).send(err)
          }
        })
      })
}

const PORT = process.env.PORT || 3001
//Port Listening
app.listen(PORT , (req, res) => {
    console.log('Server is running on port', PORT)
})



