const logger = require('../../logger')
const Country = require('./model')

module.exports = {
  async get(req, res) {
    try {
      const countries = await Country.find()
      if (req.query.field) {
        const formattedCountries = countries.map(
          (country) => country[req.query.field]
        )
        res.status(200).json(formattedCountries)
        return
      }

      res.status(200).json(countries)
    } catch (err) {
      logger.error(err)
      res.status(500).json({ error: 'Error Server' })
    }
  },
  async getById(req, res) {
    const id = req.params.id

    try {
      const country = await Country.findOne({ _id: id })

      if (!country) {
        res.status(404).json({ message: 'Country not found' })
        return
      }

      const { field } = req.query

      if (field) {
        res.status(200).json(country[field])
        return
      }

      res.status(200).json(country)
    } catch (err) {
      logger.error(err)
      res.status(500).json({ error: 'Error Server' })
    }
  },
}
