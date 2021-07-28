const { Router } = require('express')
const router = Router()


const { verifyIfExistAccountCpf } = require('../controllers/middlewares/auth')
const depositController = require('../controllers/deposit')


router.post('/', verifyIfExistAccountCpf, depositController)


module.exports = router