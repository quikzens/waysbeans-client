import { createContext, useState, useEffect } from 'react'
import { API, configJSON, setAuthToken } from '../config/api'

export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
  // init state
  const [user, setUser] = useState({})

  useEffect(() => {
    // get user data from localStorage (if user is login)
    const userData = localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user'))
      : null
    if (userData) {
      // set token
      if (userData.token) {
        setAuthToken(userData.token)
      }
      setUser(userData)
    }
  }, [])

  // will invoked when user login/register successfully
  const userIn = (userData) => {
    setUser(userData)
    setAuthToken(userData.token)
    localStorage.setItem('user', JSON.stringify(userData))
    if (userData.role === 'admin') {
      window.location.href = '/admin'
    } else {
      window.location.href = '/'
    }
  }

  const register = async (data) => {
    const response = await API.post('/register', data, configJSON)

    if (response.data.status === 'failed') {
      return {
        error: response.data.message,
      }
    }

    const userData = response.data.data
    console.log(userData)
    if (userData) userIn(userData)
  }

  const login = async (data) => {
    const response = await API.post('/login', data, configJSON)

    if (response.data.status === 'failed') {
      return {
        error: response.data.message,
      }
    }

    const userData = response.data.data
    if (userData) userIn(userData)
  }

  const logout = () => {
    // clean state, localstorage, and token
    // redirect to homepage
    setUser({})
    localStorage.clear()
    setAuthToken()
    window.location.href = '/'
  }

  return (
    <UserContext.Provider
      value={{
        user,
        register,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
