const express = require('express');
const path = require('path');
const router = express.Router();
const multer = require('multer');


const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './public/images/productos')
    },
    filename: function (req, file, callback) {      
      callback(null, `img-${Date.now()}${path.extname(file.originalname)}`)
    }
  })
  
 const upload = multer({ storage: storage })


  const { admin, carga, edit, guardar, guardarEdit, eliminar } = require('../controllers/adminController')

//listar
router.get('/', admin)

//crear
router.get('/carga', carga)
router.post('/', upload.single('image'), guardar) 
//editar
router.get('/edit/:id', edit)
router.put('/edit/:id', guardarEdit)

//eliminar
router.delete('/delete/:idProduct', eliminar)

module.exports = router