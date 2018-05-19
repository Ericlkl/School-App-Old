const {Event} = require('../models')

module.exports = {
  async insert_Event (req, res) {
    try {
      const event = await Event.create(req.body)
      res.send(event.toJSON())
    } catch (err) {
      res.status(400).send({
        error: 'This Event is already exist.'
      })
    }
  },

  async select_all_event (req, res) {
    try {
      const event = await Event.findAll()
      res.send(event)
    } catch (err) {
      console.log(err)
      res.status(400).send({
        error: 'Error.'
      })
    }
  }

}
