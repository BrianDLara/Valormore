import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const AddReview = (props) => {
  //routed-dom imports
  let navigate = useNavigate()
  let { productId } = useParams()
  let { reviewId } = useParams()
  const initialState = {
    _id: reviewId,
    title: '',
    description: '',
    product_id: productId
  }

  const [formState, setFormState] = useState(initialState)

  useEffect(() => {
    const getReview = async () => {
      const res = await axios.get(
        `http://localhost:3001/api/product/review/${reviewId}`
      )
      setFormState(res.data)
    }
    getReview()
  }, [])

  const handleRefresh = () => {
    window.location.reload(false)
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = (e) => {
    if (initialState._id === undefined) {
      e.preventDefault()
      axios.post('http://localhost:3001/api/product/review', formState)
      navigate(`/api/product/${productId}`)
    } else {
      e.preventDefault()
      axios.put(
        `http://localhost:3001/api/product/review/${reviewId}`,
        formState
      )
      navigate(`/api/product/${productId}`)
      handleRefresh()
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-container">
        {/* title section */}
        <div className="form-subject-container">
          <label htmlFor="title" className="form-header">
            Write a Headline
          </label>
          <input
            type="text"
            id="title"
            onChange={handleChange}
            value={formState.title}
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
