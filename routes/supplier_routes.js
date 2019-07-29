var express = require('express');
var router = express.Router();
let supplier_service = require('../services/supplier_services');


router.post('/createSupplier', async (req, res) => {
    var status = 0

    console.log(req)
    var supplierId = req.body.data.supplierId
    var name = req.body.data.name
    var email = req.body.data.email
    var phonenumber = req.body.data.phone
    var billingaddress = req.body.data.address

    const result = await supplier_service.createSupplier(name, email, phonenumber, billingaddress)

    if ("result" in result) {
        res.status(400).send(result)
    } else {
        res.send(result)
    }

})


module.exports = router;
