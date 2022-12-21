const logger = require('../../logger')
const Company = require('./model')
const validation = require('../utils/validation')
const locale = require('../locale')

module.exports = {
  async get(_, res) {
    try {
      const companies = await Company.find()

      res.status(200).json(companies)
    } catch (err) {
      logger.error(err)
      res.statusMessage = locale.messages.general.serverError
      res.status(500).end()
    }
  },
  async create(req, res) {
    const isValid = validation.containRequiredFields(req, res, ['name'])
    if (!isValid) return

    const { name } = req.body

    try {
      await Company.create({ name })

      res.status(201).json({ message: 'Company created' })
    } catch (err) {
      logger.error(err)
      res.statusMessage = locale.messages.general.serverError
      res.status(500).end()
    }
  },
}
