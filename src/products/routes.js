const router = require('express').Router()
const ProductsController = require('./controller')

router.get('/products', ProductsController.read)

module.exports = router
