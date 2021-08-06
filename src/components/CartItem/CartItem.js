import React from 'react'
import displayDate from '../../utils/displayDate'
import formatPrice from '../../utils/formatPrice'

import { logoSmall } from '../../utils/images'
import './CartItem.css'

const CartItem = (props) => {
  // init props
  const { product, orderQuantity, subtotal, children, createdAt } = props

  return (
    <div className='cart-item'>
      <div className='flex'>
        <img src={product.photo} alt='' className='cart-item-photo' />
        <div className='flex grow-1 jc-between'>
          <div className='flex flex-column jc-between px-1'>
            <div>
              <h4 className='cart-item-name'>{product.name}</h4>
              {(createdAt &&
                displayDate(new Date(createdAt.toString().slice(0, 10)))) ||
                displayDate(new Date())}
            </div>
            <div>
              <p>Price: {product.price && formatPrice(product.price)}</p>
              <p>Qty: {orderQuantity}</p>
              <p className='cart-item-subtotal'>
                Sub Total: Rp. {subtotal && formatPrice(subtotal)}
              </p>
            </div>
          </div>
          <div className='cart-item-info flex flex-column gap-1 ai-center'>
            <img src={logoSmall} alt='' />
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
