const express = require('express');
const path = require('path');
const router = express.Router();
const { home, buscar } = require('../controllers/mainController')

router.get('/', home);
router.get('/buscar', buscar)


module.exports = router