var express = require('express');
var router = express.Router();
let location_service = require('../services/location_services');


router.post('/createLocation', async (req, res) => {
    var status = 0

    var locationname = req.body.locationname
    var capacity = req.body.capacity
    var address = req.body.address
    var phonenumber = req.body.phonenumber
    var price = req.body.price

    const result = await location_service.createLocation(locationname, capacity, address, phonenumber, price)

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
