const mongoose = require('mongoose')

const ContractSchema = new mongoose.Schema(
  {
    country: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Country',
    },
    state: String,
  },
  {
    timestamps: true,
  }
)

const Contract = mongoose.model('Contract', ContractSchema)

module.exports = Contract
