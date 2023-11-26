const express = require('express');
const productRouter = express.Router();

// Mock data
const products = [
    { id: 1, name: 'Product 1', description: 'This is product 1' },
    { id: 2, name: 'Product 2', description: 'This is product 2' },
    // Add more products as needed
];

productRouter.get('/', (req, res) => {
    res.json(products);
});

module.exports = productRouter;