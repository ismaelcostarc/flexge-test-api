const router = require('express').Router()
const ProductsController = require('./controller')

router.get('/product', ProductsController.get)

module.exports = router
