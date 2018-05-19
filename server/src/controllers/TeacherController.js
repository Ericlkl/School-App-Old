const {Teacher} = require('../models')

module.exports = {
  async insert_Teacher (req, res) {
    try {
      const teacher = await Teacher.create(req.body)
      res.send(teacher.toJSON())
    } catch (err) {
      res.status(400).send({
        error: 'This Teacher Account is already in Use.'
      })
    }
  },

  async select_all_teacher (req, res) {
    try {
      const teacher = await Teacher.findAll()
      res.send(teacher)
    } catch (err) {
      console.log(err)
      res.status(400).send({
        error: 'Error.'
      })
    }
  }

}
