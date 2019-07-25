let constant = require('../constants')
const pool = constant.pgpool

module.exports = {

    createCatering: async function (product) {
        const client = await pool.connect()

        try {
            res = await client.query("INSERT INTO Catering VALUES ($1)", [product])
            res = await client.query("SELECT * FROM Catering")
        }
        catch (err) {
            return { "result": "Create Catering failed" }
        }
        finally {
            client.release()
        }
        return JSON.stringify(res.rows)
    },


}

