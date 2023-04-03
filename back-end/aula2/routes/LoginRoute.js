const loginController = require('../controllers/LoginController')
const express = require('express')
const router = express.Router()

router.get('/login', loginController.getLogin)


module.exports = router
