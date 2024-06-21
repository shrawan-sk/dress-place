const express = require('express');
const router = express.Router();
const products = require('../controllers/product.controller');

router.post('/', products.create);
router.get('/', products.findAll);
router.get('/:productId', products.findOne);
router.put('/:productId', products.update);
router.delete('/:productId', products.delete);

module.exports = router;
