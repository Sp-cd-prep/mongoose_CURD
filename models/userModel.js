const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    age:{
        type:Number,
        required: true
    },
    city:{
        type:String,
    }
})

const User = mongoose.model('UserDetails',userSchema)

module.exports = User



