const logger = require('../../logger')
const Product = require('./model')

module.exports = {
  async get(_, res) {
    try {
      const products = await Product.find()

      res.status(200).json(products)
    } catch (err) {
      logger.error(err)
      res.status(500).json({ error: 'Error Server' })
    }
  },
}
