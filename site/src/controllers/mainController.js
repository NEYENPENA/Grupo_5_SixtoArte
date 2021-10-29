

const controller = {
    
    home: function (req,res) {
        const productos = require('../data/productos.json')
        res.render('home', {productos});
    } 
}

module.exports = controller;