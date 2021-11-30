const db = require('../database/models');
const sequelize = db.sequelize;
const Op = db.Sequelize.Op


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
        },
    buscar: (req, res)=>{
        
        db.product.findAll({    
            where:{
                name:{[Op.like]:`%${req.query.buscador.trim()}%`} 
            },        

            include: [{association: 'imagen'}]
        })
        .then(productos => {              
            res.render('home', {productos: productos}) 
        })
        .catch(err => {
                res.send(err)
        })
    }

}

module.exports = controller;