const fs = require('fs');
const path = require('path');
const {validationResult} = require('express-validator');

const db = require('../database/models');
const { Console, log } = require('console');
const { DEFAULT_ECDH_CURVE } = require('tls');
const sequelize = db.sequelize;

module.exports = {
    //listar
    admin: (req,res) => {
        
            db.product.findAll()
            .then(productos =>{
                res.render('admin/admin', {products:productos})
            })
            .catch(error=>{
                res.send(error)
            })
        
    },    

    //crear
    carga: (req,res) => {
        db.categorie.findAll({
            order:[['id', 'ASC']]
        })
        .then(categorias =>{
            db.colour.findAll({
                order:[['id', 'ASC']]
            })
            .then(colores =>{
                res.render('admin/carga', {categorias:categorias, colores:colores})
            
            })
            .catch(error=>{
                res.send(error)
            })
        })
        .catch(error=>{
            res.send(error)
        })

        
    },
    guardar: (req,res) => {
        const errors = validationResult(req);

        if(errors.isEmpty()) {
            db.categorie.findByPk(+req.body.categoria)
            .then(categorie=>{
                
                db.product.create({
                    name:req.body.nombre,
                    price:+req.body.precio,
                    description:req.body.descripcion,
                    related:categorie.dataValues.name +' con diseños a pedido. ¡Colores con la gama que elijas!',
                    id_categoria:+req.body.categoria,
                    id_colour:+req.body.color
                })
                    .then(producto=>{
                        
                        db.image.create({
                            name:req.file ? req.file.filename: "default-product.jpeg",
                            id_product:producto.id
                     })
                        .then(imagen=>{
                        res.redirect('/admin/detalle/'+producto.id)
                        })
                        .catch(error=>{
                        res.send(error)
                        })
                     
                    })
                    .catch(error=>{
                        res.send(error)
                    })
                        
            })
            .catch(error=>{
                res.json(error)
            })
            
        } else{
        // Si hay errores los envia a la vista de admin/carga            
             res.render('admin/carga', {errors: errors.mapped(), old: req.body});
        }

    },

    //editar
    edit: (req,res) => {
        db.product.findByPk(+req.params.id)
            .then(producto =>{
                db.categorie.findAll({
                    order:[['id', 'ASC']]
                })
                .then(categorias =>{
                    db.colour.findAll({
                        order:[['id', 'ASC']]
                    })
                    .then(colores =>{
                        db.image.findOne({
                            where:{id_product: +req.params.id}
                        })
                        .then(image=>{
                            
                            
                            res.render('admin/edit', {productEdit:producto.dataValues, categorias:categorias, colores:colores, imagen:image.dataValues.name})
                            
                        })
                        .catch(error=>{
                            res.send(error)
                        })
                        
                    
                    })
                    .catch(error=>{
                        res.send(error)
                    })
                })
                .catch(error=>{
                    res.send(error)
                })

                
            })
            .catch(error=>{
                res.send(error)
            })
        
        
    },

    guardarEdit:(req,res) => {
        const errors = validationResult(req);
        let {nombre, precio, descripcion, categoria, color} = req.body
        if(errors.isEmpty()) {
            db.categorie.findOne({
                where:{
                    id:categoria
                }
            })
            .then(genero =>{
                db.product.update({
                    name:nombre,
                    price:precio,
                    description:descripcion,
                    related:genero.dataValues.name +' con diseños a pedido. ¡Colores con la gama que elijas!',
                    id_categoria:categoria,
                    id_colour:color
                },{
                    where:{id:req.params.id}
                })
                .then(producto=>{
                    db.image.findOne({
                        where:{
                            id_product:req.params.id
                        }
                    })
                    .then(image =>{
                        if(req.file){ 
                            fs.unlink(`public/images/productos/${image.dataValues.name}`, (error)=>{
                                console.log(error)
                            })
                            
                        } 
                        db.image.update({
                        
                            name:req.file ? req.file.filename: null
                        },{
                            where:{id_product:req.params.id}
                        })
                        res.redirect('/admin/detalle/'+req.params.id)
                    })
                    .catch(error=>{
                        res.send(error)
                    })
                    
                    
                })
                .catch(error=>{
                    res.send(error)
                })
            })
            .catch(error=>{
                res.send(error)
            })
            
            
		    } 
         else {           
            res.render('admin/edit', {errors: errors.mapped(), productEdit});
        }        
    },    
     detalleAdmin: (req,res) => {
        db.product.findByPk(+req.params.id)
        .then(product=>{
            
            db.image.findOne({
                where:{
                    id_product:product.dataValues.id
                }
            })
            .then(imagen=>{
                
                db.categorie.findByPk(product.dataValues.id_categoria)
                .then(categoria=>{
                    res.render('admin/detalle', {producto:product.dataValues, imagen:imagen.dataValues, categoria:categoria.dataValues});
                    
                })
                .catch(error=>{
                    res.send(error)
                })
            })
            .catch(error=>{
                res.send(error)
            })



        })
        .catch(error=>{
            res.send(error)
        })
        
    }, 

    //eliminar
    eliminar: (req,res) => {
        db.image.findOne({
            where:{
                id_product: +req.params.id
            }
        })
        .then(image =>{
            console.log(+req.params.id, 'entro --------------------------------------------');
            fs.unlink(`public/images/productos/${image.dataValues.name}`, (error)=>{
                console.log(error)
            })
            
            db.image.destroy({
            where:{
                id_product: +req.params.id
            }
            })
       
            .then(confirm=>{
            db.product.destroy({
                where:{
                    id: +req.params.id
                }
            })
                .then(confirmacio=>{
                
                res.redirect('/admin')
                 
            })
                .catch(error=>{
                res.send(error)
            })
            
            })
            .catch(error=>{
            res.send(error)
            })
        })
        .catch(error=>{
            res.send(error)
            })

    }    
 
}