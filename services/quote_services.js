let constant = require('../constants')
const pool = constant.pgpool

module.exports = {

    createQuote: async function (product, supplier, price) {
        const client = await pool.connect()

        try {
            res = await client.query("INSERT INTO Quotes VALUES ($1, $2, DEFAULT, $3)",
                [product, supplier, price])
            res = await client.query("SELECT * FROM Quotes WHERE productid = '" + product + "' and supplierid = '" + supplier + "'")
        }
        catch (err) {
            return { "result": "Create quote failed" }
        }
        finally {
            client.release()
        }
        return res.rows[0]
    },


}

