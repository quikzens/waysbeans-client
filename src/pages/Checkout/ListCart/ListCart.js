import React, { useContext } from 'react'
import { CartContext } from '../../../contexts/CartContext'

import CartItem from '../../../components/CartItem/CartItem'

import './ListCart.css'

const ListCart = () => {
  // init context
  const { carts, total } = useContext(CartContext)

  if (carts.length > 0) {
    return (
      <div className='list-cart'>
        <div className='list-cart-total flex'>
          <p>Total</p>
          <p>Rp. {total}</p>
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
