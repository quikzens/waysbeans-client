import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'

import { cart } from '../../utils/icons'

const NavbarCart = () => {
  // init context
  const { totalQty } = useContext(CartContext)

  return (
    <div className='navbar-cart'>
      <button className='navbar-cart-btn'>
        <Link to='/carts'>
          <img src={cart} alt='cart' className='navbar-cart-icon' />
          <span
            className={`navbar-cart-number ${
              totalQty === 0 ? 'd-none' : 'flex jc-center ai-center'
            }`}
          >
            {totalQty}
          </span>
        </Link>
      </button>
    </div>
  )
}

export default NavbarCart
