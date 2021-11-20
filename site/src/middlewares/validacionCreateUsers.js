const {check} = require('express-validator')
const db = require('../database/models')
const bcryptjs = require('bcryptjs')

module.exports = [
    check('name')
    .notEmpty().withMessage('el nombre no puede estar vacio'),
    
    check('username')
    .notEmpty().withMessage('el nombre de usuario no puede estar vacio'),

    check('email')
    .notEmpty().withMessage('el email no puede estar vacio').bail()
    .isEmail().withMessage('el email no es valido'),
  

    check('pass')
    .notEmpty().withMessage('la contraseña no puede estar vacia').bail()
    .isLength({min: 8}).withMessage('la contraseña debe de tener un minimo de 8 caracteres'),

  check('email').custom(value => {
    return db.user.findOne({
      where : {
        email: value
      }
    })
    .then(user => {
if (user){
  return Promise.reject('Este email ya esta registrado')
    }
  })
})

.notEmpty().withMessage('la confirmacion de la contraseña no puede estar vacia')
  ]