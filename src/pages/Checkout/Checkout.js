import React from 'react'

import CheckoutForm from '../../components/Form/Checkout'
import ListCart from './ListCart/ListCart'

import './Checkout.css'

const Checkout = () => {
  return (
    <div className='checkout'>
      <div className='flex'>
        <div>
          <h2>Shipping</h2>
          <CheckoutForm />
        </div>
        <ListCart />
      </div>
    </div>
  )
}

export default Checkout
