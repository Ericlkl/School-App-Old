const {Instrument} = require('../models')

module.exports = {
  async insert_Instrument (req, res) {
    try {
      const instrument = await Instrument.create(req.body)
      res.send(instrument.toJSON())
    } catch (err) {
      res.status(400).send({
        error: 'Instrument is already exist.'
      })
    }
  },

  async select_all_instrument (req, res) {
    try {
      const instrument = await Instrument.findAll()
      res.send(instrument)
    } catch (err) {
      console.log(err)
      res.status(400).send({
        error: 'Error.'
      })
    }
  }

}
