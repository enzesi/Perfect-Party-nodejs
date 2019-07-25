var express = require('express');
var router = express.Router();
let event_service = require('../services/event_services');

router.post('/createEvent', async (req, res) => {
    var status = 0
    var data = req.body.data
    var clientId = data.clientId
    var eventname = data.clientname
    var numattend = data.numattend
    var budget = data.budget
    var type = data.type
    var startdate = data.startdate
    var enddate = data.enddate
    var capacity = data.capacity
    var emaillist = data.emaillist
    var eventstatus = data.status
    var visibility = data.visibility
    var flowerId = data.flowerId
    var cateringId = data.cateringId
    var entertainmentId = data.entertainmentId
    var locationId = data.locationId



    console.log(req.body.user)
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