import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'

const AddReview = () => {
  const initialState = {
    subject: '',
    description: ''
  }

  const [review, setReview] = useState([])
  const [formState, setFormState] = useState(initialState)

  const getReviews = async () => {
    const response = await axios.get(
      'http://localhost:3001/api/product/new_review'
    )
    setReview(response.data)
    console.log(response.data)
  }

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}

export default AddReview
