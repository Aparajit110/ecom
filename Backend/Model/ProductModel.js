const mongoose = require('mongoose')

const product = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    cloudinaryImage : {
        type : String,
        required : true
    },
    price : {
        type :Number,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    stock : {
        type : Number,
        required : true,
        default : 1
    },
    createdAt : {
        type : Date,
        required : true,
        default : Date.now
    }

})

module.exports = mongoose.model("Products", product);