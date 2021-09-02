const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    image:{
        type: String,
        required: [true, "Price is required"]
    },
    title: {
        type: String,
        required: [true, "The title is required"]
    },
    description:{
        type: String,
        required : [true, "Description is required"]
    },
    price:{
        type: String,
        required : [true, "Price is required"]
    },
    stock:{
        type: String,
        required : [true, "Stock is required"]
    },
    date: {
        type: Date,
        default: Date.now()
    }
}, {timestamps:true});

const Product = mongoose.model("Products", ProductSchema);

module.exports = Product;

