const { Router } = require('express')
const router = Router()


const { verifyIfExistAccountCpf } = require('../controllers/middlewares/auth')
const statementController = require('../controllers/statement')


router.get('/', verifyIfExistAccountCpf,statementController.statement)
router.get('/date', verifyIfExistAccountCpf, statementController.statementByDate)


module.exports = router