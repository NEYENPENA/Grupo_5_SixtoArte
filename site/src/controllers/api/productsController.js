const fs = require('fs');
const path = require('path');


const db = require('../../database/models');
const { Console } = require('console');
const sequelize = db.sequelize;

module.exports = {

   list:(req , res) => {
    db.product.findAll({
        include:[{all:true}]
    })
    .then(lista=>{
        return res.json(lista)
        
    })

}
}