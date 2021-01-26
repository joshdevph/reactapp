const { model, Schema} = require('mongoose')


let userSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: true
    },
    password: String,
    date_added: {
        type: Date,
        default : Date.now()
    }
})

module.exports = model('User', userSchema)