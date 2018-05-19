const {Course} = require('../models')

module.exports = {
  async insert_Course (req, res) {
    try {
      const course = await Course.create(req.body)
      res.send(course.toJSON())
    } catch (err) {
      res.status(400).send({
        error: 'This Course is already in existed.'
      })
    }
  },

  async select_all_course (req, res) {
    try {
      const course = await Course.findAll()
      res.send(course)
    } catch (err) {
      console.log(err)
      res.status(400).send({
        error: 'Error.'
      })
    }
  }

}
