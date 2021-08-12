import React from 'react'
import { useCart } from '../../../contexts/CartContext'
import formatPrice from '../../../utils/formatPrice'

import CheckoutBtn from './CheckoutBtn'

import './CheckoutInfo.css'

const CheckoutInfo = () => {
  // init context
  const { carts, total } = useCart()

  return (
    <div className='checkout-info'>
      {carts.map((cart, index) => (
        <div className='checkout-info-item flex flex-column' key={index}>
          <div className='checkout-info-subtotal flex jc-between'>
            <p>Subtotal</p>
            <p>{cart.subtotal && formatPrice(cart.subtotal)}</p>
          </div>
          <div className='checkout-info-qty flex jc-between'>
            <p>Qty</p>
            <p>{cart.orderQuantity}</p>
          </div>
        </div>
      ))}
      <div className='checkout-info-total flex jc-between'>
        <p>Total</p>
        <p>Rp. {total && formatPrice(total)}</p>
      </div>
      <CheckoutBtn />
    </div>
  )
}

export default CheckoutInfo
