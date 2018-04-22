const path = require('path')

module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'musicSchool',
    user: process.env.DB_USER || 'musicSchool',
    password: process.env.DB_PASS || 'musicSchool',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: path.resolve(__dirname, '../../musicSchool.sqlite')
    }
  }
}