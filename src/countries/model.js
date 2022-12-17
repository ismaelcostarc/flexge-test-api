const mongoose = require('mongoose')

const Country = mongoose.model('Country', {
  name: {
    type: String,
    required: true
  },
  states: [String]
})

module.exports = Country
