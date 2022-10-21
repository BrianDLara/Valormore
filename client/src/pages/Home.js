import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Featured from '../components/Featured'
import BestSeller from '../components/BestSeller'
import { Link } from 'react-router-dom'

const Base_URL = 'http://localhost:3001/api'

const Home = () => {
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const response = await axios.get(`${Base_URL}/products`)

    setProducts(response.data.products)
    console.log(response.data.products)
  }

  useEffect(() => {
    getProducts()
  }, [])
  console.log(products.product_name)

  return (
    <div className="main">
      <h1>Featured Products</h1>
      <section className="featured-container">
        {products.map((product) => (
          <Featured
            key={product._id}
            productName={product.product_name}
            description={product.description}
            image={product.image}
          />
        ))}
      </section>

      <section className="best-seller-container">
        <BestSeller
          key={products._id}
          productName={products.product_name}
          description={products.description}
          image={products.image}
        />
      </section>
    </div>
  )
}

export default Home
