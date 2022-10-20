const { Router } = require('express')
const controllers = require('../controllers/index')
const router = Router()

// Landing Page
router.get('/', (req, res) => res.send('This is the Landing Page!'))

//Get all products
router.get('/products', controllers.getAllProducts)

//Post a new comment
router.post('/comment', controllers.createComment)
router.post('/product', controllers.createProduct)
// router.post('/comment', controllers.createComment)
// router.post('/comment', controllers.createComment)
module.exports = router
