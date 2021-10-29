module.exports = (req, res, next) => {
    if(req.session.user.rol=== "admin"){
        next()
    }else{
        res.send('esta seccion solo es para administradores')
    }
}