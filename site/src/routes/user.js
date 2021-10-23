const express = require('express');
const path = require('path');
const router = express.Router();
const multer = require('multer'); 
const validate = require('../middlewares/validacionCreateUsers')
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

  

const { registro, login, crearUsuario} = require('../controllers/userController');
router.get('/register', registro);
router.post('/register', upload.single('image'), validate ,crearUsuario); 

router.get('/login', login);

module.exports = router;