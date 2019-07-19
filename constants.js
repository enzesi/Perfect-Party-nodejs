const {Client} = require('pg')
client = new Client({
    user: "postgres",
    password: "123456",
    host: "localhost",
    port: 5432,
    database: "Perfect Party"
})

module.exports = {
    progres: client
};