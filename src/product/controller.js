const logger = require('../../logger')
const Product = require('./model')
const validation = require('../utils/validation')
const locale = require('../locale')

module.exports = {
  async get(_, res) {
    try {
      const products = await Product.find()

      res.status(200).json(products)
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
      await Product.create({ name })

      res.status(201).json({ message: locale.messages.resources.products.created })
    } catch (err) {
      logger.error(err)
      res.statusMessage = locale.messages.general.serverError
      res.status(500).end()
    }
  },
}
