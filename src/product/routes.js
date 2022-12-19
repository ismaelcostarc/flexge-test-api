const router = require('express').Router()
const verifyJWT = require('../utils/authentication')
const ProductsController = require('./controller')

router.get('/', verifyJWT, ProductsController.get)
router.post('/', verifyJWT, ProductsController.create)

module.exports = router
