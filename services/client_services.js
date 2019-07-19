let constant = require('../constants')
const client = constant.progres

module.exports = {
    //get client information in postgres
    getClient: async function(params) {
        try {
            await client.connect();
            console.log("Connected successfully to postgres");
            const results = await client.query("SELECT json_build_object('address',address) from client");
            console.log(results);
            await client.end();
            console.log("Client disconnected from postgres");
            return results;
        }
        catch(e) {
            console.log(e);
        }
    }
    
}