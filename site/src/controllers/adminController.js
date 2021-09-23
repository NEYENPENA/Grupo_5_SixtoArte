const productos = require('../data/productos.json')

module.exports = {
    admin: (req,res) => {
        res.render('admin/admin', {productos})
    },
    carga: (req,res) => {
        res.render('admin/carga', {productos})
    },
    edit: (req,res) => {
        res.render('admin/edit', {productos})
    },
}