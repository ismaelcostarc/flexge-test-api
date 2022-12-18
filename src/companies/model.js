const mongoose = require('mongoose')

const Company = mongoose.model('Company', {
  name: {
    type: String,
    required: true
  }
})

module.exports = Company
