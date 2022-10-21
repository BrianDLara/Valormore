const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Review = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: false }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Review', Review)
