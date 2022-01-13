const express = require('express');
const path = require('path');
const router = express.Router();
const { admin, carga, edit, guardar, guardarEdit, detalleAdmin, eliminar } = require('../controllers/adminController')
const multer = require('multer');
const validateCarga = require('../middlewares/validacionCarga');
const validateEdit = require('../middlewares/validacionEdit');
const userAdmin = require('../middlewares/userAdmin');
const usuarioRegistrado = require('../middlewares/usuarioRegistrado');

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
router.get('/',usuarioRegistrado,userAdmin ,admin)

//crear
router.get('/carga',userAdmin, carga)
router.post('/', upload.single('image'), validateCarga, guardar);

//editar
router.get('/edit/:id',userAdmin, edit)
router.put('/:id', upload.single('image'), validateEdit, guardarEdit);

// detalle
router.get('/detalle/:id',userAdmin, detalleAdmin)
/* router.put('/edit/:id', guardarEdit) */

//eliminar
router.delete('/delete/:id',userAdmin, eliminar)

module.exports = router