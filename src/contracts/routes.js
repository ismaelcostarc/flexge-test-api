const router = require('express').Router()
const ContractController = require('./controller')

router.post('/company', ContractController.create)
router.get('/company', ContractController.read)
router.get('/company/:id', ContractController.read)
router.patch('/company/:id', ContractController.update)
router.delete('/company/:id', ContractController.delete)

module.exports = router
