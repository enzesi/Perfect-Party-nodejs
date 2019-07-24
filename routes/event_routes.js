var express = require('express');
var router = express.Router();
let event_service = require('../services/event_services');

router.get('/clientInfo', async (req, res) => {
    const result = await client_service.getClientInfo()
    res.send(JSON.stringify(result))
})

module.exports = router;