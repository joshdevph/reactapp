const { model, Schema} = require('mongoose')


let categorySchema = new Schema({
    name: {
        type:String,
        required : true,
        trim: true,
        unique: true,
    }
},
{ timestamps: true })

module.exports = model('Category', categorySchema)