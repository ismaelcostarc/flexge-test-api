const mongoose = require('mongoose')

const Contract = mongoose.model('Contract', {
  country: String,
})

module.exports = Contract
