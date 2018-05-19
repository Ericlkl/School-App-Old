const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
// const {sequelize} = require('./models')

module.exports = (app) => {
  // not gonna use
  app.post('/register', AuthenticationControllerPolicy.register,
    AuthenticationController.register)
  // not gonna use
  app.post('/login', AuthenticationController.login)

  // route for contact us page to submit their question to the database
  app.post('/contact', AuthenticationController.leave_question)

  // route for insert Teacher information to the database easily
  app.post('/insert_teacher', AuthenticationController.insert_Teacher)

  // route for pass the tutors information from database to get_tutors page
  app.get('/show_tutors', AuthenticationController.select_all_teacher)
}
