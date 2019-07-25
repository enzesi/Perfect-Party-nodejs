let constant = require('../constants')
const pool = constant.pgpool

module.exports = {

    createFavEvent: async function (clientid, eventid, name) {
        const client = await pool.connect()

        try {
            res = await client.query("INSERT INTO Favourites VALUES ($1, $2, DEFAULT, $3)", [clientid, eventid, name])
        }
        catch (err) {
            return { "result": "Create FavEvent failed" }
        }
        finally {
            client.release()
        }
        return JSON.stringify(res.rows)
    },

    deleteFavEvent: async function (clientid, eventid) {
        const client = await pool.connect()

        try {
            res = await client.query("Delete from Favourites where client = " + clientid + " and event = " + eventid)
        }
        catch (err) {
            return { "result": "Delete FavEvent failed" }
        }
        finally {
            client.release()
        }
        return JSON.stringify(res.rows)
    },

}

