const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product = new Schema(
  {
    product_name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    video: { type: String, required: false },
    price: { type: String, required: false },
    prevPrice: { type: String, required: false },
    available: { type: String, required: false }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Product', Product)
