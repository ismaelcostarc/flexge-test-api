const mongoose = require('mongoose')

const CountrySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    states: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Country = mongoose.model('Country', CountrySchema)

module.exports = Country
