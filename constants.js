const {Client} = require('pg')
const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Perfect Party',
  password: '123456',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000
})

//not used
client = new Client({
    user: "postgres",
    password: "123456",
    host: "localhost",
    port: 5432,
    database: "Perfect Party"
})

module.exports = {
    pgclient: client,
    pgpool : pool
};