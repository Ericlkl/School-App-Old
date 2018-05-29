/* eslint-disable */

const express = require('express')
const app = express()

// config data for create Database for Squelize
const config = require('./config/config')

// Create MySql Database if it is not exist
require('./config/mysql_DB')
// process JSON File
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')


app.use(bodyParser.json())
app.use(cors())

// post get method
require('./routes')(app)
 // eslint-disable-line
setTimeout(function () { 
  sequelize
  .sync({logging: false}).catch(function (err) {
      console.log(err);
  })
  .then(() => {
    app.listen(config.port)

    console.log(`Server started on port ${config.port}`)
  })
}, 1000)

   module.exports.app = app;