const {CartItem} = require('../models/models')
const ApiError = require('../error/ApiError')
class CartItemController{
    async create(req, res, next){
        try {
            const {cartId, foodId, amount} = req.body
            const cartItem = await CartItem.create({cartId, foodId, amount})
            return res.json({cartItem})
        } catch(e){
            next(ApiError.badRequest((e.message)))
        }
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
    async deleteOne(req, res, next){
        try{
            const {id} = req.body
        } catch(e){
            next(ApiError.badRequest((e.message)))
        }
    }
    async changeAmount(req, res, next){
        try{
            const {id, type} = req.body
            const cartItem = await CartItem.findOne({ where: {id} })
            if (type === "decrease"){
                if (cartItem.amount === 1){
                    await cartItem.destroy();
                    return res.json({message: "OK"})
                } else {
                    const decrementResult = await cartItem.decrement('amount', {by: 1});
                    return res.json(decrementResult)
                }
            }else {
                const incrementResult = await cartItem.increment('amount', { by: 1 });
                return res.json(incrementResult)
            }
        } catch(e){
            next(ApiError.badRequest((e.message)))
        }
    }
}

module.exports = new CartItemController()