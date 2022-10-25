import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './components/Nav'
import Product from './pages/Product'
import ReviewForm from './pages/ReviewForm'

import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/api/product/:productId" element={<Product />} />
          <Route
            path="/api/product/:productId/new_review"
            element={<ReviewForm />}
          />
          <Route
            path="/api/product/:reviewId/edit_review"
            element={<ReviewForm />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
