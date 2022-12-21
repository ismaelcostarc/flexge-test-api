const locale = require('../locale')

module.exports = {
  containRequiredFields({ body }, res, requiredFields) {
    const fieldToWarnUser = requiredFields.find(field => !body[field])

    if (fieldToWarnUser) {
      const fieldName = fieldToWarnUser
        .replace(/([A-Z])/g, ' $1')
        .replace(/^\w/, c => c.toUpperCase())
        .trim()

      res.statusMessage = `${fieldName} ${locale.messages.general.requiredData}`
      res.status(422).end()
      return 0
    }

    return 1
  },
}
