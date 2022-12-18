const logger = require('../../logger')
const mongoose = require('mongoose')
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
  async create(req, res) {
    const { name } = req.body

    if (!name) {
      res.status(402).json({ message: 'Name is required' })
      return
    }

    const company = {
      _id: new mongoose.Types.ObjectId(),
      name
    }

    try {
      await Company.create(company)

      res.status(201).json({ message: 'Country created' })
    } catch (err) {
      logger.error(err)
      res.status(500).json({ error: 'Error Server' })
    }
  },
}
