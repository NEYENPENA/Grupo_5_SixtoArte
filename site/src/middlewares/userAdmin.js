module.exports = (req, res, next) => {
    if(res.locals.user.id_role=== 1){
        next()
    }else{
        res.send('esta seccion solo es para administradores')
    }
}