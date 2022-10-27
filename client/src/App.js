import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './components/Nav'
import Products from './pages/Products'
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
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route
            path="/product/:productId/new_review"
            element={<ReviewForm />}
          />
          <Route
            path="/product/:productId/:reviewId/edit_review"
            element={<ReviewForm />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
