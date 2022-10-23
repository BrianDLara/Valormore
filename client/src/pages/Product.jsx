import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Product = () => {
    let { productId } = useParams()


    const [product, setProduct] = useState(null)
    const [reviews, setReviews] = useState(null)
    
    const findProductById = async () => {
        const response = await axios.get(`http://localhost:3001/api/product/${productId}`)
        setProduct(response.data.product)
        console.log(response.data.product)
        
    }

    const findProductReviews = async () => {
        const response = await axios.get(`http://localhost:3001/api/product/reviews/${productId}`)
        setReviews(response)
        console.log(response)
        


    }



    useEffect(() => {
        findProductById()
        findProductReviews()
      }, [])

    return product !== null ? (
    <div className= 'product'>
        <h1>{product.product_name}</h1>
        <img src={product.image} alt={product.productName} />
        <h3>{product.description}</h3>
    </div>
    ) : null
}

export default Product
