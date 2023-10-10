const {CartItem} = require('../models/models')
const ApiError = require('../error/ApiError')
class CartItemController{
    async create(req, res){
        const {id_cart} = req.body
        const cartItem = await CartItem.create({id_cart})
        return res.json({cartItem})
    }
    async getAll(req, res){
        const items = await CartItem.findAll()
        return res.json(items)
    }
    async getOne(req, res){
        const {id} = req.params
        const cartItem = await CartItem.findOne({ where: {id} })
        return res.json(cartItem)
    }
    async deleteOne(req, res){

    }
}

module.exports = new CartItemController()