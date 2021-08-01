import React, { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

import ReviewCart from './ReviewCart/ReviewCart'
import CheckoutInfo from './CheckoutInfo/CheckoutInfo'

import './Cart.css'

const Cart = () => {
  // init context
  const { carts } = useContext(CartContext)

  return (
    <div className='cart'>
      <h2>My Cart</h2>
      {carts.length === 0 ? (
        <p className='review-info'>
          Tampaknya kamu belum memesan, silahkan order kopi terlebih dahulu!
        </p>
      ) : (
        <>
          <p>Review Your Order</p>
          <div className='flex'>
            <ReviewCart />
            <CheckoutInfo />
          </div>
        </>
      )}
    </div>
  )
}

export default Cart
