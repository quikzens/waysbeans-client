import React from 'react'
import ReviewCart from './ReviewCart/ReviewCart'
import CheckoutInfo from './CheckoutInfo/CheckoutInfo'
import './Cart.css'

const Cart = () => {
  return (
    <div className='cart'>
      <h2>My Cart</h2>
      <p>Review Your Order</p>
      <div className='flex'>
        <ReviewCart />
        <CheckoutInfo />
      </div>
    </div>
  )
}

export default Cart
