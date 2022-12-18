/* eslint-disable indent */
const logger = require('../../logger')
const Country = require('./model')

module.exports = {
  async get(req, res) {
    const { field } = req.query

    try {
      const countries = field
        ? await Country.aggregate([{ $project: { [field]: `$${field}` } }])
        : await Country.find()

      console.log(countries)

      res.status(200).json(countries)
    } catch (err) {
      logger.error(err)
      res.status(500).json({ error: 'Error Server' })
    }
  },
  async getById(req, res) {
    const id = req.params.id
    const { field } = req.query

    try {
      const country = field
        ? await Country.aggregate([
            { $match: { $expr: { $eq: ['$_id', { $toObjectId: id }] } } },
            { $project: { [field]: `$${field}` } },
          ])
        : await Country.findOne({ _id: id })

      if (!country) {
        res.status(404).json({ message: 'Country not found' })
        return
      }

      res.status(200).json(country)
    } catch (err) {
      logger.error(err) /*  */
      res.status(500).json({ error: 'Error Server' })
    }
  },
  async create(req, res) {
    const { name, states } = req.body

    if (!name) {
      res.status(402).json({ message: 'Name is required' })
      return
    }

    if (!states) {
      res.status(402).json({ message: 'State list is required' })
      return
    }

    try {
      const country = {
        name,
        states,
      }

      await Country.create(country)

      res.status(201).json({ message: 'Country created' })
    } catch (err) {
      logger.error(err)
      res.status(500).json({ error: 'Error Server' })
    }
  },
}
