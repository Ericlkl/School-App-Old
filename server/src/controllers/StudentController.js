const {Student} = require('../models')

module.exports = {
  async insert_Student (req, res) {
    try {
      const student = await Student.create(req.body)
      res.send(student.toJSON())
    } catch (err) {
      res.status(400).send({
        error: 'This student is already in database.'
      })
    }
  }
}
