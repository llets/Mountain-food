const {Meal} = require('../models/models')
const ApiError = require('../error/ApiError')
class MealController{
    async create(req, res, next){
        try {
            const {category, name, photo, description, price, additional} = req.body
            const meal = await Meal.create({category, name, photo, description, price, additional})
            return res.json({meal})
        }
        catch(e){
            next(ApiError.badRequest((e.message)))
        }
    }
    async get(req, res){
        // const items = await Meal.findAll()
        // return res.json(items)
        const {category} = req.query
        let meals;
        if (!category){
            meals = await Meal.findAll()
        } else{
            meals = await Meal.findAll({where: {category}})
        }
        return res.json(meals)
    }
    async getOne(req, res){
        const {id} = req.params
        const meal = await Meal.findOne({ where: {id} })
        return res.json(meal)
    }

    async deleteOne(req, res){

    }
}

module.exports = new MealController()