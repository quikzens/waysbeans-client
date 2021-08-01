import React from 'react'

import { logoSmall } from '../../utils/images'
import './CartItem.css'

const CartItem = (props) => {
  // init props
  const { product, orderQuantity, subtotal, children } = props

  return (
    <div className='cart-item'>
      <div className='flex'>
        <img src={product.photo} alt='' />
        <div className='flex jc-between'>
          <div className='flex flex-column jc-between'>
            <h4>{product.name}</h4>
            <div>
              <p>Price: {product.price}</p>
              <p>Qty: {orderQuantity}</p>
              <p>Sub Total: Rp. {subtotal}</p>
            </div>
          </div>
          <div>
            <img src={logoSmall} alt='' />
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
