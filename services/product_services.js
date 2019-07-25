let constant = require('../constants')
const pool = constant.pgpool

module.exports = {

    createProduct: async function (supplier, price, name) {
        const client = await pool.connect()

        try {
            res = await client.query("INSERT INTO Product VALUES (DEFAULT, $1, $2, $3)",
                [supplier, price, name])
            res = await client.query("SELECT ProductID FROM Product WHERE name = '" + name + "'")
        }
        catch (err) {
            return { "result": "Create product failed" }
        }
        finally {
            client.release()
        }
        return JSON.stringify(res.rows)
    },


}

