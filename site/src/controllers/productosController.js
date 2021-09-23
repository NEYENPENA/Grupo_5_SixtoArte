const productos = require('../data/productos.json');

module.exports = {        
    detalle: (req,res) => {
        const {id} = req.params;
        const producto = productos.find(element => element.id === +id);
        res.render('productDetail', {producto});  
    },
    /* carrito: (req,res) => res.render('productCart', {productos}), */
    carrito: (req,res) => {
        const {id} = req.params;
        const producto = productos.find(element => element.id === +id);
        res.render('productCart', {producto});
        }
    /* detalles: (req,res) => res.render('productDetail', {productos}), */
}