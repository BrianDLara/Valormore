import React from 'react'

const Featured = (props) => {


  return (
    <div className='featured-product inline-snap' key={props.key}>
      <img src={props.image} alt={props.productName} id='featured-image'/>
    </div>
  )
}


export default Featured
