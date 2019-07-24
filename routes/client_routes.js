var express = require('express');
var router = express.Router();
let client_service = require('../services/client_services');


/* GET client info. */

router.get('/clientInfo', async (req, res) => {
    const result = await client_service.getClientInfo()
    res.send(JSON.stringify(result))
})

router.post('/clientPassword', async (req, res) => {
    var status = 0

    var email = req.body.email
    var password = req.body.password
    
    const result = await client_service.getClientID(email, password)
    //console.log(result)

    try {
        if ("result" in result) {
            status = 0
        }
    }
    catch (err){
        status = 1
    }
    //console.log(status)
    if (status == 0) {
        res.status(400).send(result)
    } else {
        res.send(result)    
    }
    
})

router.post('/createClient', async (req, res) => {
    var status = 0

    var clientname = req.body.clientname
    var phonenumber = req.body.phonenumber
    var billinginfo = req.body.billinginfo
    var address = req.body.address
    var advertisement = req.body.advertisement
    var email = req.body.email
    var password = req.body.password
    
    const result = await client_service.createClient(clientname, phonenumber, billinginfo, address, advertisement, email, password)

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
