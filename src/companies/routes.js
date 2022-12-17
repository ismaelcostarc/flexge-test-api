const router = require('express').Router()
const CompanyController = require('./controller')

router.get('/companies', CompanyController.read)

module.exports = router
