const {User} = require('../models')

module.exports = {
  // Useless it is an example
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
  }
}
