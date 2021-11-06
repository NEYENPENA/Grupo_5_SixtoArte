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
            usuario.image= req.file ? req.file.filename: "default-icon.jpeg"
            usuario.rol= "user"    
            users.push(usuario)
            req.session.user = {
                name: usuario.name,
                id: usuario.id,
                username: usuario.username,
                rol: usuario.rol,
                image: usuario.image,
                email: usuario.email,
                fecha: usuario.fecha
            }
            fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 3))
            res.render('perfilDeUsuario',{user:usuario })
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
                    req.session.user = {
                        name: usuariologueado.name,
                        id: usuariologueado.id,
                        username: usuariologueado.username,
                        rol: usuariologueado.rol,
                        image: usuariologueado.image,
                        email: usuariologueado.email,
                        fecha: usuariologueado.fecha
                    }
                    if(req.body.recordame != undefined){
                        res.cookie('sixtoArte', req.session.user, {maxAge: 900*1000})
                    }
                    res.redirect('/user/perfil')
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
        if(req.cookies.sixtoArte !== undefined){
            res.cookie('sixtoArte', '', {maxAge: -1})
        }
        res.redirect('/')
    },

   profile: (req,res) => {
    const user = req.session.user
       res.render('perfilDeUsuario',{user})
   }

}