const productos = require('../data/productos.json');
const db = require('../database/models');
const sequelize = db.sequelize;

module.exports = {        
    detalle: (req,res) => {        
        db.product.findByPk(req.params.id, {
            include: [{association: 'imagen'}]
            })
            .then(producto => {
                res.render('productDetail', {producto})                                         
            })
            .catch(err => {
                res.send(err)
            })        
    },
    
    carrito: (req,res) => {
        let carritos = productos.filter(producto =>  producto.precio <800 )
        res.render('productCart', {carritos});
        }
    
}
/* const {id} = req.params;
        const producto = productos.find(element => element.id === +id);
        res.render('productDetail', {producto}); */