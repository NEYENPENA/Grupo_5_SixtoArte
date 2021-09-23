const express = require('express');
const path = require('path');
const router = express.Router();
const { registro, login, admin } = require('../controllers/userController')

router.get('/register', registro);
router.get('/login', login);

module.exports = router