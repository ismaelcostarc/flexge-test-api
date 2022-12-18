const locale = require('../locale')

module.exports = {
  requiredFields({ body }, res, requiredFields) {
    const fieldToWarnUser = requiredFields.find(field => !body[field])

    if (fieldToWarnUser) {
      const fieldName = fieldToWarnUser
        .replace(/([A-Z])/g, ' $1')
        .replace(/^\w/, c => c.toUpperCase())
        .trim()

      res.status(402).json({ message: `${fieldName} ${locale.messages.general.requiredData}` })

      return 0
    }

    return 1
  },
}
