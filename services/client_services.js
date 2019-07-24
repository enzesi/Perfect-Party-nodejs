let constant = require('../constants')
const pool = constant.pgpool

module.exports = {

    createClient: async function(clientname, phonenumber, billinginfo, address, advertisement, email, password) {
      const client = await pool.connect()
  
      try {
        const res = await client.query("INSERT INTO Client VALUES (DEFAULT, $1, $2, $3, $4, $5, $6, $7)", 
          [clientname, password, email, phonenumber, billinginfo, address, advertisement])
      } 
      catch (err) {
        throw err
      }
      finally {
        client.release()
      }
      return res.rows
    },

    getClientID: async function(email, password) {

      const client = await pool.connect()
         
         try {
             res = await client.query("SELECT password FROM Client WHERE email = '" + email + "'")
             console.log(res)
             console.log(password)
             if (password == res.rows[0]['password']) {
                 res = await client.query("SELECT clientID FROM Client WHERE email = '" + email + "'")
             } else {
                 return { "result": "WRONG PASSWORD!" }
             }
             
         } 
         catch (err) {
             throw err
         }
         finally {
             client.release()
         }
         console.log(res.rows)
         return res.rows
     },

     getClientInfo: async function() {
      const client = await pool.connect()
  
      try {
        const res = await client.query("SELECT json_build_object('address',address) from client")
      } 
      catch (err) {
        throw err
      }
      finally {
        client.release()
      }
      console.log(res.rows)
      return res.rows
    },
 
    
}

