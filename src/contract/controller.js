/* eslint-disable indent */
const logger = require('../../logger')
const validation = require('../utils/validation')
const Contract = require('./model')
const REQUIRED_FIELDS = require('./constants')
const locale = require('../locale')

module.exports = {
  async create(req, res) {
    const isValid = validation.containRequiredFields(req, res, REQUIRED_FIELDS)
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

      res
        .status(200)
        .json({ message: locale.messages.resources.contracts.created })
    } catch (err) {
      logger.error(err)
      res.status(500).json({ error: locale.messages.general.serverError })
    }
  },
  async get(req, res) {
    const { page, pageSize } = req.query
    let contracts = {}

    try {
      if (page) {
        const numberOfPage = parseInt(page)
        const quantityOfItems = parseInt(pageSize)

        const skip = quantityOfItems * numberOfPage - quantityOfItems
        const limit = quantityOfItems || 10

        contracts = await Contract.aggregate([
          {
            $sort: {
              _id: -1,
            },
          },
          {
            $skip: skip,
          },
          {
            $limit: limit,
          },
        ])
      } else {
        contracts = await Contract.aggregate([
          {
            $sort: {
              _id: -1,
            },
          },
        ])
      }
      res.status(200).json(contracts)
    } catch (err) {
      logger.error(err)
      res.status(500).json({ error: locale.messages.general.serverError })
    }
  },
  async getById(req, res) {
    try {
      const id = req.params.id

      const contract = await Contract.findOne({ _id: id })

      if (!contract) {
        res
          .status(404)
          .json({ message: locale.messages.resources.contracts.notFound })
        return
      }

      res.status(200).json(contract)
    } catch (err) {
      logger.error(err)

      if (err.kind === 'ObjectId') {
        res
          .status(400)
          .json({ error: locale.messages.general.incorrectParameter })
        return
      }

      res.status(500).json({ error: locale.messages.general.serverError })
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
        res
          .status(404)
          .json({ message: locale.messages.resources.contracts.notFound })
        return
      }

      await Contract.updateOne({ _id: id }, newContract)

      res.status(200).json(newContract)
    } catch (err) {
      logger.error(err)

      if (err.kind === 'ObjectId') {
        res
          .status(400)
          .json({ error: locale.messages.general.incorrectParameter })
        return
      }

      res.status(500).json({ error: locale.messages.general.serverError })
    }
  },
  async delete(req, res) {
    const id = req.params.id

    try {
      const contract = await Contract.findOne({ _id: id })
      if (!contract) {
        res
          .status(404)
          .json({ message: locale.messages.resources.contracts.notFound })
        return
      }

      await Contract.deleteOne({ _id: id })

      res
        .status(200)
        .json({ message: locale.messages.resources.contracts.removed })
    } catch (err) {
      logger.error(err)

      if (err.kind === 'ObjectId') {
        res
          .status(400)
          .json({ error: locale.messages.general.incorrectParameter })
        return
      }

      res.status(500).json({ error: locale.messages.general.serverError })
    }
  },
}
