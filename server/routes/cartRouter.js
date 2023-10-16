const Router =  require('express')
const router = new Router()
const cartController = require('../controllers/cartController')

router.post('/', cartController.create)
router.get('/', cartController.getAll)
router.get('/:id', cartController.get)

module.exports = router