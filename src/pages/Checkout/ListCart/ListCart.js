import React from 'react'
import { useCart } from '../../../contexts/CartContext'
import formatPrice from '../../../utils/formatPrice'

import CartItem from '../../../components/CartItem/CartItem'

import './ListCart.css'

const ListCart = () => {
  // init context
  const { carts, total } = useCart()

  if (carts.length > 0) {
    return (
      <div className='list-cart flex flex-column gap-1'>
        <div className='list-cart-total flex jc-between'>
          <p>Total</p>
          <p>Rp. {total && formatPrice(total)}</p>
        </div>
        {carts.map((cart, index) => (
          <CartItem {...cart} key={index} />
        ))}
      </div>
    )
  }

  return null
}

export default ListCart
