const productos = require('../data/productos.json')

const controller = {
    home: function (req,res) {
        res.render('home', {productos});
    } 
}

module.exports = controller;