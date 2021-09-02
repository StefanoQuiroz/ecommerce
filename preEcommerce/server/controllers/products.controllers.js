const Product = require('../models/product.models');
require('mongoose-query-random');
const getProducts = (req, res) => {
    Product.find({})//.limit(-1).skip(2)
        .then(result => res.json({data:result}))
        .catch(err => {
            res.json({error: err, message: "The products doesn´t exist"}).status(404);
        })
}

const getProduct = (req, res) => {
    Product.findById(req.params.id)
        .then(result => res.json({data:result}))
        .catch(err => {
            res.json({error: err, message: "The products doesn´t exist"}).status(404);
        })
}

const getRandom = (req,res) => {
    Product.find()
        .then(result => {
            if(result){
                let products = result
                let count = products.length;
                let random = Math.floor(Math.random() * count);
                return res.json({data:result[random]});
            }
        })
        .catch(err => {
            res.json({error: err, message: "The products doesn´t exist"}).status(404);
        })
}

const createProduct = (req, res) => {
    //console.log(req.body)
    Product.create(req.body)
        .then(result => res.json({data:result}))
        .catch(err => {
            res.json({error: err, message: "The products doesn´t create"}).status(500);
        })
}


const updateProduct = (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, {new:true})
        .then(result => res.json({data:result}))
        .catch(err => {
            res.json({error: err, message: "The products doesn´t exist"}).status(500);
        })
}

const deleteProduct = (req, res) => {
    Product.findByIdAndRemove(req.params.id)
        .then(result => res.json({data:result}))
        .catch(err => {
            res.json({error: err, message: "The products doesn´t exist"}).status(200);
        })
}

module.exports = {getProducts, getProduct, getRandom, createProduct, updateProduct, deleteProduct};