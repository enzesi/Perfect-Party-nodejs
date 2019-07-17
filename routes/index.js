var express = require('express');
var router = express.Router();
let service = require('../services/services')

//connect to postgres
const {Client} = require('pg')
const client = new Client({
  user: "postgres",
  password: "123456",
  host: "localhost",
  port: 5432,
  database: "Perfect Party"
})

client.connect()
.then(() => console.log("Connected successfully"))
.catch(e => console.log)
.finally(() => client.end())

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    await service.getParty();
    res.render('index', { title: 'Express' });
  }catch(e){
    console.log(e)
  }
  
});

// router.post('/', async function) {

// }

module.exports = router;
