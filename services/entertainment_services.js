let constant = require('../constants')
const pool = constant.pgpool

module.exports = {

    createEntertainment: async function (product) {
        const client = await pool.connect()

        try {
            res = await client.query("INSERT INTO Entertainment VALUES ($1)", [product])
            res = await client.query("SELECT * FROM Entertainment")
        }
        catch (err) {
            return { "result": "Create Entertainment failed" }
        }
        finally {
            client.release()
        }
        return JSON.stringify(res.rows)
    },


}

