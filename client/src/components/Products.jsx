import React from 'react'

const Products = ({name, image, price}) => {
  return ( 
  <div id='products-container'>
    
    <h1 id='products-h1'>{name}</h1>
    <img src={image} alt={name} id='products-image'/>
    <h2 id='products-price'>{price}</h2>
    
  </div>
)}

export default Products
