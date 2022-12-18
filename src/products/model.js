const mongoose = require('mongoose')

const Product = mongoose.model('Product', {
  name: {
    type: String,
    required: true
  },
})

module.exports = Product
