const { Router } = require('express')
const controllers = require('../controllers/index')
const router = Router()

// Landing Page
router.get('/', (req, res) => res.send('This is the Landing Page!'))

//Get all products
router.get('/products', controllers.getAllProducts)

// Post new product
router.post('/product', controllers.createProduct)

//Get product by Id from products page
router.get('/product/:id', controllers.getProductById)

//delete product
router.delete('/product/:id', controllers.deleteProduct)

///////////////////////Review Routes////////////////////////////
//get all reviews
router.get('/product/reviews', controllers.getAllReviews)

//Post a new review
router.post('/product/review', controllers.createReview)

//update review
router.put('/product/review/:id', controllers.updateReview)

//delete review
router.delete('/product/review/:id', controllers.deleteReview)

// router.post('/comment', controllers.createComment)
// router.post('/comment', controllers.createComment)
module.exports = router
