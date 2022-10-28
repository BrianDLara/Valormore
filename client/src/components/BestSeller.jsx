import React from 'react'

const BestSeller = (props) => {
  return (
    <div className='best-seller-product' key={props.key}>
      <img src={props.image} alt={props.productName} id="best-seller-image"/>
      <h4 id="product-name">{props.productName}</h4>
      <h4 id="product-price">{props.price}</h4>
    </div>
  )
}

export default BestSeller
