const logger = require('../../logger')
const Company = require('./model')

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
}
