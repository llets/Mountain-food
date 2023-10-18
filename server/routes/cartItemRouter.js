const Router =  require('express')
const router = new Router()
const cartItemController = require('../controllers/cartItemController')

router.post('/', cartItemController.create)
router.get('/', cartItemController.getAll)
router.get('/:id',cartItemController.getOne)
router.delete('/:id', cartItemController.deleteOne)
router.put('/', cartItemController.changeAmount)


module.exports = router