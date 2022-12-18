const mongoose = require('mongoose')

const StateListSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  stateList: {
    type: [Array],
    required: true
  }
})

const CountrySchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true
  },
  stateList: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'StateList'
  }
})

const Country = mongoose.model('Country', CountrySchema)
const StateList = mongoose.model('StateList', StateListSchema)

module.exports = Country
module.exports = StateList
