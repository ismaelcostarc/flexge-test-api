const logger = require('../../logger')
const Product = require('./model')
const validate = require('../utils/validate')
const locale = require('../locale')

module.exports = {
  async get(_, res) {
    try {
      const products = await Product.find()

      res.status(200).json(products)
    } catch (err) {
      logger.error(err)
      res.status(500).json({ error: locale.messages.general.serverError })
    }
  },
  async create(req, res) {
    const isValid = validate.requiredFields(req, res, ['name'])
    if (!isValid) return

    const { name } = req.body

    try {
      await Product.create({ name })

      res.status(201).json({ message: locale.messages.resources.products.created })
    } catch (err) {
      logger.error(err)
      res.status(500).json({ error: locale.messages.general.serverError })
    }
  },
}
