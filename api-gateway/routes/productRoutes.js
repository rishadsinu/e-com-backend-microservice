
const express = require('express');
const router = express.Router();
const client = require('../services/productClient.js')

router.post('/add', (req, res) => {
    const product = req.body;
    client.AddProduct(product, (err, response) => {
        if(err) return res.status(500).send(err);
        res.json(response)  
    })
}) 


module.exports = router




