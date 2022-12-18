const router = require('express').Router()
const verifyJWT = require('../utils/authentication')
const CountryController = require('./controller')

router.get('/', verifyJWT, CountryController.get)
router.get('/:id', verifyJWT, CountryController.getById)
router.post('/', verifyJWT, CountryController.create)

module.exports = router
