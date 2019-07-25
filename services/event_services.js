let constant = require('../constants')
const pool = constant.pgpool

module.exports = {

    createEvent: async function (clientID, type, budget, startDate, endDate, capacity, emailList, status, visibility, flower, catering, entertainment, location) {
        const client = await pool.connect()

        try {
            console.log("INSERT INTO Event VALUES (DEFAULT, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)",
                [clientID, type, budget, startDate, endDate, capacity, emailList, status, visibility, flower, catering, entertainment, location])
            res = await client.query("INSERT INTO Event VALUES (DEFAULT, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)",
                [clientID, type, budget, startDate, endDate, capacity, emailList, status, visibility, flower, catering, entertainment, location])

            res = await client.query("SELECT * FROM Event WHERE client = '" + clientID + "'")
        }
        catch (err) {
            return { "result": "Create event failed" }
        }
        finally {
            client.release()
        }
        return JSON.stringify(res.rows)
    },


}