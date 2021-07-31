import React from 'react'
import { cart } from '../../utils/icons'

const NavbarCart = () => {
  return (
    <div className='navbar-cart'>
      <button className='navbar-cart-btn'>
        <img src={cart} alt='cart' className='navbar-cart-icon' />
      </button>
    </div>
  )
}

export default NavbarCart
