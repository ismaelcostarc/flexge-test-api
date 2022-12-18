const router = require('express').Router()
const CompanyController = require('./controller')

router.get('/', CompanyController.get)
router.post('/', CompanyController.create)

module.exports = router
