var express = require('express');
var router = express.Router();
let clientInfo = require('../services/client_services');

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
  res.end()
})

module.exports = router;
