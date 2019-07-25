let constant = require('../constants')
const pool = constant.pgpool

module.exports = {

    createLocation: async function (locationname, capacity, address, phonenumber, price) {
        const client = await pool.connect()

        try {
            res = await client.query("INSERT INTO Location VALUES (DEFAULT, $1, $2, $3, $4, $5)",
                [locationname, capacity, address, phonenumber, price])
            res = await client.query("SELECT * FROM Location")
        }
        catch (err) {
            return { "result": "Create location failed" }
        }
        finally {
            client.release()
        }
        return JSON.stringify(res.rows)
    },


}

