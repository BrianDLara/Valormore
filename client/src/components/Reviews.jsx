import React from 'react'

const Reviews = (props) => {
  return (
    <div >
        <h2 className='review-title'>{props.title}</h2>
        <h3 className='review-description'>{props.description}</h3>
    </div>


  )
}

export default Reviews
