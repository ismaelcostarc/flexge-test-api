const mongoose = require('mongoose')

const Company = mongoose.model('Company', {
  name: String,
})

module.exports = Company
