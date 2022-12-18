require('dotenv-safe').config()
const JWT = require('jsonwebtoken')

module.exports = function verifyJWT(req, res, next) {
  const authContent = req.headers['authorization']
  if (!authContent)
    return res.status(401).json({ auth: false, message: 'No token provided.' })

  const token = authContent.split(' ')[1]

  JWT.verify(token, process.env.SECRET_JWT_TOKEN, function (err, decoded) {
    if (err)
      return res
        .status(500)
        .json({ auth: false, message: 'Failed to authenticate token.' })

    req.userId = decoded.id
    next()
  })
}
