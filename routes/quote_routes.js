var express = require('express');
var router = express.Router();
let quote_service = require('../services/quote_services');


router.post('/createQuote', async (req, res) => {
    var status = 0

    var product = req.body.product
    var supplier = req.body.supplier
    var price = req.body.price

    const result = await quote_service.createQuote(product, supplier, price)

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
