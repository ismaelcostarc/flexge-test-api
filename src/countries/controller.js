/* eslint-disable indent */
const logger = require('../../logger')
const validate = require('../utils/validate')
const Country = require('./model')

module.exports = {
  async get(req, res) {
    const { field } = req.query

    try {
      const countries = field
        ? await Country.aggregate([{ $project: { [field]: `$${field}` } }])
        : await Country.find()

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
    const isValid = validate.requiredFields(req, res, ['name', 'states'])
    if (!isValid) return

    const { name, states } = req.body

    try {
      await Country.create({ name, states })

      res.status(201).json({ message: 'Country created' })
    } catch (err) {
      logger.error(err)
      res.status(500).json({ error: 'Error Server' })
    }
  },
}
