/* eslint-disable */
const mysql = require('mysql')
const config = require('./config')

var con = mysql.createConnection({
  host: config.db.options.host,
  user: config.db.user,
  password: config.db.password,
  logging: false,

})

function createDB () {
  con.connect(function (err) {
    if (err) throw err
    console.log('Connected!')
    con.query(`CREATE DATABASE IF NOT EXISTS ${config.db.database}`, function (err, result) {
      if (err) throw err
      console.log('Database created')
    })
  })
}
 // eslint-disable-line
setTimeout(function () { 
  require('./populateSQL') 
}, 2000)

module.exports = createDB()
