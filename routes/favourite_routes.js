var express = require('express');
var router = express.Router();
let flower_service = require('../services/favourite_services');


router.get('/createFavEvent/:clientid/:eventid', async (req, res) => {
    console.log(req)

    var status = 0

    var clientId = req.params.clientid
    var eventId = req.params.eventid
    var name = "Favourite event"

    const result = await flower_service.createFavEvent(clientId, eventId, name)

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

router.get('/deleteFavEvent/:clientid/:eventid', async (req, res) => {
    console.log(req)

    var status = 0

    var clientId = req.params.clientId
    var eventId = req.params.eventId
    var name = "Favourite event"

    const result = await flower_service. deleteFavEvent(clientId, eventId)

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
