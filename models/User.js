const { model, Schema} = require('mongoose')


let userSchema = new Schema({
    role: {
        type: Number,
        default: 0
    },
    name: String,
    email: {
        type: String,
        required: true
    },
    password: String,
    date_added: {
        type: Date,
        default : Date.now()
    },
    cart : {
        type: Array,
        default: []
    },
    
},
{ timestamps: true })

module.exports = model('User', userSchema)