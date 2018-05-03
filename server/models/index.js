
//importing files and moduels that are needed for sql
const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

//creating a db object with the following params
const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
)

//reading the files for SQL DB
fs
  .readdirSync(__dirname)
  .filter((file) =>
    
    file !== 'index.js'
  )
  //for each element in the db by using for each
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })
//adding associations in our db by using foreach loop
Object.keys(db).forEach(function (modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db)
  }
})


db.sequelize = sequelize
db.Sequelize = Sequelize
//to export
module.exports = db