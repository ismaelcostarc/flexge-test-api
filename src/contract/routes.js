const router = require('express').Router()
const verifyJWT = require('../utils/authentication')
const ContractController = require('./controller')

router.post('/', verifyJWT, ContractController.create)
router.get('/', verifyJWT, ContractController.get)
router.get('/:id', verifyJWT, ContractController.getById)
router.patch('/:id', verifyJWT, ContractController.update)
router.delete('/:id', verifyJWT, ContractController.delete)

module.exports = router
