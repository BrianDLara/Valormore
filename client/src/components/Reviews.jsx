import React from 'react'

const Reviews = (props) => {
  return (
    <div className='reviews-container'>
      <div id='review-options'>
        <span className='review-link'>Edit</span>
        <span className='review-link-divider'>|</span>
        <span className='review-link'>Delete</span>
      </div>
        <h2 className='review-title'>{props.title}</h2>
        <h3 className='review-description'>{props.description}</h3>
    </div>


  )
}

export default Reviews
