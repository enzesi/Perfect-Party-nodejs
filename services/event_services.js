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

    getAllVisibleEvents: async function () {
        const client = await pool.connect()

        try {
            res = await client.query("SELECT * FROM EVENT where visibility = '1'")
        }
        catch (err) {
            return { "result": "Get events failed" }
        }
        finally {
            client.release()
        }
        return JSON.stringify(res.rows)
    },

    getUpComingEvents: async function (id) {
        const client = await pool.connect()

        try {
            res = await client.query("SELECT * FROM EVENT WHERE client = " + id + " and enddate > current_date")
        }
        catch (err) {
            return { "result": "Get events failed" }
        }
        finally {
            client.release()
        }
        return JSON.stringify(res.rows)
    },

    getAllPastEvents: async function (id) {
        const client = await pool.connect()

        try {
            res = await client.query("SELECT * FROM EVENT WHERE client = " + id + " and enddate <= current_date")
        }
        catch (err) {
            return { "result": "Get events failed" }
        }
        finally {
            client.release()
        }
        console.log(res.rows)
        return JSON.stringify(res.rows)
    },

    getFavEvents: async function (clientid) {
        const client = await pool.connect()

        try {
            res = await client.query("select * from Favourites f join Event e " + 
            "on f.client = e.client and f.event = e.eventid where f.client = " + clientid)
        }
        catch (err) {
            return { "result": "Get events failed" }
        }
        finally {
            client.release()
        }
        return JSON.stringify(res.rows)
    },




}