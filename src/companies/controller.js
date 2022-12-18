const logger = require('../../logger')
const Company = require('./model')
const validate = require('../utils/validate')

module.exports = {
  async get(_, res) {
    try {
      const companies = await Company.find()

      res.status(200).json(companies)
    } catch (err) {
      logger.error(err)
      res.status(500).json({ error: 'Error Server' })
    }
  },
  async create(req, res) {
    const isValid = validate.requiredFields(req, res, ['name'])
    if (!isValid) return

    const { name } = req.body

    try {
      await Company.create({ name })

      res.status(201).json({ message: 'Country created' })
    } catch (err) {
      logger.error(err)
      res.status(500).json({ error: 'Error Server' })
    }
  },
}
