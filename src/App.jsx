import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import './App.css'
import Navbar from './components/Navbar'
import Product from './components/Product'
import SearchItems from './components/SearchItems'
import Cart from './components/Cart'
import ProductDetails from './components/ProductDetails'
import { items } from './components/Data'
import GooglePayButton from '@google-pay/button-react'

const App = () => {
  const [data, setData] = useState([...items])
  const [cart, setCart] = useState([])

  // Calculate total amount
  const totalAmount = cart.reduce((total, item) => total + item.price, 0)

  return (
    <>
      <Router>
        <Navbar cart={cart} setData={setData} />
        <Routes>
          <Route path="/" element={<Product cart={cart} setCart={setCart} items={data} />} />
          <Route path="/product/:id" element={<ProductDetails cart={cart} setCart={setCart} />} />
          <Route path="/search/:term" element={<SearchItems cart={cart} setCart={setCart} />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        </Routes>
      </Router>
    
    </>
  )
}

export default App
