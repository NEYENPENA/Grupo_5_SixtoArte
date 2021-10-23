const usuariosRegistrados = require('../data/usuarios.json')

module.exports = (req, res, next)=>{
    if(req.cookies.recordame !== undefined && req.session.user === undefined){
        req.session.user = usuariosRegistrados.find(u => u.username === req.cookies.username)
    }
    next()
}
