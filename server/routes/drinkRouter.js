const Router =  require('express')
const router = new Router()
const drinkController = require('../controllers/drinkController')
const checkRole = require("../middleWare/checkRoleMiddleware");

router.post('/', checkRole('ADMIN'), drinkController.create)
router.get('/', drinkController.get)
router.get('/:id', drinkController.getOne)
router.delete('/:id', drinkController.deleteOne)

module.exports = router