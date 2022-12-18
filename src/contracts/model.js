const mongoose = require('mongoose')

const ContractSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  country: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Country'
  },
  state: String,
  created_at: {
    type: Date,
    required: true,
    default: Date.now,
  },
})

const Contract = mongoose.model('Contract', ContractSchema)

module.exports = Contract
