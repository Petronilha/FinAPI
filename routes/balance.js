const { Router } = require('express')
const router = Router()

const {verifyIfExistAccountCpf} = require('../controllers/middlewares/auth')
const balanceController = require('../controllers/balance')

router.get('/', verifyIfExistAccountCpf, balanceController)

module.exports = router