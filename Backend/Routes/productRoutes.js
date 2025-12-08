const express = require ('express')
const router = express.Router()
const ProductModel =require ('../Model/ProductModel.js')


router.post('/', async(req,res)=>{
    
    try{
    const Product =  await ProductModel.create(req.body);

    res.status(201).json({CreatedProduct : Product})

}
    catch(error){
        res.status(500).json({message : `product not created ${error}`})
    }



})

module.exports = router;