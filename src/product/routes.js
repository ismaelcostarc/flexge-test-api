const router = require('express').Router()
const ProductsController = require('./controller')

router.get('/', ProductsController.get)
router.post('/', ProductsController.create)

module.exports = router
