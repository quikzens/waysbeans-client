import React, { useContext, useState, useEffect } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'

function AdminRoute({ component: Component, ...rest }) {
  // init context
  const { user } = useContext(UserContext)

  // init state
  const [isLoading, setLoading] = useState(true)

  // init lifecycle
  useEffect(() => {
    setLoading(false)
  }, [user])

  if (isLoading) return <p>Loading...</p>

  return (
    <Route
      {...rest}
      render={(props) => {
        switch (user.role) {
          case 'admin':
            return <Component {...props} />
          case 'user':
            return <Redirect to='/' />
          default:
            return <Redirect to='/admin' />
        }
      }}
    />
  )
}

export default AdminRoute
