const {StaticPhoto} = require("../models/models");
const ApiError = require("../error/ApiError");

class StaticPhotoController {
    async create(req, res){
        try{
            const {name} = req.body
            const photo = await StaticPhoto.create({name})
            return res.json(photo)
        } catch(e) {
            next(ApiError.badRequest((e.message)))
        }
    }
    async getAll(req, res) {
        let photos = await StaticPhoto.findAll()
        return res.json(photos)
    }
}

module.exports = new StaticPhotoController()