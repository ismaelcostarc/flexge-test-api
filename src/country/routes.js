const router = require('express').Router()
const CountryController = require('./controller')

router.get('/', CountryController.get)
router.get('/:id', CountryController.getById)
router.post('/', CountryController.create)

module.exports = router
