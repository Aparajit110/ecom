const express = require ('express')
const router = express.Router()
const Cart = require('../Model/CartModel') //get all the cart access
const auth = require('../Middleware/auth')

router.get('/',auth,async(req,res)=>{
    try{
    // the requires cart =
    const userId = req.user._id;

    const cart = await Cart.findOne({userId})

     if (!cart) {
      return res.status(404).json({ message: "Cart is empty" });
    }

    res.json({
        items : cart.items
    })
    }
    catch(error){
        res.status(500).json({message : error})
    }
})

module.exports = router