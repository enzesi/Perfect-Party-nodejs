var express = require('express');
var router = express.Router();
let event_service = require('../services/event_services');


router.post('/createEvent', async (req, res) => {
    var status = 0

    var clientID = req.body.client
    var type = req.body.type
    var budget = req.body.budget
    var startDate = req.body.startDate
    var endDate = req.body.endDate
    var capacity = req.body.capacity
    var emailList = req.body.emailList
    var status = req.body.status
    var visibility = req.body.visibility
    var flower = req.body.flower
    var catering = req.body.catering
    var entertainment = req.body.entertainment
    var location = req.body.location

    const result = await event_service.createEvent(clientID, type, budget, startDate, endDate, capacity, emailList, status, visibility, flower, catering, entertainment, location)

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
