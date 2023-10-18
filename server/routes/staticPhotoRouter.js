const Router =  require('express')
const router = new Router()
const staticPhotosController = require('../controllers/staticPhotoController')

router.post('/', staticPhotosController.create)
router.get('/', staticPhotosController.getAll)

module.exports = router