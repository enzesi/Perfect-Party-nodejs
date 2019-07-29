var express = require('express');
var router = express.Router();
let supplier_service = require('../services/supplier_services');


router.post('/createSupplier', async (req, res) => {
    var status = 0

    var supplierId = req.body.supplierId
    var name = req.body.name
    var email = req.body.email
    var phonenumber = req.body.phone
    var billingaddress = req.body.address

    const result = await supplier_service.createSupplier(name, email, phonenumber, billingaddress)

    if ("result" in result) {
        res.status(400).send(result)
    } else {
        res.send(result)
    }

})


module.exports = router;
