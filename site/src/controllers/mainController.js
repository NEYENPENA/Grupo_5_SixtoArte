const db = require('../database/models');
const sequelize = db.sequelize;


const controller = {

    home: function (req, res) {
        db.product.findAll({            
            include: [{association: 'imagen'}]
        })
        .then(productos => {            
                res.render('home', {productos})
            })
            .catch(err => {
                res.send(err)
            })

    /* home: function (req,res) {
        const productos = require('../data/productos.json')
        res.render('home', {productos});
    }  */
}
}


module.exports = controller;