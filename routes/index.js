const { Router } = require('express')
const controllers = require('../controllers/index')
const router = Router()

// Landing Page
router.get('/', (req, res) => res.send('This is the Landing Page!'))

//Get all products
router.get('/api/products', controllers.getAllProducts)

// Post new product
router.post('/api/product', controllers.createProduct)

//delete product
router.delete('/api/product/:id', controllers.deleteProduct)

//get all reviews
router.get('/api/product/reviews', controllers.getAllReviews)

//get all reviews by product id
router.get('/api/product/reviews/:id', controllers.getReviewByProductId)

//Get product by Id from products page
router.get('/api/product/:id', controllers.getProductById)

//Post a new review
router.post('/api/product/review', controllers.createReview)

//update review
router.put('/api/product/review/:id', controllers.updateReview)

//delete review
router.delete('/api/product/review/:id', controllers.deleteReview)

module.exports = router
