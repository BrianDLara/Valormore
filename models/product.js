const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product = new Schema(
  {
    product_name: { type: String, required: true },
    description: { type: String, required: false },
    image: { type: String, required: false },
    video: { type: String, required: false },
    price: { type: String, required: false },
    prevPrice: { type: String, required: false },
    available: { type: String, required: false }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Product', Product)
