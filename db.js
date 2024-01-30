const mongoose = require('mongoose')

const connectDB = async ()=>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/mongooseCURD')
        console.log('connected to DB')
    }
    catch(err){
        console.error('connection to DB failed')
    }
}

module.exports = connectDB