var express = require('express');
var router = express.Router();
let product_service = require('../services/product_services');


router.post('/createProduct', async (req, res) => {
    var status = 0

    var supplier = req.body.supplier
    var price = req.body.price
    var name = req.body.name

    const result = await product_service.createProduct(supplier, price, name)

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


module.exports = router;
