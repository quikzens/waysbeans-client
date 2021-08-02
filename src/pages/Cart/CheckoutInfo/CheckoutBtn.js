import React from 'react'
import { Link } from 'react-router-dom'

const CheckoutBtn = () => {
  return (
    <button className='checkout-btn btn'>
      <Link to='/checkout'>Proceed to Checkout</Link>
    </button>
  )
}

export default CheckoutBtn
