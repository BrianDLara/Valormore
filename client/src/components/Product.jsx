import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Product = () => {
    let { productId } = useParams()


    const [product, setProduct] = useState(null)
    
    const findProductById = async () => {
        const response = await axios.get(`http://localhost:3001/api/product/${productId}`)
        setProduct(response.data.product)
        console.log(response.data.product)
        
    }

    useEffect(() => {
        findProductById()
      }, [])

    return (
    <div >
        
    </div>
    ) 
}

export default Product
