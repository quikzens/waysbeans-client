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
      <div className='form-item'>
        <input
          type='text'
          name='fullname'
          id='fullname'
          value={form.fullname}
          onChange={handleChange}
          placeholder='Fullname'
          required
        />
      </div>
      <button className='form-submit btn w-100' type='submit'>
        Register
      </button>
    </form>
  )
}

export default Register
