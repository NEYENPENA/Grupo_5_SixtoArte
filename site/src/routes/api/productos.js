const express = require('express');
const path = require('path');
const router = express.Router();


const { list } = require('../../controllers/api/productsController');



router.get('/list', list)

module.exports = router;