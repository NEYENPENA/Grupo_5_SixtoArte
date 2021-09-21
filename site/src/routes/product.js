const express = require('express');
const path = require('path');
const router = express.Router();
const { detalles, carrito } =require('../controllers/productosController')


router.get('/productDetail', detalles);
router.get('/productCart', carrito);

module.exports = router