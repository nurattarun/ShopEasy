const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

// /admin/add-product => GET
router.get('/addproduct', productsController.getAddProduct);

// /admin/add-product => POST
router.post('/addproduct', productsController.postAddProduct);

module.exports = router;
