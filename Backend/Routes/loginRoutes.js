const express = require('express')
const router = express.Router()
const jwt = require ('jsonwebtoken')
const User = require ('../Model/user.js')
const bcrypt = require('bcrypt');

router.post('/', async (req,res)=>{
    const {email,password} = req.body;

    
    const user = await User.findOne({email})

    if(!user){
        return res.status(400).json({message : "Invalid email"})
    }

    console.log(email,password,user.password);


    const isMatch =  bcrypt.compare(password,user.password)
    if(!isMatch)  return res.status(400).json({message : "Inavlid password"})

        console.log("succes")

    const token = jwt.sign(
        {id : user._id},
        process.env.JWT_SECRET
    )

    res.json({
        message : 'login successfully',
        token 
    })

})

module.exports = router