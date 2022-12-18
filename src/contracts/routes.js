const router = require('express').Router()
const ContractController = require('./controller')

router.post('/contract', ContractController.create)
router.get('/contract', ContractController.get)
router.get('/contract/:id', ContractController.getById)
router.patch('/contract/:id', ContractController.update)
router.delete('/contract/:id', ContractController.delete)

module.exports = router
