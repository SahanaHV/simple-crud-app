const express = require('express');
const {
  getProducts,
  getProductById,
  deleteProduct,
  updateProduct,
  addProduct,
} = require('../controllers/product.controller');

const router = express.Router();

// Get list of products
router.get('/', getProducts);

// Get single product
router.get('/:id', getProductById);

// Add a product
router.post('/', addProduct);

// Update a product
router.put('/:id', updateProduct);

// delete a product
router.delete('/:id', deleteProduct);

module.exports = router;
