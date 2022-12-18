const router = require('express').Router()
const ContractController = require('./controller')

router.post('/', ContractController.create)
router.get('/', ContractController.get)
router.get('/:id', ContractController.getById)
router.patch('/:id', ContractController.update)
router.delete('/:id', ContractController.delete)

module.exports = router
