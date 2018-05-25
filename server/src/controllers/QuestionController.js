const {Question} = require('../models')

module.exports = {
  async leave_question (req, res) {
    try {
      const question = await Question.create(req.body)
      res.send(question.toJSON())
    } catch (err) {
      console.log(err)
      // any insert error occur will show in here
      res.status(400).send({
        error: 'something went wrong with the data'
      })
    }
  }
}
