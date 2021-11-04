module.exports = (req, res, next)=>{
    if(req.cookies.sixtoArte){
        req.session.user = req.cookies.sixtoArte
    }
    next()
}
