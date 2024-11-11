const router =  require('express').Router()

const UserController = require('../controllers/UserController')
const checkAuth = require('../helpers/check-auth')

router.post('/register', UserController.register)
router.post('/login', UserController.login)

router.get('/checkuser', UserController.checkUser)
router.get('/logout', UserController.logout)
router.get('/:id', UserController.getUserById)

router.patch('/edit/:id', UserController.edit)

module.exports = router 