var express = require('express');
var router = express.Router();
let quote_service = require('../services/quote_services');


router.post('/createQuote', async (req, res) => {
    var product = req.body.data.productId
    var supplier = req.body.data.supplierId
    var price = req.body.data.price

    const result = await quote_service.createQuote(product, supplier, price)
    
    if ("result" in result) {
        res.status(400).send(result)
    } else {
        res.send(result)
    }
})


module.exports = router;
