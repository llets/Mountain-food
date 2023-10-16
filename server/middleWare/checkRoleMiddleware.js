const jwt = require('jsonwebtoken')

module.exports = function(role){
    return function (req, res, next){
        if (req.method === "OPTIONS"){
            next()
        }
        try{
            const token = req.headers.authorization.split(' ')[1] // Bearer qwreytqwerqyte
            if (!token){
                return res.status(401).json({message: "Вы не авторизованы."})
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            if (decoded.role !== role){
                res.status(403).json({message: "Нет доступа. Вы не админ."})
            }
            req.user = decoded
            next()
        } catch(e){
            res.status(401).json({message: "Не авторизован"})
        }
    }
}

