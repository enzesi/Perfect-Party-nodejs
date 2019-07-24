var express = require('express');
var router = express.Router();
let event_service = require('../services/event_services');

router.post('/createEvent', async (req, res) => {
    var status = 0

    var eventname = req.body.clientname
    var numattend = req.body.numattend
    var budget = req.body.budget
    console.log(budget)
    /*
    const result = await client_service.createClient(clientname, phonenumber, billinginfo, address, advertisement, email, password)
    console.log(result)
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
    */
   res.send({"result":"success"})
    
})

module.exports = router;