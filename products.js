const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true

    },price:{
        price:Number,
        required:true,
    },brand:{
        brand:String,
        required:true
    }
})

const products = mongoose.model("products",schema,"products")

module.exports ={
    products
}