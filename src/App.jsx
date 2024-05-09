import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Product from './components/Product'
import SearchItems from './components/SearchItems'
import Cart from './components/Cart'
import ProductDetails from './components/ProductDetails'
import { items } from './components/Data'

const App =()=>{
  const [data, setData] = useState([...items])

  return (
    <>
    <Router>
    <Navbar/>
       <Routes>
      <Route path="/" element={<Product items={data}/>}></Route>
      <Route path="/product/:id"element={<ProductDetails/>} />
      <Route path="/search/:term" element={<SearchItems/>} />
      <Route path="/cart" element={<Cart/>} />
       </Routes>
    </Router>
    </>
    
  )
}

export default App
