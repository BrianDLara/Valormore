import React from 'react'

const Reviews = (props) => {
  return (
    <div className='reviews-container'>
      <ul id="edit-button" className='list-drop'>
        <li className='sub-list'>Edit</li>
        <li className='sub-list'>Delete</li>
      </ul>
        <h2 className='review-title'>{props.title}</h2>
        <h3 className='review-description'>{props.description}</h3>
    </div>


  )
}

export default Reviews
