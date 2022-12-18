const router = require('express').Router()
const CountryController = require('./controller')

router.get('/country', CountryController.get)
router.get('/country/:id', CountryController.getById)
router.post('/country', CountryController.create)

module.exports = router
