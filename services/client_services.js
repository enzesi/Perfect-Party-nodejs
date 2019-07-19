let constant = require('../constants')
const pool = constant.pgpool

module.exports = {
    //get client information in postgres 
    // getClient: async function(params) {
    //     try {
    //         //await client.connect();
    //         console.log("Connected successfully to postgres");
    //         const results = await pool.query("SELECT json_build_object('address',address) from client");
    //         console.log(results);
    //         //await client.end();
    //         console.log("Client disconnected from postgres");
    //         return results;
    //     }
    //     catch(e) {
    //         console.log(e);
    //     }
    // }

    //using pool to get info
    getClient: function() {
        pool.connect(function(err, client, done) {
            if(err) {
              return console.error('error fetching client from pool', err);
            }
            client.query("SELECT json_build_object('address',address) from client", function(err, result) {
              //call `done()` to release the client back to the pool
              done();
          
              if(err) {
                return console.error('error running query', err);
              }
              console.log(result);
              return result
              //output: 1
            });
        });
    }
}

