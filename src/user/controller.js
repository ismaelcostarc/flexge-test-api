const logger = require('../../logger')
const User = require('./model')
const validate = require('../utils/validation')
const locale = require('../locale')
const BCrypt = require('bcryptjs')
const JWT = require('jsonwebtoken')
require('dotenv-safe').config()

module.exports = {
  async signin(req, res) {
    const isValid = validate.requiredFields(req, res, ['username', 'password'])
    if (!isValid) return

    const { username, password } = req.body

    try {
      const user = await User.findOne({ username })

      if (!user) {
        res
          .status(404)
          .json({ message: locale.messages.resources.users.notFound })
        return
      }

      if (!BCrypt.compareSync(password, user.password)) {
        res
          .status(404)
          .json({ message: locale.messages.resources.users.wrongCredentials })
        return
      }

      const token = JWT.sign(
        { id: user.id, username: user.username },
        process.env.SECRET_JWT_TOKEN
      )
      res.status(200).json({ token: token })
    } catch (err) {
      logger.error(err)
      res.status(500).json({ error: locale.messages.general.serverError })
    }
  },
  async signup(req, res) {
    const isValid = validate.requiredFields(req, res, ['username', 'password'])
    if (!isValid) return

    const { username, password } = req.body

    const newUser = {
      username,
      password: BCrypt.hashSync(password, 10),
    }

    try {
      const user = await User.create(newUser)
      const token = JWT.sign(
        { id: user.id, username: user.username },
        process.env.SECRET_JWT_TOKEN
      )
      res.status(200).json({ token: token })
    } catch (err) {
      logger.error(err)
      res.status(500).json({ error: locale.messages.general.serverError })
    }
  },
  isLogged(_, res) {
    try {
      res.status(200).json({ message: locale.messages.resources.users.logged })
    } catch (err) {
      logger.error(err)
      res.status(500).json({ error: locale.messages.general.serverError })
    }
  },
}
