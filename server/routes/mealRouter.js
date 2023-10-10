const Router =  require('express')
const router = new Router()
const mealController = require('../controllers/mealController')
const checkRole = require('../middleWare/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), mealController.create)
router.get('/', mealController.get)
router.get('/:id', mealController.getOne)
router.delete('/:id', mealController.deleteOne)

module.exports = router