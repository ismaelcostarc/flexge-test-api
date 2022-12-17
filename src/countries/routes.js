const router = require('express').Router()
const CountryController = require('./controller')

router.get('/countries', CountryController.read)
router.get('/country/:id/states', CountryController.read)

module.exports = router
