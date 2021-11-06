const express = require('express');
const path = require('path');
const router = express.Router();
const multer = require('multer');
const validate = require('../middlewares/validacionCreateUsers')
const validateL = require('../middlewares/validacionLogin')
const noRegistrado = require('../middlewares/usuarioNoRegistrado')
const registrado = require('../middlewares/usuarioRegistrado')

/* let upload = multer({dest: 'uploads/'});  */

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './public/images/usuarios')
    },
    filename: function (req, file, callback) {      
      callback(null, `img-${Date.now()}${path.extname(file.originalname)}`)
    }
  })
  const upload = multer({ storage: storage })

const { registro, login, crearUsuario, validateUser, cerrarSesion, profile} = require('../controllers/userController');

router.get('/register',noRegistrado, registro);
router.post('/register', upload.single('image'), validate ,crearUsuario);

router.get('/login',noRegistrado, login);
router.post('/login', validateL, validateUser)

router.get('/perfil',registrado, profile)

router.get('/cerrar', cerrarSesion)

module.exports = router;