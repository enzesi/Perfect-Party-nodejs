let constant = require('../constants')
const pool = constant.pgpool

module.exports = {

    createSupplier: async function (email, phonenumber, billingaddress) {
        const client = await pool.connect()

        try {
            res = await client.query("INSERT INTO Supplier VALUES (DEFAULT, $1, $2, $3)",
                [email, phonenumber, billingaddress])
            res = await client.query("SELECT supplierID FROM Supplier WHERE email = '" + email + "'")
        }
        catch (err) {
            return { "result": "Create supplier failed" }
        }
        finally {
            client.release()
        }
        return JSON.stringify(res.rows)
    },


}

