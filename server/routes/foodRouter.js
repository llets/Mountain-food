const Router =  require('express')
const router = new Router()
const foodController = require('../controllers/foodController')
const checkRole = require('../middleWare/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), foodController.create)
router.get('/', foodController.get)
router.get('/:id', foodController.getOne)
router.delete('/:id', foodController.deleteOne)

module.exports = router