const express = require('express');
const adminContoller = require('../controllers/admin');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', adminContoller.getAddProducts);

// /admin/products => GET
router.get('/products', adminContoller.getProducts);

// /admin/add-product => POST
router.post('/add-product', adminContoller.postAddProducts);

router.get('/edit-product/:productId', adminContoller.getEditProducts);

router.post('/edit-product', adminContoller.postEditProduct);

router.post('/delete-product', adminContoller.postDeleteProduct);

module.exports = router;
