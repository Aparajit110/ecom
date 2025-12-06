const mongoose = require('mongoose');

const cartProduct = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "users",
        required : true
    },
    items : [{
        productId : {
            type :mongoose.Schema.Types.ObjectId,
            ref : "products"
        },
        quantity : {
            type : Number,
            required : true,
            default : 1
        }
    }
    ],

    createdAt : {
        type :Date,
        default : Date.now
    }
    

})

module.exports = mongoose.model('Cart',cartProduct);