const {User} = require('../models')
const {Teacher} = require('../models')
const {Question} = require('../models')

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      res.send(user.toJSON())
    } catch (err) {
      res.status(400).send({
        error: 'This Email Account is already in Use.'
      })
    }
  },

  async login (req, res) {
    try {
      const {email, password} = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })

      if (!user) {
        return res.status(403).send({
          error: 'no User Found'
        })
      }

      const isPasswordValid = password === user.password

      if (!isPasswordValid) {
        return res.status(403).send({
          error: 'Password is not correct'
        })
      }

      const userJSON = user.toJSON()
      res.send({
        user: userJSON
      })
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to log in'
      }) // end of error msg
    } // end of the catch block
  },

  async teacher_register (req, res) {
    try {
      const teacher = await Teacher.create(req.body)
      res.send(teacher.toJSON())
    } catch (err) {
      console.log(err)
      // any insert error occur will show in here
      res.status(400).send({
        error: 'This Teacher is already in database.'
      })
    }
  },

  async leave_question (req, res) {
    try {
      const question = await Question.create(req.body)
      res.send(question.toJSON())
    } catch (err) {
      console.log(err)
      // any insert error occur will show in here
      res.status(400).send({
        error: 'Something wrong with leave question'
      })
    }
  }
}
