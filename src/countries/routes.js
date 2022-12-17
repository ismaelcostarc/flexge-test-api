const router = require('express').Router()
const CountryController = require('./controller')

router.get('/country', CountryController.get)
router.get('/country/:id', CountryController.getById)

module.exports = router
