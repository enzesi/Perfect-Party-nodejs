var express = require('express');
var router = express.Router();
let event_service = require('../services/event_services');


router.post('/createEvent', async (req, res) => {
    var status = 0
    var data = req.body.data

    console.log(data)

    var clientID = data.clientId[0].clientid
    var type = data.type
    var budget = data.budget
    var startDate = data.start
    var endDate = data.end
    var capacity = data.numattend
    var emailList = data.emailList
    var status = data.status
    var visibility = data.visibility
    var flower = data.flower
    var catering = data.catering
    var entertainment = data.entertain
    var location = data.location

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

router.get('/allEvents', async (req, res) => {
    console.log(req)
    const result = await event_service.getAllVisibleEvents()
    res.send(JSON.stringify(result))
})

router.get('/pastEvent/:id', async (req, res) => {
    console.log(req)
    var id = req.params.id
    const result = await event_service.getAllPastEvents(id)
    res.send(JSON.stringify(result))
})

router.get('/upComingEvent/:id', async (req, res) => {
    console.log(req)
    var id = req.params.id
    const result = await event_service.getUpComingEvents(id)
    res.send(JSON.stringify(result))
}),

router.get('/favouriteEvents/:clientid', async (req, res) => {
    console.log(req)
    var clientid = req.params.clientid
    const result = await event_service.getFavEvents(id)
    res.send(JSON.stringify(result))
})




module.exports = router;
