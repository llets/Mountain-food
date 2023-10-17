const {User, Cart} = require('../models/models')
const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const generateJwt = (id, email, role) => {
    return jwt.sign({id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'})
}

const checkEmail = (email) => {
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/;
    return EMAIL_REGEXP.test(email);
}
const checkPassword = (password) => {
    const EMAIL_REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&-+=()!? "]).{8,128}$/;
    return EMAIL_REGEXP.test(password);
}

class UserController {
    async registration(req, res, next) {
        try {
            const {email, password, role} = req.body
            if (!email || !checkEmail(email)) {
                return next(ApiError.badRequest("Некорректный email"))
            }
            if (!password || !checkPassword(password)){
                return next(ApiError.badRequest("Некорректный пароль"))
            }
            const candidate = await User.findOne({where: {email}})
            if (candidate) {
                return next(ApiError.badRequest("Пользователь с таким email уже существует"))
            }
            const hashPassword = await bcrypt.hash(password, 5)
            const user = await User.create({email, role, password: hashPassword})
            await Cart.create({userId: user.id, total: 0})
            const token = generateJwt(user.id, user.email, user.role)
            return res.json({token: token})
        } catch (e) {
            next(ApiError.badRequest((e.message)))
        }
    }

    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(ApiError.internal("Пользователь не найден"))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal("Указан неверный пароль"))
        }
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token: token})
    }

    async check(req, res) {
        // генерация нового токена и отправка на клиент
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }

    async getAll(req, res) {
        let users = await User.findAll()
        return res.json(users)
    }
}

module.exports = new UserController()