const Router =  require('express')
const router = new Router()
const userRouter = require('./userRouter')
const cartRouter = require('./cartRouter')
const cartItemRouter = require('./cartItemRouter')
const mealRouter = require('./mealRouter')
const drinkRouter = require('./drinkRouter')

router.use('/user', userRouter)
router.use('/cart', cartRouter)
router.use('/cartItem', cartItemRouter)
router.use('/drink', drinkRouter)
router.use('/meal', mealRouter)

module.exports = router