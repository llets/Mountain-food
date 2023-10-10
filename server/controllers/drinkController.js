const {Drink} = require('../models/models')
const ApiError = require('../error/ApiError')
class DrinkController{
    async create(req, res, next){
        try {
            const {category, name, photo,price} = req.body
            const drink = await Drink.create({category, name, price})
            return res.json({drink})
        }
        catch(e){
            next(ApiError.badRequest((e.message)))
        }
    }
    async get(req, res){
        const {category} = req.query
        let drinks;
        if (!category){
            drinks = await Drink.findAll()
        } else{
            drinks = await Drink.findAll({where: {category}})
        }
        return res.json(drinks)
    }
    async getOne(req, res){
        const {id} = req.params
        const drink = await Drink.findOne({ where: {id} })
        return res.json(drink)
    }

    async deleteOne(req, res){

    }

}

module.exports = new DrinkController()