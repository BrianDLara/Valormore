const { model } = require('mongoose')
const UserSchema = require('./user')
const ReviewSchema = require('./review')
const ProductSchema = require('./product')

const User = model('User', UserSchema)
const Review = model('Task', ReviewSchema)
const Product = model('Task', ProductSchema)

module.exports = {
  User,
  Review,
  Product
}
