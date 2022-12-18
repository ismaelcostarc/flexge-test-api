const router = require('express').Router()
const CompanyController = require('./controller')

router.get('/company', CompanyController.get)

module.exports = router
