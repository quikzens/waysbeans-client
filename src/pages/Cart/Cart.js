import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../contexts/CartContext'

import ReviewCart from './ReviewCart/ReviewCart'
import CheckoutInfo from './CheckoutInfo/CheckoutInfo'

import './Cart.css'

const Cart = () => {
  // init context
  const { carts } = useCart()

  return (
    <div className='cart container'>
      <h2>My Cart</h2>
      {carts.length === 0 ? (
        <p className='alert alert-info'>
          Tampaknya kamu belum memesan, silahkan{' '}
          <Link to='/' className='alert-link'>
            order kopi
          </Link>{' '}
          terlebih dahulu!
        </p>
      ) : (
        <>
          <p>Review Your Order</p>
          <div className='flex gap-2'>
            <ReviewCart />
            <CheckoutInfo />
          </div>
        </>
      )}
    </div>
  )
}

export default Cart
