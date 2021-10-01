const productos = require('../data/productos.json');

module.exports = {        
    detalle: (req,res) => {
        const {id} = req.params;
        const producto = productos.find(element => element.id === +id);
        res.render('productDetail', {producto});  
    },
    /* carrito: (req,res) => res.render('productCart', {productos}), */
    carrito: (req,res) => {
        let carritos = productos.filter(producto =>  producto.precio <800 )
        res.render('productCart', {carritos});
        }
    /* detalles: (req,res) => res.render('productDetail', {productos}), */
}