const express = require('express')
const router = express.Router()
const Cart = require ('../Model/CartModel')
const auth = require ('../Middleware/auth.js')
router.post('/', auth, async(req,res)=>{
    try{
        const {productId , quantity} = req.body;
        const userId =  req.user.id;

        const cart = await Cart.findOne({userId}); // is the whole object that is returned after the userid meets 

        if(!cart){
            await Cart.create({
                userId,
                items : [{
                    productId,
                    quantity
                }]
            })
            return res.status(201).json({message : "cart created"});
        }

        const productIdx =  cart.items.findIndex((item)=> item.productId.toString() === productId);

        if(productIdx >= 0){
            cart.items[productIdx].quantity += quantity;
            res.status(200).json({message : "quanitity added"})
        }else{
            cart.items.push({productId,quantity});
            res.status(201).json({message : "item added"});
        }

       await cart.save();

    }
    catch(error){
        res.status(500).json({message : error})
    }
})

module.exports = router;