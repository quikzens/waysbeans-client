import React, { useContext } from 'react'
import { CartContext } from '../../../contexts/CartContext'
import CheckoutBtn from './CheckoutBtn'
import './CheckoutInfo.css'

const CheckoutInfo = () => {
  // init context
  const { carts, total } = useContext(CartContext)

  return (
    <div className='checkout-info'>
      {carts.map((cart, index) => (
        <div className='checkout-info-item' key={index}>
          <div className='checkout-info-subtotal flex jc-between'>
            <p>Subtotal</p>
            <p>{cart.subtotal}</p>
          </div>
          <div className='checkout-info-qty flex jc-between'>
            <p>Qty</p>
            <p>{cart.orderQuantity}</p>
          </div>
        </div>
      ))}
      <div className='checkout-info-total flex jc-between'>
        <p>Total</p>
        <p>Rp. {total}</p>
      </div>
      <CheckoutBtn />
    </div>
  )
}

export default CheckoutInfo
