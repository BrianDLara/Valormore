import React from 'react'

const BestSeller = (props) => {
  return (
    <div className='featured-container'>
        <div className="img-wrapper">
          <img src={props.image} alt={props.productName} />
        </div>
        <div className="info-wrapper">
          <h2>{props.productName}</h2>
          <h3>{props.description}</h3>
        </div>
    </div>
  )
}

export default BestSeller
