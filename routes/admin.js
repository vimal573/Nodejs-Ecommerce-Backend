const express = require('express');
const adminContoller = require('../controllers/admin');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', adminContoller.getAddProducts);

// /admin/products => GET
router.get('/products', adminContoller.getProducts);

// /admin/add-product => POST
router.post('/add-product', adminContoller.postAddProducts);

module.exports = router;
