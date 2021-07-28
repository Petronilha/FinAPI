const { Router } = require('express')
const router = Router()


const {verifyIfExistAccountCpf} = require('../controllers/middlewares/auth')
const withdrawController = require('../controllers/withdraw')


router.post('/', verifyIfExistAccountCpf, withdrawController)


module.exports = router