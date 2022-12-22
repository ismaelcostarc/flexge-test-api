const router = require('express').Router()
const verifyJWT = require('../utils/authentication')
const UserController = require('./controller')

router.post('/signin', UserController.signin)
router.post('/signup', UserController.signup)
router.get('/isValid', verifyJWT, UserController.isValid)

module.exports = router
