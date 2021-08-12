import React from 'react'
import { useUser } from '../../contexts/UserContext'

import AdminLogin from './AdminLogin/AdminLogin'
import AdminDashboard from './AdminDashboard/AdminDashboard'

const Admin = () => {
  // init context
  const { user } = useUser()

  if (user.role && user.role === 'admin') return <AdminDashboard />
  return <AdminLogin />
}

export default Admin
