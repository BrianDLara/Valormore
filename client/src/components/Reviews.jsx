import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom'
// import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'



const Reviews = (props) => {
  let { productId } = useParams() 
  let navigate = useNavigate()

  const handleRefresh = () => {
    window.location.reload(false);
  }

  const handleDelete = async () => {
    await axios.delete(`http://localhost:3001/api/product/review/${props.id}`)
    navigate(`/api/product/${productId}`)
    handleRefresh()
  }
  // const [review, setReview] = useState([])
  
  // const getReviews = async () => {

  //   const response = await axios.get(
  //     'http://localhost:3001/api/product/new_review'
  //   )
  //   setReview(response.data)
  //   console.log(response.data)
  // }
  
  // useEffect(() => {
  //   getReviews()
    
  // }, [])

// const handleClick = (e) => {
//   e.preventDefault();
//   let button = e.target.id;
 
//   if(button === "delete-review"){
//     handleDelete()
//   }
// }








  return (
    <div className='reviews-container'>
      <div id='review-options'>
        <Link to={ `/api/product/${props.id}/edit_review` }> 
          <button className='review-link'>Edit</button>
        </Link>
        <span className='review-link-divider'>|</span>
        <button onClick={handleDelete} id={props.id} className='review-link'>Delete</button>
        
      </div>
        <h2 className='review-title'>{props.title}</h2>
        <h3 className='review-description'>{props.description}</h3>
    </div>


  )
}

export default Reviews
