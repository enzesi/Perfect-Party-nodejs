var express = require('express');
var router = express.Router();
let quote_service = require('../services/quote_services');


router.post('/createQuote', async (req, res) => {
    var product = req.body.productId
    var supplier = req.body.supplierId
    var price = req.body.price

    const result = await quote_service.createQuote(product, supplier, price)
    
    if ("result" in result) {
        res.status(400).send(result)
    } else {
        res.send(result)
    }
})


module.exports = router;
