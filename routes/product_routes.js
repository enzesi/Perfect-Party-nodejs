var express = require('express');
var router = express.Router();
let product_service = require('../services/product_services');


router.post('/createProduct', async (req, res) => {
    var status = 0
    var productId = req.body.productId
    var name = req.body.name
    var type = req.body.type

    const result = await product_service.createProduct(productId, name, type)

    if ("result" in result) {
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
