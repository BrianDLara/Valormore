import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Product from '../components/Products'
const BASE_URL = '/api'

const Products = () => {
  const [products, setProducts] = useState(null)

  const getProducts = async () => {
    const response = await axios.get(`${BASE_URL}/products`)
    setProducts(response.data.products)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return products !== null ? (
    <div id="products">
      {products.map((product) => (
        <Link to={`/product/${product._id}`}>
          <Product
            key={product._id}
            id={product._id}
            name={product.product_name}
            image={product.image}
            price={product.price}
          />
        </Link>
      ))}
    </div>
  ) : null
}

export default Products
