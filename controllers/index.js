const Product = require('../models/product')
const Review = require('../models/review')
// const User = require('../models/user')

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find()
    return res.status(200).json({ products })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getProductById = async (req, res) => {
  try {
    //grabs the item id
    const { id } = req.params
    //searches api
    const product = await Product.findById(id)
    if (product) {
      return res.status(200).json({ product })
    }
    return res.status(404).send('Product with the specified ID does not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

//can make new products, but only the owner can make them
const createProduct = async (req, res) => {
  try {
    const product = await new Product(req.body)
    await product.save()
    return res.status(201).json({
      product
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Product.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Product deleted')
    }
    throw new Error('Product not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

//////////////////////////Reviews///////////////////////////////////////

const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find()
    return res.status(200).json({ reviews })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getReview = async (req, res) => {
  try {
    const review = await Review.find({})
    return res.status(200).json({ review })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getReviewByReviewId = async (req, res) => {
  try {
    const { id } = req.params

    const reviews = await Review.find({ _id: id })
    if (reviews) {
      return res.status(200).json({ reviews })
    }
    return res.status(404).send('Reviews with the specified ID does not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getReviewByProductId = async (req, res) => {
  try {
    const { id } = req.params

    const reviews = await Review.find({ product_id: id })
    if (reviews) {
      return res.status(200).json({ reviews })
    }
    return res.status(404).send('Reviews with the specified ID does not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createReview = async (req, res) => {
  try {
    const review = await new Review(req.body)
    await review.save()
    return res.status(201).json({
      review
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const updateReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(review)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteReview = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Review.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Review deleted')
    }
    throw new Error('Review not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllProducts,
  createProduct,
  deleteProduct,
  getProductById,
  getReview,
  getAllReviews,
  getReviewByReviewId,
  getReviewByProductId,
  createReview,
  updateReview,
  deleteReview
}
