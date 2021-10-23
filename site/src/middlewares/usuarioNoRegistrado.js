module.exports = (req, res, next) => {
    if(req.session.user === undefined){
        next()
    }else{
        res.send('esta pagina es solo para usuarios sin registrar')
    }
}
