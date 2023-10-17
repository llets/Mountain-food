const {Category} = require("../models/models");
const ApiError = require("../error/ApiError");

class CategoryController{
    async create(req, res, next){
        try{
            const {name, type} = req.body
            const category = await Category.create({name, type})
            return res.json({category})
        } catch(e) {
            next(ApiError.badRequest((e.message)))
        }
    }
    async getAll(req, res) {
        let categories = await Category.findAll()
        return res.json(categories)
    }
}

module.exports = new CategoryController()