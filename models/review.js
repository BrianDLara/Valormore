const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Review = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    product_id: { type: Schema.Types.ObjectId, ref: 'product_id' }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Review', Review)
