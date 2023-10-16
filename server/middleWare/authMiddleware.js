// decode token and check if it's valid
const jwt = require('jsonwebtoken')

module.exports = function (req, res, next){
    if (req.method === "OPTIONS"){
        next()
    }
    try{
        const token = req.headers.authorization.split(' ')[1] // Bearer qwreytqwerqyte
        if (!token){
            return res.status(401).json({message: "Не авторизован"})
        }
        req.user = jwt.verify(token, process.env.SECRET_KEY)
        next()
    } catch(e){
        res.status(401).json({message: "Не авторизован"})
    }
}