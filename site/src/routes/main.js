const express = require('express');
const path = require('path');
const router = express.Router();
const { home } = require('../controllers/mainController')

router.get('/', home);


module.exports = router