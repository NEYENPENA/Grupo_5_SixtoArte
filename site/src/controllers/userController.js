const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs')
const {validationResult} = require('express-validator')
const usersFilePath = path.join(__dirname, '../data/usuarios.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
module.exports = {
    registro: (req,res) => res.render('register'),
    login: (req,res) => res.render('login'),
    crearUsuario: (req,res) => {
        const errors = validationResult(req)
        if(errors.isEmpty()) {
            let max = 0
            users.forEach(element => {
                if(max < element.id){
                max = element.id
                }
            });
            const {name, username, fecha, email, pass} = req.body
            const usuario = {}
            usuario.id= max+1
            usuario.name= name
            usuario.username= username
            usuario.fecha= fecha
            usuario.email= email
            usuario.pass= bcrypt.hashSync(pass, 10);
            usuario.image= req.file ? req.file.filename: 'default-user.png'
            usuario.rol= "user"    
            users.push(usuario)
            req.session.user = usuario
            fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 3))
            res.redirect('/')
        }else{
           res.render('register', {errors: errors.mapped(), old: req.body})
        }
    },
    validateUser:(req, res) =>{
        const errors = validationResult(req)
        if(errors.isEmpty()) {
            const usersFilePath = path.join(__dirname, '../data/usuarios.json');
            const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
            const {username, password} = req.body
            let usuariologueado = users.find(u =>u.username === username)
            if(usuariologueado){
                if(bcrypt.compareSync( password, usuariologueado.pass)){
                    req.session.user=usuariologueado
                    if(req.body.recordame != undefined){
                        res.cookie('recordame', usuariologueado.username, {maxAge: 600*1000})
                    }
                    res.redirect('/')
                }else{
                    res.render('login', {invalid: 'contraseña invalida'})
                }
            }else{
                res.render('login', {invalid: 'usuario invalido'})
            }
        }else{
           res.render('login', {errors: errors.mapped(), old: req.body})
        }
    },
    cerrarSesion: (req, res)=> {
        req.session.destroy()
        if(req.cookies.recordame !== undefined){
            res.cookie('recordame', '', {maxAge: -1})
        }
        res.redirect('/')
    },

   profile: (req,res) => {
       res.render('perfilDeUsuario')

   }

}