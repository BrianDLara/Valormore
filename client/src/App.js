import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './components/Nav'
import Product from './pages/Product'
import AddReview from './pages/AddReview'

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
            element={<AddReview />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
