/* eslint-disable */
// Sequelize function for submit question to database
const QuestionController = require('./controllers/QuestionController')
// Sequelize function for insert teacher information to DB or get information from DB
const TeacherController = require('./controllers/TeacherController')
// Sequelize function for insert Event information to DB or get information from DB
const EventController = require('./controllers/EventController')
// Sequelize function for insert Course information to DB or get information from DB
const CourseController = require('./controllers/CourseController')
// Sequelize function for insert Instrument information to DB or get information from DB
const InstrumentController = require('./controllers/InstrumentController')
// Sequelize function for insert Student information to DB
const StudentController = require('./controllers/StudentController')

module.exports = (app) => {
  /*
     To Stas, Those insert_xxx route is made for insert data to DB easily
     You can copy the json from testing.json file in the root folder
     to post the information using postman, to test the page
  */
  app.get('/', (req, res)=>{
      res.send("Hello world");
  });

  // route for contact us page to submit their question to the database
  //THIS ROUTE HAS BEEN TESTED
  app.post('/contact', QuestionController.leave_question)

  // route for insert Teacher information to the database easily
  // THIS ROUTE HAS BEEN TESTED
  app.post('/insert_teacher', TeacherController.insert_Teacher)

  // route for pass the tutors information from database to get_tutors page
  // THIS ROUTE HAS BEEN TESTED
  app.get('/show_tutors', TeacherController.select_all_teacher)

  // route for insert event information to the database easily
  // THIS ROUTE HAS BEEN TEST
  app.post('/insert_event', EventController.insert_Event)

  // route for pass the event information from database to event page
  //THIS ROUTE HAS BEEN TESTED
  app.get('/show_events', EventController.select_all_event)

  // route for insert course information to the database easily
  //THIS ROUTE HAS BEEN TESTED
  app.post('/insert_course', CourseController.insert_Course)

  // route for pass the course information from database to course page
  //THIS ROUTE HAS BEEN TESTED
  app.get('/show_course', CourseController.select_all_course)

  // route for insert Instrument information to the database easily
  //THIS ROUTE HAS BEEN TESTED
  app.post('/insert_instrument', InstrumentController.insert_Instrument)

  // route for pass the Instrument information from database to Instrument page
  //THIS ROUTE HAS BEEN TESTED
  app.get('/show_instrument', InstrumentController.select_all_instrument)


  // route for insert Student information to the database easily
  app.post('/insert_Student', StudentController.insert_Student)
}
