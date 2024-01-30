const express = require('express')
const router  =express.Router();
const User = require('../models/userModel') //this holds collection and schema

//create a new user
router.post('/', async(req,res)=>{
    try{
        const newUser = await User.create(req.body)
        res.send(newUser)
    }catch(error){
        res.status(500).send(error,"error")
    }
})

//get all the users
router.get('/',async (req,res)=>{
    try{
        const allUser = await User.find()
        res.send(allUser)
    }catch(error){
        res.status(500).send(error,"error")
    }
})

//update a user by id
router.put('/:id',async(req,res)=>{
    // console.log(req.params.id)
    try{
        const updateUser = await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json(updateUser)
    }catch(error){
        res.status(500).send(error,"error")
    }
})

//delete a user by id
router.delete('/:id',async(req,res)=>{
    // console.log(req.params.id)
    try{
        await User.findByIdAndDelete(req.params.id)
        res.send()
    }catch(error){
        res.status(500).send(error,"error")
    }
})


module.exports = router
