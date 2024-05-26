import GooglePayButton from '@google-pay/button-react';
import React from 'react';
import { Link } from 'react-router-dom';


const Cart = ({ cart, setCart }) => {
  return (
    <>
      <div className="container my-5" style={{ width: "54%" }}>
        {
          cart.length === 0 ? (
            <>
              <div className='text-center'>
                <h1>Your Cart is Empty</h1>
                <Link to={"/"} className='btn btn-warning'>Continue Shopping...</Link>
              </div>
            </>
          ) :
            cart.map((product) => {
              return (
                <>
                  <div key={product.id} className="card mb-3 my-5" style={{ width: '700px' }}>
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src={product.imgSrc} className="img-fluid rounded-start" alt="..." />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body text-center">
                          <h5 className="card-title">{product.title}</h5>
                          <p className="card-text">{product.description}</p>
                          <button className="btn btn-primary mx-3">
                            {product.price} ₹
                          </button>
                          <GooglePayButton
                            environment='TEST'
                            paymentRequest={{
                              apiVersion: 2,
                              apiVersionMinor: 0,
                              allowedPaymentMethods: [
                                {
                                  type: "CARD",
                                  parameters: {
                                    allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                                    allowedCardNetworks: ["MASTERCARD", "VISA"]
                                  },
                                  tokenizationSpecification: {
                                    type: "PAYMENT_GATEWAY",
                                    parameters: {
                                      gateway: "example",
                                      gatewayMerchantId: "exampleGateMerchantID"
                                    }
                                  },
                                },
                              ],
                              merchantInfo: {
                                merchantId: "123456678888",
                                merchantName: "Demo Merchant"
                              },
                              transactionInfo: {
                                totalPriceStatus: "FINAL",
                                totalPriceLabel: "Total",
                                totalPrice: product.price.toString(), // Assuming product price is the total price
                                currencyCode: "INR",
                                countryCode: "IN"
                              },
                              shippingAddressRequired: true,
                              callbackIntents: ["PAYMENT_AUTHORIZATION"]
                            }}
                            onLoadPaymentData={paymentRequest => {
                              console.log(paymentRequest)
                            }}
                            onPaymentAuthorized={paymentData => {
                              console.log(paymentData);
                              return { transactionState: 'SUCCESS' }
                            }}
                            existingPaymentMethodRequired={false}
                            buttonColor='Black'
                            buttonType='Buy Now'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )
            })
        }
      </div>

      {
        cart.length !== 0 && (
          <div className="container text-center my-5" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <button className='btn btn-warning mx-5 '>CheckOut</button>
            <button onClick={() => setCart("")} className='btn btn-danger'>Clear Cart</button>
          </div>
        )
      }
    </>
  )
}

export default Cart;
