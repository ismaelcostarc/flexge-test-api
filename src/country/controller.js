/* eslint-disable indent */
const logger = require('../../logger')
const validation = require('../utils/validation')
const Country = require('./model')
const locale = require('../locale')

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
      res.statusMessage = locale.messages.general.serverError
      res.status(500).end()
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
        res.statusMessage = locale.messages.resources.countries.notFound
        res.status(404).end()
        return
      }

      res.status(200).json(country)
    } catch (err) {
      logger.error(err)

      if (err.kind === 'ObjectId') {
        res.statusMessage = locale.messages.general.incorrectParameter
        res.status(400).end()
        return
      }
      
      res.statusMessage = locale.messages.general.serverError
      res.status(500).end()
    }
  },
  async create(req, res) {
    const isValid = validation.containRequiredFields(req, res, ['name', 'states'])
    if (!isValid) return

    const { name, states } = req.body

    try {
      await Country.create({ name, states })

      res.status(201).json({ message: locale.messages.resources.countries.created })
    } catch (err) {
      logger.error(err)
      res.statusMessage = locale.messages.general.serverError
      res.status(500).end()
    }
  },
}
