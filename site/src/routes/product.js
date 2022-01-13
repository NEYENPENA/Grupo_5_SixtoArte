const express = require('express');
const path = require('path');
const router = express.Router();
const {carrito, detalle} =require('../controllers/productosController')
const registrado = require('../middlewares/usuarioRegistrado')

router.get('/productCart',registrado, carrito);

router.get('/detalle/:id', detalle);

module.exports = router;
