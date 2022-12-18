const mongoose = require('mongoose')

const CompanySchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Company = mongoose.model('Company', CompanySchema)

module.exports = Company
