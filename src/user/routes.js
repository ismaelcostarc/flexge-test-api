const router = require('express').Router()
const verifyJWT = require('../utils/authentication')
const UserController = require('./controller')

router.post('/signin', UserController.signin)
router.post('/signup', UserController.signup)
router.get('/isLogged', verifyJWT, UserController.isLogged)

module.exports = router
