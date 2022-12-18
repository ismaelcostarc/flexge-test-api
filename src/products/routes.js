const router = require('express').Router()
const ProductsController = require('./controller')

router.get('/product', ProductsController.get)
router.post('/product', ProductsController.create)

module.exports = router
