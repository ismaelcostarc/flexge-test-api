const logger = require('../../logger')
const User = require('./model')
const validation = require('../utils/validation')
const locale = require('../locale')
const BCrypt = require('bcryptjs')
const JWT = require('jsonwebtoken')
require('dotenv-safe').config()

module.exports = {
  async signin(req, res) {
    const isValid = validation.containRequiredFields(req, res, ['username', 'password'])
    if (!isValid) return

    const { username, password } = req.body

    try {
      const user = await User.findOne({ username })

      if (!user) {
        res.statusMessage = locale.messages.resources.users.notFound
        res.status(404).end()
        return
      }

      if (!BCrypt.compareSync(password, user.password)) {
        res.statusMessage = locale.messages.resources.users.wrongCredentials
        res.status(404).end()
        return
      }

      const token = JWT.sign(
        { id: user.id, username: user.username },
        process.env.SECRET_JWT_TOKEN
      )
      res.status(200).json({ token: token })
    } catch (err) {
      logger.error(err)
      res.statusMessage = locale.messages.general.serverError
      res.status(500).end()
    }
  },
  async signup(req, res) {
    const isValid = validation.containRequiredFields(req, res, ['username', 'password'])
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
      res.statusMessage = locale.messages.general.serverError
      res.status(500).end()
    }
  },
  isValid(_, res) {
    try {
      res.status(200).json({ message: locale.messages.resources.users.logged })
    } catch (err) {
      logger.error(err)
      res.statusMessage = locale.messages.general.serverError
      res.status(500).end()
    }
  },
}
