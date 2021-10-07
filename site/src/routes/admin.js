const express = require('express');
const path = require('path');
const router = express.Router();
const { admin, carga, edit, guardar, guardarEdit, detalleAdmin } = require('../controllers/adminController')

//listar
router.get('/', admin)

//crear
router.get('/carga', carga)
router.post('/', guardar)
//editar
router.get('/edit/:id', edit)
router.put('/', guardarEdit)
// detalle
router.get('/detalle/:id', detalleAdmin)

module.exports = router