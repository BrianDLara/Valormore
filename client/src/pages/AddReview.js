import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'

const AddReview = () => {
  const initialState = {
    headline: '',
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

  useEffect(() => {
    getReviews()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/api/product/review')

    setFormState(initialState)
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-container">
        {/* headline section */}
        <div className="form-subject-container">
          <label htmlFor="headline" className="form-header">
            Write a Headline
          </label>
          <input
            type="text"
            id="headline"
            onChange={handleChange}
            value={formState.headline}
            required
            placeholder="What's your review about?"
            className="form-input"
          />
        </div>
        {/* description section */}
        <div className="form-subject-container">
          <label htmlFor="description" className="form-header">
            Write a description
          </label>
          <textarea
            id="description"
            cols="30"
            rows="10"
            onChange={handleChange}
            value={formState.description}
            required
            placeholder="Write about the product. Did you like it or disliked it."
            className="form-input"
          />
        </div>
        <button type="submit" className="form-button">
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddReview
