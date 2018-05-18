const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const {sequelize} = require('./models')

module.exports = (app) => {
  app.post('/register', AuthenticationControllerPolicy.register,
    AuthenticationController.register)

  app.post('/login', AuthenticationController.login)

  app.post('/apply', AuthenticationController.teacher_register)

  app.post('/contact', AuthenticationController.leave_question)

  app.get('/show_teacher_info', (req, res) => {
    sequelize.query('SELECT * FROM Teachers').then(myTableRows => {
      res.send(myTableRows)
    })
  })
}
