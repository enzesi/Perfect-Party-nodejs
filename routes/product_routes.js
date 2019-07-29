var express = require('express');
var router = express.Router();
let product_service = require('../services/product_services');


router.post('/createProduct', async (req, res) => {
    var status = 0

    
    var productId = req.body.data.productId
    var name = req.body.data.name
    var type = req.body.data.type

    const result = await product_service.createProduct(productId, name, type)
    console.log(result)
    try {
        if ("result" in result) {
            status = 0
        }
        else {
            status = -1
        }
    }
    catch (err) {
        status = 1
    }

    if (status == 0) {
        res.status(400).send(result)
    } else {
        res.send(result)
    }

})

/*
router.get('/product', async (req, res) => {
    var status = 0
    const result = await product_service.getProduct(name)

    try {
        if ("result" in result) {
            status = 0
        }
    }
    catch (err) {
        status = 1
    }
    if (status == 0) {
        res.status(400).send(result)
    } else {
        res.send(result)
    }

})
*/


module.exports = router;
