const {Cart, CartItem, Food} = require('../models/models')
const ApiError = require('../error/ApiError')
class CartController{
    async create(req, res){
        try{
            const {userId} = req.body
            const cart = await Cart.create({userId, total: 0})
            return res.json({cart})
        } catch(e) {
            next(ApiError.badRequest((e.message)))
        }
    }
    async get(req, res){
    //     let items = await CartItem.findAll()
        const {id} = req.params
        let items;
        const cart = await Cart.findOne({where: {userId: id}})
        if (cart == null){
            items =  {}
        } else {
            // firstly, we have to find ID of the cart connected with the user
            items = await CartItem.findAll({
                where: {cartId: cart.id},
                include: [{
                    model: Food,
                    as: 'food',
                    // required: true
                    // through: {attributes: ['name', 'photo', 'price']}
                }]
            })
        }
        return res.json([items, cart.total])
    }
    async getAll(req, res) {
       let carts = await Cart.findAll()
        return res.json(carts)
    }
}

module.exports = new CartController()