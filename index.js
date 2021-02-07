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

mongoose.connect(process.env.MONGGO_URI,
    {   useCreateIndex: true ,
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false})
        .then(console.log("Db Connected")
)

if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets
    app.use(express.static('client/build'));
  
    // Express serve up index.html file if it doesn't recognize route
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }
//Port Listening
app.listen(process.env.PORT, (req, res) => {})



//Routes Goes here
app.use('/api/user', userRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/image', uploadRoutes)
app.use('/api/product', productRoutes)
app.use('/api/payment', paymentRoutes)