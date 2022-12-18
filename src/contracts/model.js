const mongoose = require('mongoose')

const ContractSchema = new mongoose.Schema(
  {
    country: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    city: String,
    documentNumber: {
      type: Number,
      required: true,
    },
    socialReason: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
    zipCode: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: Number,
    startsIn: {
      type: Date,
      required: true,
    },
    endsIn: Date,
    dueDay: {
      type: Number,
      required: true,
    },
    file: Buffer,
    company: String,
    products: {
      type: [
        {
          name: String,
          amount: Number,
          finalUnitPrice: Number,
          installments: Number,
          paidInstallments: Number,
          beginningOfTerm: Date,
        },
      ],
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Contract = mongoose.model('Contract', ContractSchema)

module.exports = Contract
