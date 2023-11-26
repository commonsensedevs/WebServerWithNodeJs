const express = require('express');
const productRouter = express.Router();

// Mock data
const products = [
    {
      ProductName: 'Product 1',
      ProductCode: 'P1',
      ProductPrice: 100
    },
    {
      ProductName: 'Product 2',
      ProductCode: 'P2',
      ProductPrice: 200
    },
    {
      ProductName: 'Product 3',
      ProductCode: 'P3',
      ProductPrice: 300
    }
  ];

productRouter.get('/', (req, res) => {
    res.json(products);
});

module.exports = productRouter;