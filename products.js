const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true

    },price:{
        type:Number,
        required:true,
    },brand:{
        type:String,
        required:true
    }
})

const products = mongoose.model("products",schema,"products")

module.exports ={
    products
}