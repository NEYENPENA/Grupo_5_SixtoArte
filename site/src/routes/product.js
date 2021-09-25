const express = require('express');
const path = require('path');
const router = express.Router();
const {carrito, detalle} =require('../controllers/productosController')

/* router.get('/productDetail', detalles); */
router.get('/productCart/:id', carrito);

router.get('/detalle/:id', detalle);

module.exports = router;