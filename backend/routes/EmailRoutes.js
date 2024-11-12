const express = require('express')
const router = express.Router()
const EmailController = require('../controllers/EmailController')
const checkAuth = require('../helpers/check-auth')

router.post('/', checkAuth, EmailController.sendEmail)

module.exports = router