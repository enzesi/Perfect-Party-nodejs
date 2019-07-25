let constant = require('../constants')
const pool = constant.pgpool

module.exports = {

    createFlower: async function (product) {
        const client = await pool.connect()

        try {
            res = await client.query("INSERT INTO Flower VALUES ($1)", [product])
            res = await client.query("SELECT * FROM Flower")
        }
        catch (err) {
            return { "result": "Create Flower failed" }
        }
        finally {
            client.release()
        }
        return JSON.stringify(res.rows)
    },


}

