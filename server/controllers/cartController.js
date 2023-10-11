const {Cart} = require('../models/models')
const ApiError = require('../error/ApiError')
class CartController{
    async create(req, res){
        try{
            const {userId} = req.body
            const cart = await Cart.create({userId})
            return res.json({cart})
        } catch(e) {
            next(ApiError.badRequest((e.message)))
        }
    }
    async getOne(req, res){
        const {id} = req.params
        const cart = await Cart.findOne({ where: {id} })
        return res.json(cart)
    }

    async getAll(req, res){
        const cart = await Cart.findAll()
        return res.json(cart)
    }
}

module.exports = new CartController()