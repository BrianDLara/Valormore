import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Featured from '../components/Featured'
import BestSeller from '../components/BestSeller'

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

  return (
    <div className="main">
      <Featured
        key={products._id}
        productName={products.product_name}
        description={products.description}
        image={products.image}
      />
      <BestSeller
        key={products._id}
        productName={products.product_name}
        description={products.description}
        image={products.image}
      />
    </div>
  )
}

export default Home
