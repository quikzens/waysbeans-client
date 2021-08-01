import React, { useContext } from 'react'
import { CartContext } from '../../../contexts/CartContext'
import CartItem from '../../../components/CartItem/CartItem'
import './ListCart.css'

const ListCart = () => {
  // init context
  const { carts, total } = useContext(CartContext)

  return (
    <div className='list-cart'>
      <div className='list-cart-total flex'>
        <p>Total</p>
        <p>Rp. {total}</p>
      </div>
      {carts.map((cart) => (
        <CartItem {...cart} />
      ))}
    </div>
  )
}

export default ListCart
