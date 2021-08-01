import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'
import {
  logout as logoutIcon,
  user as userIcon,
  coffee,
} from '../../utils/icons'
import { avatarPlaceholder } from '../../utils/images'

const NavbarDropdown = () => {
  // init context
  const { user, logout } = useContext(UserContext)

  // init state
  const [isActive, setActive] = useState(false)

  return (
    <div className='navbar-dropdown'>
      <div
        className='navbar-dropdown-avatar'
        onClick={() => setActive(!isActive)}
      >
        <img src={user.avatar ? user.avatar : avatarPlaceholder} alt='' />
      </div>
      <div className={`navbar-dropdown-dropdown ${isActive ? 'show' : ''}`}>
        {user.role === 'user' && (
          <Link className='navbar-dropdown-item' to='/profile'>
            <img src={userIcon} alt='' />
            <p>Profile</p>
          </Link>
        )}
        {user.role === 'admin' && (
          <>
            <Link className='navbar-dropdown-item' to='/admin'>
              <img src={userIcon} alt='' />
              <p>Dashboard</p>
            </Link>
            <Link className='navbar-dropdown-item' to='/addproduct'>
              <img src={coffee} alt='' />
              <p>Add Product</p>
            </Link>
          </>
        )}
        <hr />
        <button className='navbar-dropdown-item' onClick={logout}>
          <img src={logoutIcon} alt='' />
          <p>Logout</p>
        </button>
      </div>
    </div>
  )
}

export default NavbarDropdown
