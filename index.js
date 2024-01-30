const express = require('express') ;
const app = express();
const connectDB = require('./db')
const router = require('./routes/userRoutes')

app.use(express.json());

app.use(router)

app.listen(7777,()=>{
    connectDB();
    console.log("server is running on 7777")
})