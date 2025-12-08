const express = require("express")
const router = express.Router()
const cart = require("../Model/CartModel")
const auth = require('../Middleware/auth')


router.post("/",auth,async(req,res)=>{
    try{
    const {productId} = req.body;
    const userId = req.user.id;

    const user = await cart.findOne({userId});

     if (!user) {
            return res.status(404).json({ message: "Cart not found" });
        }

    user.items = user.items.filter(item=>{
        return item.productId.toString() !== productId;
    })

    await user.save()

    res.status(200).json({message : "product removed fromt the cart"})

    }
    catch(error){
        res.status(500).json({
            message :error.message
        })
    }


})

module.exports = router 