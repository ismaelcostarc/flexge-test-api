const mongoose = require('mongoose')

const Contract = mongoose.model('Contract', {
  name: String,
})

module.exports = Contract
