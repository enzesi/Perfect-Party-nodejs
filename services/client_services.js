let constant = require('../constants')
const pool = constant.pgpool

module.exports = {

    createClient: async function(clientname, phonenumber, billinginfo, address, advertisement, email, password) {
        const client = await pool.connect()
  
        try {
            res = await client.query("INSERT INTO Client VALUES (DEFAULT, $1, $2, $3, $4, $5, $6, $7)",
                [clientname, password, email, phonenumber, billinginfo, address, advertisement])
            res = await client.query("SELECT clientID FROM Client WHERE email = '" + email + "'")
        }
        catch (err) {
            return {"result": "Create client failed"}
        }
        finally {
            client.release()
        }
        return JSON.stringify(res.rows)
    },

    getClientID: async function(email, password) {

      const client = await pool.connect()
         try {
             res = await client.query("SELECT password FROM Client WHERE email = '" + email + "'")
             if (password == res.rows[0]['password']) {
                 res = await client.query("SELECT clientID FROM Client WHERE email = '" + email + "'")
             } else {
                 return {"result": "Wrong password"}
             }
             
         } 
         catch (err) {
             return {"result": "Cannot find client"}
         }
         finally {
             client.release()
         }
         //console.log(res.rows)
         return JSON.stringify(res.rows)
     },

     getClientName: async function(id) {
      const client = await pool.connect()
  
      try {
        res = await client.query("select c.clientname from client c where c.clientid = " + id)
        console.log('clientname')
        //console.log(res.rows)
      } 
      catch (err) {
        return { "result": "get clientName failed" }
      }
      finally {
        client.release()
      }
      return res.rows
    },
 
    
}

