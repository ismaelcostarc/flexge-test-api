const router = require('express').Router()
const CompanyController = require('./controller')

router.get('/company', CompanyController.get)
router.post('/company', CompanyController.create)

module.exports = router
