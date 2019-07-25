var express = require('express');
var router = express.Router();
let entertainment_service = require('../services/entertainment_services');


router.post('/createEntertainment', async (req, res) => {
    var status = 0

    var product = req.body.product

    const result = await entertainment_service.createEntertainment(product)

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
