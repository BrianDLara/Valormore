import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom'

import { useNavigate, useParams } from 'react-router-dom'



const Reviews = (props) => {
  let { productId } = useParams() 
  // let navigate = useNavigate()

  const handleRefresh = () => {
    window.location.reload(false);
  }

  const handleDelete = async () => {
    await axios.delete(`http://localhost:3001/api/product/review/${props.id}`)
   
  }
  







  return (
    <div className='reviews-container'>
      <div id='review-options'>
        <Link title={props.title} description={props.description} to={ `/api/product/${productId}/${props.id}/edit_review` }> 
          <button className='review-link'>Edit</button>
        </Link>
        <span className='review-link-divider'>|</span>
        <button onClick={handleDelete}  className='review-link'>Delete</button>
      </div>
        <h2 className='review-title'>{props.title}</h2>
        <h3 className='review-description'>{props.description}</h3>
    </div>


  )
}

export default Reviews
