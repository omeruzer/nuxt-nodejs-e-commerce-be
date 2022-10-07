const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth');

// Controller
const UserController = require('../controllers/UserController')

router.post('/login', UserController.login)
router.post('/register', UserController.register)
router.get('/user', auth, UserController.user)
router.get('/user-all',  UserController.userAll)
router.patch('/user-update',auth,  UserController.userUpdate)
router.patch('/user-password',auth,  UserController.userPassword)

module.exports = router