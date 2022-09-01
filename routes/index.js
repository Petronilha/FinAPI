const { Router } = require('express')
const router = Router()


const { verifyIfExistAccountCpf } = require('../controllers/middlewares/auth')
const indexController = require('../controllers')


router.post('/', indexController.create)
router.get('/', verifyIfExistAccountCpf ,indexController.account)
router.put('/', verifyIfExistAccountCpf, indexController.update)
router.delete('/', verifyIfExistAccountCpf, indexController.remove)


module.exports = router