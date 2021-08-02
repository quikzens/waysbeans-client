import React, { useContext, useState } from 'react'
import { UserContext } from '../../contexts/UserContext'

import './Form.css'

const Login = ({ isAdmin }) => {
  // init context
  const { login } = useContext(UserContext)

  // init state
  const [form, setForm] = useState({
    role: isAdmin ? 'admin' : 'user',
    email: '',
    password: '',
  })
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    console.log(form)
    e.preventDefault()
    const msg = await login(form)
    if (msg?.error) setError(msg.error)
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm({
      ...form,
      [name]: value,
    })
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      {error && (
        <div className='form-alert'>
          <p>{error}</p>
        </div>
      )}
      <div className='form-item'>
        <input
          type='email'
          name='email'
          id='email'
          value={form.email}
          onChange={handleChange}
          placeholder='Email'
          required
        />
      </div>
      <div className='form-item'>
        <input
          type='password'
          name='password'
          id='password'
          value={form.password}
          onChange={handleChange}
          placeholder='Password'
          required
        />
      </div>
      <button className='form-submit btn w-100' type='submit'>
        Login
      </button>
    </form>
  )
}

export default Login
