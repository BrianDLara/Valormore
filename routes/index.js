const { Router } = require('express')
const controllers = require('../controllers/index')
const router = Router()

// Landing Page
router.get('/', (req, res) => res.send('This is the Landing Page!'))

//Get all products
router.get('/products', controllers.getAllProducts)

// Post new product
router.post('/product', controllers.createProduct)

//delete product
router.delete('/product/:id', controllers.deleteProduct)

//get all reviews
router.get('/product/reviews', controllers.getAllReviews)

//Get product by Id from products page
router.get('/product/:id', controllers.getProductById)

//Post a new review
router.post('/product/review', controllers.createReview)

//update review
router.put('/product/review/:id', controllers.updateReview)

//delete review
router.delete('/product/review/:id', controllers.deleteReview)

module.exports = router
