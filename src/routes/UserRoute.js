import React, { useContext, useState, useEffect } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'

function UserRoute({ component: Component, ...rest }) {
  const { user } = useContext(UserContext)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [user])

  if (isLoading) return <p>Loading...</p>

  return (
    <Route
      {...rest}
      render={(props) => {
        switch (user.role) {
          case 'user':
            return <Component {...props} />
          case 'admin':
            return <Redirect to='/admin' />
          default:
            return <Redirect to='/' />
        }
      }}
    />
  )
}

export default UserRoute
