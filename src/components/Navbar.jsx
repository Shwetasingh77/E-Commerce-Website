import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
  <header className="sticky-top"> 
    <div className="nav-bar" >
          <Link to={'/'} className="brand"> E-Cart</Link>
          <div className="search-bar">
            <input type="text" placeholder='Search Products ,Brands and more' />
          </div>
          <Link to={'/cart'} className="cart">Cart</Link>
         </div>
    
        <div className="nav-bar-wrapper">
         <div className="item">Filter By</div>
         <div className="item">No Filter</div>
         <div className="item">Mobile</div>
         <div className="item">Laptop</div>
         <div className="item">Tablet</div>
         <div className="item">{">="}29999</div>
         <div className="item">{">="}49999</div>
         <div className="item">{">="}69999</div>
         <div className="item">{">="}89999</div>
        </div>
        </header>
        </>
  )
}

export default Navbar
