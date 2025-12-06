const express = require ('express')
const router = express.Router()
const User = require('../Model/user')
const bcrypt = require('bcrypt');


router.post('/', async (req,res)=>{
    const {username,email,password} = req.body;

    if(!username || !email || !password){
        return res.status(400).json({message : "All fields are required"})
    }

    const hashedPassword = await bcrypt.hash(password,10);

   try{
    const newUser = User.create({
        username,
        email,
        password : hashedPassword
    });
    res.status(201).json(`new user created ${newUser}`)
   }
   catch(error){
    res.status(500).json(`user not created ${error}`)
   }
});

module.exports = router
