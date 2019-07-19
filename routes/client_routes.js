var express = require('express');
var router = express.Router();
let client_service = require('../services/client_services');

/* GET client info. */

// router.get('/clientInfo', function(req, res, next) {;
//   try {
//     console.log('11');
//     res.end()
//     //res.send(clientInfo.getClient());
//   }
//   catch(e) {
//     console.log(e);
//   }
// });

router.get('/clientInfo', (req, res) => {
  console.log("client Info")
  res.send(client_service.getClient())
  res.end()
})

module.exports = router;
