const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/usuarios.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

module.exports = {
    registro: (req,res) => res.render('register'),

    login: (req,res) => res.render('login'),

    crearUsuario: (req,res) => {
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
        usuario.pass= pass
        usuario.image= req.file ? req.file.filename: 'default-user.png' 

        users.push(usuario)

        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 3))
		res.redirect('/')
        console.log(req.body)
    }
}