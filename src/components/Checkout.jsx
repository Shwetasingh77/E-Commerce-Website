import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CheckoutPage = ({ cart, clearCart }) => {
  const [shippingAddress, setShippingAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePlaceOrder = () => {
    // Prepare order data
    const orderData = {
      shippingAddress,
      paymentMethod,
      items: cart.map(item => ({
        id: item.id,
        title: item.title,
        price: item.price
      }))
    };
  
    // Send order data to backend
    fetch('/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderData)
    })
    .then(response => {
      if (response.ok) {
        // Order successfully placed, clear the cart
        clearCart();
        // Redirect to order confirmation page or show a success message
      } else {
        // Handle error response from server
        throw new Error('Failed to place order');
      }
    })
    .catch(error => {
      // Handle network errors or other errors
      console.error('Error placing order:', error);
      // Optionally, display an error message to the user
    });
  };
  

  return (
    <div className="container my-5">
      <h1>Checkout</h1>
      <div className="mb-3">
        <label htmlFor="shippingAddress" className="form-label">Shipping Address</label>
        <input
          type="text"
          className="form-control"
          id="shippingAddress"
          value={shippingAddress}
          onChange={(e) => setShippingAddress(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="paymentMethod" className="form-label">Payment Method</label>
        <select
          className="form-select"
          id="paymentMethod"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="">Select Payment Method</option>
          <option value="Credit Card">Credit Card</option>
          <option value="Debit Card">Debit Card</option>
          <option value="PayPal">PayPal</option>
          {/* Add more payment methods if needed */}
        </select>
      </div>
      <div className="mb-3">
        <h2>Order Summary</h2>
        <ul>
          {cart.map(item => (
            <li key={item.id}>{item.title} - {item.price}</li>
          ))}
        </ul>
      </div>
      <div>
        <button className="btn btn-primary" onClick={handlePlaceOrder}>Place Order</button>
        <Link to="/" className="btn btn-secondary ms-3">Cancel</Link>
      </div>
    </div>
  );
};

export default CheckoutPage;
