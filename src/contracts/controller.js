const logger = require('../../logger')
const validate = require('../utils/validate')
const Contract = require('./model')
const REQUIRED_FIELDS = require('./constants')

module.exports = {
  async create(req, res) {
    const isValid = validate.requiredFields(req, res, REQUIRED_FIELDS)
    if (!isValid) return

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

    const contract = {
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
    }

    try {
      await Contract.create(contract)

      res.status(200).json({ message: 'Contract created' })
    } catch (err) {
      logger.error(err)
      res.status(500).json({ error: 'Server Error' })
    }
  },
  async get(_, res) {
    try {
      const contract = await Contract.find()

      res.status(200).json(contract)
    } catch (err) {
      logger.error(err)
      res.status(500).json({ error: 'Server Error' })
    }
  },
  async getById(req, res) {
    try {
      const id = req.params.id

      const contract = await Contract.findOne({ _id: id })

      if (!contract) {
        res.status(404).json({ message: 'Contract not found' })
        return
      }

      res.status(200).json(contract)
    } catch (err) {
      logger.error(err)

      if (err.kind === 'ObjectId') {
        res.status(400).json({ error: 'Incorrect parameter' })
        return
      }

      res.status(500).json({ error: 'Server Error' })
    }
  },
  async update(req, res) {
    const id = req.params.id
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

    const newContract = {
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
    }

    try {
      const contract = await Contract.findOne({ _id: id })
      if (!contract) {
        res.status(422).json({ message: 'Contract not found' })
        return
      }

      await Contract.updateOne({ _id: id }, newContract)

      res.status(200).json(newContract)
    } catch (err) {
      logger.error(err)

      if (err.kind === 'ObjectId') {
        res.status(400).json({ error: 'Incorrect parameter' })
        return
      }

      res.status(500).json({ error: 'Server Error' })
    }
  },
  async delete(req, res) {
    const id = req.params.id

    try {
      const contract = await Contract.findOne({ _id: id })
      if (!contract) {
        res.status(422).json({ message: 'Contract not found' })
        return
      }

      await Contract.deleteOne({ _id: id })

      res.status(200).json({ message: 'Contract removed' })
    } catch (err) {
      logger.error(err)

      if (err.kind === 'ObjectId') {
        res.status(400).json({ error: 'Incorrect parameter' })
        return
      }

      res.status(500).json({ error: 'Server Error' })
    }
  },
}
