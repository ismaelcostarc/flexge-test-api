const logger = require('../../logger')
const mongoose = require('mongoose')
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
  async create(req, res) {
    const { name } = req.body

    if (!name) {
      res.status(402).json({ message: 'Name is required' })
      return
    }

    const product = {
      _id: new mongoose.Types.ObjectId(),
      name,
    }
    try {
      await Product.create(product)

      res.status(201).json({ message: 'Product created' })
    } catch (err) {
      logger.error(err)
      res.status(500).json({ error: 'Error Server' })
    }
  },
}
