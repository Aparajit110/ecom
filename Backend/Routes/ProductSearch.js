const express = require('express')
const router = express.Router();
const product = require ('../Model/ProductModel')


router.get('/',async (req,res)=>{
    try{
    const data = req.query.name;

    if(!data){
        return res.status(400).json({message : "No results found"})
    }

    const prod = await product.find(
        {name : {$regex : data , $options : "i"}}
    )

     if (prod.length === 0) {
      return res.status(404).json({ message: "No products found" });
    }

    return res.json(prod)

    }
    catch(err){
        res.status(500).json({message : err})
    }



})

module.exports = router