const router = require('express').Router()
const verifyJWT = require('../utils/authentication')
const CompanyController = require('./controller')

router.get('/', verifyJWT, CompanyController.get)
router.post('/', verifyJWT, CompanyController.create)

module.exports = router
