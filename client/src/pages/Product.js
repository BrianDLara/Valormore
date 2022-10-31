import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Reviews from '../components/Reviews'
import { Link } from 'react-router-dom'
const BASE_URL = '/api'

const Product = () => {
  let { productId } = useParams()

  const [product, setProduct] = useState(null)
  const [reviews, setReviews] = useState([])

  const findProductById = async () => {
    const response = await axios.get(`${BASE_URL}/product/${productId}`)
    setProduct(response.data.product)
  }

  const findProductReviews = async () => {
    const response = await axios.get(`${BASE_URL}/product/reviews/${productId}`)
    setReviews(response.data.reviews)
  }

  useEffect(() => {
    findProductById()
  }, [])

  useEffect(() => {
    findProductReviews()
  }, [])

  return product !== null ? (
    <div className="product-page">
      <section className="product-container" key={product._id}>
        <img
          src={product.image}
          alt={product.product_name}
          className="product-image"
        />
        <div className="product-text">
          <h1 id="product-title">{product.product_name}</h1>
          <h3 className="product-description">{product.description}</h3>
          <h3 className="product-description">
            Price <span id="prevPrice">{product.prevPrice}</span>&nbsp;&nbsp;
            {product.price} USD
          </h3>
          <button className="buy-button">Buy Now</button>
          <h3 className="product-description">
            Items Left: <span id="availNum">{product.available}</span>
          </h3>
        </div>
      </section>

      <h1 id="review-header">Customer Reviews</h1>

      <section className="product-reviews">
        {reviews.map((review) => (
          <Reviews
            key={review._id}
            id={review._id}
            title={review.title}
            description={review.description}
          />
        ))}
      </section>

      <Link type="button" to={`/product/${productId}/new_review`}>
        <button className="review-button">Add Review</button>
      </Link>
    </div>
  ) : null
}

export default Product
