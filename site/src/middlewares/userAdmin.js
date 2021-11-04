module.exports = (req, res, next) => {
    if(res.locals.user.rol=== "admin"){
        next()
    }else{
        res.send('esta seccion solo es para administradores')
    }
}