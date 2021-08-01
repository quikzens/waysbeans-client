import React, { useContext, useState } from 'react'
import { UserContext } from '../../contexts/UserContext'

import './Form.css'

const Register = () => {
  // init context
  const { register } = useContext(UserContext)

  // init state
  const [form, setForm] = useState({
    fullname: '',
    email: '',
    password: '',
  })
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const msg = await register(form)
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
      <div className='form-group'>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          id='email'
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className='form-group'>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          id='password'
          value={form.password}
          onChange={handleChange}
          required
        />
      </div>
      <div className='form-group'>
        <label htmlFor='fullname'>Fullname</label>
        <input
          type='text'
          name='fullname'
          id='fullname'
          value={form.fullname}
          onChange={handleChange}
          required
        />
      </div>
      <button className='form-submit' type='submit'>
        Register
      </button>
    </form>
  )
}

export default Register
