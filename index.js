var express = require('express');
var router = express.Router();
let clientInfo = require('./services/client_services')

const clientRoutes = require('./routes/client_routes')


async function getClient(params) {
  var result = await clientInfo.getClient()
}

getClient()

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    await clientInfo.getClient();
    res.render('index', { title: 'Express' });
  }
  catch(e){
    console.log(e);
  }
  
});

// router.post('/', async function) {

// }

module.exports = router;
