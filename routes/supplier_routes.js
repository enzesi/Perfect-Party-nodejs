var express = require('express');
var router = express.Router();
let supplier_service = require('../services/supplier_services');


router.post('/createSupplier', async (req, res) => {
    var status = 0

    var email = req.body.email
    var phonenumber = req.body.phonenumber
    var billingaddress = req.body.billingaddress

    const result = await supplier_service.createSupplier(email, phonenumber, billingaddress)

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
