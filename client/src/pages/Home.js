import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Featured from '../components/Featured'
import BestSeller from '../components/BestSeller'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
const BASE_URL = '/api'

const Home = () => {
  const [featuredProducts, setProducts] = useState([])
  const [bestSellerProducts, setBestSellerProducts] = useState([])

  const getFeaturedProducts = async () => {
    const response = await axios.get(`${BASE_URL}/products`)

    setProducts(response.data.products)
  }

  const getBestSellerProducts = async () => {
    const response = await axios.get(`${BASE_URL}/products`)

    setBestSellerProducts(response.data.products)
  }

  //Got this idea from Jeremy Harrell's game 'Blackjack-with-Jeremy' Github: https://github.com/wolfy1313
  const productShuffle = (event) => {
    for (let i = event.length - 1; i > 0; i--) {
      const randomProduct = Math.floor(Math.random() * (i + 1))
      ;[event[i], event[randomProduct]] = [event[randomProduct], event[i]]
    }
  }
  useEffect(() => {
    getFeaturedProducts()
    getBestSellerProducts()
  }, [])

  productShuffle(featuredProducts)
  productShuffle(bestSellerProducts)

  const scrLeft = () => {
    let left = document.querySelector('.scroll-images')
    left.scrollBy(-350, 0)
  }

  const scrRight = () => {
    let right = document.querySelector('.scroll-images')
    right.scrollBy(350, 0)
  }
  return (
    <div className="main">
      <section className="banner">
        <Banner />
      </section>
      <h1 className="home-section-title">Featured Products</h1>
      <div id="inline">
        <span id="scrLeft" onClick={scrLeft}></span>
        <section className="featured-container inline-snap scroll-images">
          {featuredProducts.map((FeaturedProduct) => (
            <Link to={`/product/${FeaturedProduct._id}`}>
              <Featured
                key={FeaturedProduct._id}
                productName={FeaturedProduct.product_name}
                description={FeaturedProduct.description}
                image={FeaturedProduct.image}
              />
            </Link>
          ))}
        </section>
        <span id="scrRight" onClick={scrRight}></span>
      </div>
      <h1 className="home-section-title">Best Sellers</h1>
      <section className="best-seller-container">
        {bestSellerProducts.map((product) => (
          <Link to={`/product/${product._id}`}>
            <BestSeller
              key={product._id}
              productName={product.product_name}
              description={product.description}
              price={product.price}
              image={product.image}
            />
          </Link>
        ))}
      </section>
    </div>
  )
}

export default Home
