const express = require('express');
const path = require('path');
const router = express.Router();
const { admin, carga, edit, guardar, guardarEdit, detalleAdmin, eliminar } = require('../controllers/adminController')
const multer = require('multer');
const validateCarga= require('../middlewares/validacionCarga')

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './public/images/productos')
    },
    filename: function (req, file, callback) {      
      callback(null, `img-${Date.now()}${path.extname(file.originalname)}`)
    }
  })
  
 const upload = multer({ storage: storage })  

//listar
router.get('/', admin)

//crear
router.get('/carga', carga)
router.post('/', upload.single('image'), validateCarga, guardar) 
//editar
router.get('/edit/:id', edit)
router.put('/', guardarEdit)
// detalle
router.get('/detalle/:id', detalleAdmin)
router.put('/edit/:id', guardarEdit)

//eliminar
router.delete('/delete/:id', eliminar)

module.exports = router