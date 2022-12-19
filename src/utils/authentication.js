require('dotenv-safe').config()
const JWT = require('jsonwebtoken')
const locale = require('../locale')

module.exports = function verifyJWT(req, res, next) {
  const authContent = req.headers['authorization']
  if (!authContent)
    return res.status(401).json({ auth: false, message: locale.messages.authentication.noToken })

  const token = authContent.split(' ')[1]

  JWT.verify(token, process.env.SECRET_JWT_TOKEN, function (err, decoded) {
    if (err)
      return res
        .status(500)
        .json({ auth: false, message: locale.messages.authentication.failed })

    req.userId = decoded.id
    next()
  })
}
