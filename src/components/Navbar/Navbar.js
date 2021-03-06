import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useUser } from '../../contexts/UserContext'

import NavbarButton from './NavbarButton'
import NavbarCart from './NavbarCart'
import NavbarDropdown from './NavbarDropdown'
import Modal from '../Modal/Modal'
import Register from '../Form/Register'
import Login from '../Form/Login'

import { logo } from '../../utils/images'
import './Navbar.css'

const Navbar = () => {
  // init context
  const { user } = useUser()

  // init state
  const [isRegisterShow, setRegister] = useState(false)
  const [isLoginShow, setLogin] = useState(false)

  // get url
  const location = useLocation().pathname

  return (
    <div className='navbar flex jc-between ai-center'>
      <Link to='/'>
        <img className='navbar-logo' src={logo} alt='' />
      </Link>

      {/* 
        check from token, if user is not login:
        show login & register button
      */}
      {!user.token && location !== '/admin' && (
        <>
          <NavbarButton setRegister={setRegister} setLogin={setLogin} />

          <Modal show={isLoginShow} close={() => setLogin(false)} title='Login'>
            <Login />
          </Modal>

          <Modal
            show={isRegisterShow}
            close={() => setRegister(false)}
            title='Register'
          >
            <Register />
          </Modal>
        </>
      )}

      {/* 
        if user is login:
        show cart button and dropdown
      */}
      {user.token && (
        <div className='flex ai-center gap-2'>
          {user.role === 'user' && <NavbarCart />}
          <NavbarDropdown />
        </div>
      )}
    </div>
  )
}

export default Navbar
