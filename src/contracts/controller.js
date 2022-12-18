const logger = require('../../logger')
const mongoose = require('mongoose')
const Contract = require('./model')

module.exports = {
  async create(req, res) {
    const {
      country,
      state,
      city,
      documentNumber,
      socialReason,
      address,
      district,
      number,
      zipCode,
      email,
      phone,
      startsIn,
      endsIn,
      dueDay,
      file,
      company,
      products,
    } = req.body

    try {


      res.status(200).json(countries)
    } catch (err) {
      logger.error(err)
      res.status(500).json({ error: 'Error Server' })
    }
  },
  async get(req, res) {
    try {
      res.status(200).json(countries)
    } catch (err) {
      logger.error(err)
      res.status(500).json({ error: 'Error Server' })
    }
  },
  async getById(req, res) {
    try {
      res.status(200).json(countries)
    } catch (err) {
      logger.error(err)
      res.status(500).json({ error: 'Error Server' })
    }
  },
  async update(req, res) {
    try {
      res.status(200).json(countries)
    } catch (err) {
      logger.error(err)
      res.status(500).json({ error: 'Error Server' })
    }
  },
  async delete(req, res) {
    try {
      res.status(200).json(countries)
    } catch (err) {
      logger.error(err)
      res.status(500).json({ error: 'Error Server' })
    }
  },
}
