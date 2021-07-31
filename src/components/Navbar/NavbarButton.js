import React from 'react'

const NavbarButton = (props) => {
  // init props
  const { setRegister, setLogin } = props

  return (
    <div className='navbar-btn'>
      <button className='navbar-btn-item' onClick={() => setLogin(true)}>
        Login
      </button>
      <button className='navbar-btn-item' onClick={() => setRegister(true)}>
        Register
      </button>
    </div>
  )
}

export default NavbarButton
