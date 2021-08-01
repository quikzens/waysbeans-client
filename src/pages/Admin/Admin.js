import React, { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'

import AdminLogin from './AdminLogin/AdminLogin'
import AdminDashboard from './AdminDashboard/AdminDashboard'

const Admin = () => {
  // init context
  const { user } = useContext(UserContext)

  if (user.role && user.role === 'admin') return <AdminDashboard />
  return <AdminLogin />
}

export default Admin
