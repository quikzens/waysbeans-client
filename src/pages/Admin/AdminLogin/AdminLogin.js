import React from 'react'

import Login from '../../../components/Form/Login'

import './AdminLogin.css'

const AdminLogin = () => {
  return (
    <div className='admin-login'>
      <h2>Admin Login</h2>
      <Login isAdmin={true} />
    </div>
  )
}

export default AdminLogin
