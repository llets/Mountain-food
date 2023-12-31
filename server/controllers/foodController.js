const {Food, Category, Cart, CartItem} = require('../models/models')
const ApiError = require('../error/ApiError')
class FoodController {
    async create(req, res, next){
        try {
            const {category, name, photo, description, price, additional} = req.body
            const categ = await Category.findOne({where: {name: category}})
            // const {category, name, photo, description, price, additional} = req.body.foodData
            if (!name || !photo || !price) {
                return next(ApiError.badRequest("Поля \"название\", \"цена\" \"ссылка на фото\" являются обязательными"))
            }
            const food = await Food.create(
                {categoryId: categ.id, name, photo, description, price, additional})
            const foodDetailed = await Food.findOne({
                where: {id: food.id},
                include: [{
                    model: Category,
                    as: 'category'
                }]
            })
            return res.json(foodDetailed)
        }
        catch(e){
            next(ApiError.badRequest((e.message)))
        }
    }
    async get(req, res){
        const {category} = req.query
        if (!category){
            const foodDetailed = await Food.findAll({
                include: [{
                    model: Category,
                    as: 'category'
                }]
            })
            return res.json(foodDetailed)
        } else{
            const categ = await Category.findOne({where: {name: category}})
            const foodDetailed = await Food.findAll({
                where: {categoryId: categ.id},
                include: [{
                    model: Category,
                    as: 'category'
                }]
            })
            return res.json(foodDetailed)
        }
    }
    async getOne(req, res){
        const {id} = req.params
        const food = await Food.findOne({ where: {id} })
        return res.json(food)
    }
    async deleteOne(req, res, next){
        const {id} = req.params
        try{
            const food = await Food.findOne({where: {id}})
            const cartItems = await CartItem.findAll({where: {foodId: id}})
            console.log(cartItems)
            console.log(cartItems.length)
            if (cartItems.length !== 0) {
                const price = food.price
                for (let i = 0; i <cartItems.length; i++) {
                    const amount = cartItems[i].amount
                    const cartId = cartItems[i].cartId
                    // cartItem will be deleted, recount total
                    const cart = await Cart.findOne({where: {id: cartId}})
                    cart.total = cart.total - (price * amount)
                    cart.save()
                    //
                }
                for (let i = 0; i <cartItems.length; i++){
                    await cartItems[i].destroy();
                }
            }
            await food.destroy();
            const foods = await Food.findAll()
            return res.json(foods)
        } catch(e){
            next(ApiError.badRequest((e.message)))
        }
    }
}

module.exports = new FoodController()