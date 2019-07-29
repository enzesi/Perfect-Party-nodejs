let constant = require('../constants')
const pool = constant.pgpool

module.exports = {

    createProduct: async function (productId, name, type) {
        const client = await pool.connect()

        try {
            /*
            if (productId != -1) {//update
                
            }
            //console.log("INSERT INTO Product VALUES (DEFAULT, '" + name + "')")
            else {
            */
                res = await client.query("INSERT INTO Product VALUES (DEFAULT, $1, $2)", [name, type])
                res = await client.query("SELECT ProductID FROM Product WHERE name = '" + name + "' and type = '" + type + "'")
            
        }
        catch (err) {
            return { "result": "Create product failed" }
        }
        finally {
            client.release()
        }

        return res.rows[0]
    }


}

