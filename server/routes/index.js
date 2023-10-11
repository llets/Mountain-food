const Router =  require('express')
const router = new Router()
const userRouter = require('./userRouter')
const cartRouter = require('./cartRouter')
const cartItemRouter = require('./cartItemRouter')
const foodRouter = require('./foodRouter')

router.use('/user', userRouter)
router.use('/cart', cartRouter)
router.use('/cartItem', cartItemRouter)
router.use('/food', foodRouter)

module.exports = router