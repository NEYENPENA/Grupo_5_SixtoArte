const {check} = require('express-validator')

//validaciones carga de productos
module.exports = [
    check('nombre')
        .notEmpty().withMessage('El nombre del producto no puede estar vacio').bail()
        .isLength({min: 3}).withMessage('El nombre del producto debe de tener un minimo de 3 caracteres'),
    check('precio')
        .notEmpty().withMessage('Debe ingresar el Precio del producto'),
    check('descripcion')
        .notEmpty().withMessage('El producto debe llevar una descripcion')    
]