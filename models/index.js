const { model } = require('mongoose')
const UserSchema = require('./user')
const ReviewSchema = require('./review')
const ProductSchema = require('./product')

const User = model('User', UserSchema)
const Review = model('Review', ReviewSchema)
const Product = model('Product', ProductSchema)

module.exports = {
  User,
  Review,
  Product
}
