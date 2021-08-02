import React from 'react'

const NavbarButton = (props) => {
  // init props
  const { setRegister, setLogin } = props

  return (
    <div className='navbar-btn flex gap-1'>
      <button className='navbar-btn-item' onClick={() => setLogin(true)}>
        Login
      </button>
      <button
        className='navbar-btn-item primary'
        onClick={() => setRegister(true)}
      >
        Register
      </button>
    </div>
  )
}

export default NavbarButton
