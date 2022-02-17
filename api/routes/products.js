const express = require('express');
const router = express.Router();
const mongoose = require('mongoose'); 
const Product = require('../models/product');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'product get request works'
    })
})

router.post('/', (req, res, next) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });
    product.save().then(result => {
        console.log(result);
    }).catch(err => console.log(err));
    res.status(201).json({
        message: 'product post request works',
        createProduct: product
    })
})


router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if(id === 'special'){
    res.status(200).json({
        message: 'product of special id',
        id : id
    })
}
else{
    res.status(200).json({
        message: 'passed on id'
    })
}
})



router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'product request update'
    })
})

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'product deleted'
    })
})
module.exports = router;