const logger = require('../../logger')
const Country = require('./model')

module.exports = {
  async get(req, res) {
    try {
      const countries = await Country.find()

      const { field } = req.query

      if (field) {
        res.status(200).json(countries.map(country => country[field]))
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
  async create(req, res) {
    const { name, stateList } = req.body

    if (!name) {
      res.status(402).json({ message: 'Name is required' })
      return
    }

    if (!stateList) {
      res.status(402).json({ message: 'State list is required' })
      return
    }

    try {
      const country = {
        name,
        stateList,
      }

      await Country.create(country)

      res.status(201).json({ message: 'Country created' })
    } catch (err) {
      logger.error(err)
      res.status(500).json({ error: 'Error Server' })
    }
  },
}
