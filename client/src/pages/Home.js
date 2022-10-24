import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Featured from '../components/Featured'
import BestSeller from '../components/BestSeller'
import { Link } from 'react-router-dom'

const Base_URL = 'http://localhost:3001/api'

const Home = () => {
  const [featuredProducts, setProducts] = useState([])
  const [bestSellerProducts, setBestSellerProducts] = useState([])

  const getProducts = async () => {
    const response = await axios.get(`${Base_URL}/products`)

    setProducts(response.data.products)
    setBestSellerProducts(response.data.products)
  }

  //Got this idea from Jeremy Harrell's game 'Blackjack-with-Jeremy' Github: https://github.com/wolfy1313
  const ProductShuffle = (event) => {
    for (let i = event.length - 1; i > 0; i--) {
      const randomProduct = Math.floor(Math.random() * (i + 1))
      ;[event[i], event[randomProduct]] = [event[randomProduct], event[i]]
    }
  }
  useEffect(() => {
    getProducts()
  }, [])

  ProductShuffle(featuredProducts)

  // let randomProducts = products[Math.floor(Math.random() * products.length)]
  return (
    <div className="main">
      <section className="banner"></section>
      <h1>Featured Products</h1>
      <section className="featured-container">
        {featuredProducts.map((FeaturedProduct) => (
          <Link to={`api/product/${FeaturedProduct._id}`}>
            <Featured
              key={FeaturedProduct._id}
              productName={FeaturedProduct.product_name}
              description={FeaturedProduct.description}
              image={FeaturedProduct.image}
            />
          </Link>
        ))}
      </section>

      <section className="best-seller-container">
        {bestSellerProducts.map((product) => (
          <BestSeller
            key={product._id}
            productName={product.product_name}
            description={product.description}
            image={product.image}
          />
        ))}
      </section>
    </div>
  )
}

export default Home
