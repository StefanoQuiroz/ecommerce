const express = require('express');
const router = express();
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/products.controllers')

router.get(`/products`, getProducts);
router.get(`/product/:id`, getProduct);
router.post(`/product/create`, createProduct);
router.put(`/product/update/:id`, updateProduct);
router.delete(`/product/delete/:id`, deleteProduct);

module.exports = router;

