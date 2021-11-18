const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs')
const {validationResult} = require('express-validator')


const db = require('../database/models');
const { Console } = require('console');
const sequelize = db.sequelize;


module.exports = {
    registro: (req,res) => res.render('register'),
    login: (req,res) => res.render('login'),


    crearUsuario: (req,res) => {
        const errors = validationResult(req)
        if(errors.isEmpty()) {
            
            const {name, username, fecha, email, pass} = req.body

            db.user.create({
                name: name,
                username: username,
                birthday: fecha,
                email: email,
                contraseña: bcrypt.hashSync(pass, 10),
                avatar:req.file ? req.file.filename: "default-icon.jpeg",
                id_role :2

            })
            .then(result =>{
                res.render('login')
            })

            .catch(err=>{
                res.render('error', {error: err})
            })

            /* usuario.pass= bcrypt.hashSync(pass, 10);
            usuario.image= req.file ? req.file.filename: "default-icon.jpeg"  */  
            
            
        }else{
           res.render('register', {errors: errors.mapped(), old: req.body})
        }
    },


    
    validateUser:(req, res) =>{
        const errors = validationResult(req)
        if(errors.isEmpty()) {  /* pregunta si hay errores */
           
            const {username, password} = req.body

            db.user.findOne({
                where:{
                    username: username,
                    /* contraseña : bcrypt.hashSync(password, 10) */
                }
            })

            .then(result =>{
                
                 if(bcrypt.compareSync(password, result.contraseña)){

                    req.session.user = result;
                    const user = req.session.user
                    if(req.body.recordame != undefined){
                        res.cookie('sixtoArte', req.session.user, {maxAge: 900*1000})

                        
                            db.rol.findOne({
                                where:{
                                    id :result.id_role
                                }
                            })
                            .then(roll =>{
                                res.render('perfilDeUsuario',{user, rol:roll.dataValues.name} )
                            })
                            .catch(err=>{
                                res.render('error', {error: err})
                            })
                        

                        .catch(err=>{
                            res.render('error', {error: err})
                        })
                         
                    }else{
                         db.rol.findOne({
                                where:{
                                    id :result.id_role
                                }
                            })
                            .then(roll =>{
                                res.render('perfilDeUsuario',{user, rol:roll.dataValues.name} )
                            })
                            .catch(err=>{
                                res.render('error', {error: err})
                            })
                        

                        .catch(err=>{
                            res.render('error', {error: err})
                        })

                }}else{
                    
                    res.render('login')
            } 
            })

            .catch(err=>{
                res.send('nombre de usuario incorrecto')
            })

        }else{
           res.render('login', {errors: errors.mapped(), old: req.body})
        }
    }, 


    cerrarSesion: (req, res)=> {
        req.session.destroy()
        if(req.cookies.sixtoArte !== undefined){
            res.cookie('sixtoArte', '', {maxAge: -1})
        }
        res.redirect('/')
    },

   profile: (req,res) => {
    const user = req.session.user
    db.rol.findOne({
        where:{
            id :user.id_role
        }
    })
    .then(roll =>{
        console.log(roll)
        res.render('perfilDeUsuario',{user, rol:roll.dataValues.name} )
    })
    .catch(err=>{
        res.render('error', {error: err})
    })
    
   }

} 