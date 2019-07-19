var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    //await clientInfo.getClient();
    res.render('index', { title: 'Express' });
  }
  catch(e){
    console.log(e);
  }
  
});

// router.post('/', async function) {

// }

module.exports = router;
