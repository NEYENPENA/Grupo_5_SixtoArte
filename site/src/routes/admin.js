const express = require('express');
const path = require('path');
const router = express.Router();
const { admin, carga, edit } = require('../controllers/adminController')


router.get('/admin', admin)
router.get('/carga', carga)
router.get('/edit', edit)

module.exports = router