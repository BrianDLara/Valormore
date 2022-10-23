import React from 'react'

const BestSeller = (props) => {
  return (
    <div className='best-seller-product'>
      <img src={props.image} alt={props.productName} />
    </div>
  )
}

export default BestSeller
