const {Food} = require('../models/models')
const ApiError = require('../error/ApiError')
class FoodController {
    async create(req, res, next){
        try {
            const {category, name, photo, description, price, additional} = req.body
            // const {category, name, photo, description, price, additional} = req.body.foodData
            if (!name || !photo || !price) {
                return next(ApiError.badRequest("Поля \"название\", \"цена\" \"ссылка на фото\" являются обязательными"))
            }
            const food = await Food.create(
                {category, name, photo, description, price, additional})
            return res.json(food)
        }
        catch(e){
            next(ApiError.badRequest((e.message)))
        }
    }
    async get(req, res){
        const {category} = req.query
        let foods;
        if (!category){
            foods = await Food.findAll()
        } else{
            foods = await Food.findAll({where: {category}})
        }
        return res.json(foods)
    }
    async getOne(req, res){
        const {id} = req.params
        const food = await Food.findOne({ where: {id} })
        return res.json(food)
    }
    async deleteOne(req, res, next){
        const {id} = req.params
        try{
            await Food.destroy({
                where: {
                    id: id
                }
            });
            const foods = await Food.findAll()
            return res.json(foods)
        } catch(e){
            next(ApiError.badRequest((e.message)))
        }
    }
}

module.exports = new FoodController()