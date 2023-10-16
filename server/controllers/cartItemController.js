const {CartItem, Cart, Food} = require('../models/models')
const ApiError = require('../error/ApiError')
class CartItemController{
    async create(req, res, next){
        const {userId, foodId, amount} = req.body
        // firstly, we have to find ID of the cart connected with the user
        const cart = await Cart.findOne({where: {userId: userId}})
        const cartItem = await CartItem.findOne({where: {cartId: cart.id, foodId: foodId}})
        if (cartItem === null){
            // create new item
            await CartItem.create({cartId: cart.id, foodId, amount})
            // change total of cart
            const food = await Food.findOne({where: {id: foodId}})
            cart.total += amount * food.price;
            await cart.save();
            //
            const item = await CartItem.findOne({
                where: {cartId: cart.id, foodId: foodId},
                include: [{
                    model: Food,
                    as: 'food'
                }]
            })
            return res.json(item)
        }else{
            // next(ApiError.badRequest("Такой товар уже есть в корзине"))
            return res.json({})
        }
    }

    // async get(req, res){
    //     const {id} = req.body
    //     let items;
    //     if (!id){
    //         items =  await CartItem.findAll()
    //     } else{
    //         // firstly, we have to find ID of the cart connected with the user
    //         const cart = await Cart.findOne({where: {id}})
    //         items = await CartItem.findAll({where: {cartId: cart.id}})
    //     }
    //     return res.json(items)
    // }
    async getAll(req, res){
        const items = await CartItem.findAll()
        return res.json(items)
    }
    // async getAllForUser(req,res){
    //     const {id} = req.body
    //     // we get userId here
    //     // firstly, we have to find ID of the cart connected with the user
    //     const cart = await Cart.findOne({where: {id}})
    //     const items = await CartItem.findAll({where: {cartId: cart.id}})
    //     return res.json(items)
    // }
    async getOne(req, res){
        const {id} = req.params
        const cartItem = await CartItem.findOne({ where: {id} })
        return res.json(cartItem)
    }
    async deleteOne(req, res, next){
        try{
            const {id} = req.params
            const cartItem = await CartItem.findOne({where: {id}})
            const cart = await Cart.findOne({where: {id: cartItem.cartId}})
            const amount = cartItem.amount
            const price = (await Food.findOne({where: {id: cartItem.foodId}})).price
            await cartItem.destroy();
            // cartItem is deleted, recount total
            cart.total = cart.total - (price*amount)
            cart.save()
            //
            const items = await CartItem.findAll({
                where: {cartId: cart.id},
                include: [{
                    model: Food,
                    as: 'food',
                    // through: {attributes: ['name', 'photo', 'price']}
                }]
            })
            return res.json([items, cart.total])
        } catch(e){
            next(ApiError.badRequest((e.message)))
        }
    }
    async changeAmount(req, res, next){
        try{
            const {id, type} = req.body
            const cartItem = await CartItem.findOne({ where: {id} })
            const price = cartItem.price
            const cartId = cartItem.cartId
            if (type === "decrease"){
                if (cartItem.amount === 1){
                    await cartItem.destroy();
                } else {
                    cartItem.amount = cartItem.amount - 1
                    cartItem.save()
                }
                // change total value of cart
                const cart = await Cart.findOne({where: {id: cartId}})
                cart.total = cart.total - price
                cart.save()
                //
                return res.json({})
            }else {
                cartItem.amount = cartItem.amount + 1
                cartItem.save()
                // change total value of cart
                const cart = await Cart.findOne({where: {id: cartId}})
                cart.total = cart.total + price
                cart.save()
                //
                return res.json({})
            }
        } catch(e){
            next(ApiError.badRequest((e.message)))
        }
    }
}

module.exports = new CartItemController()