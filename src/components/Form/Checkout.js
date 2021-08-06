import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { API, configFormData } from '../../config/api'
import { CartContext } from '../../contexts/CartContext'

import OnProcess from '../OnProcess/OnProcess'
import PopUp from '../PopUp/PopUp'

import { pin } from '../../utils/icons'
import './Form.css'

const Checkout = () => {
  // init context
  const { storeCarts, cleanCarts, total, totalQty } = useContext(CartContext)

  // init state
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    possCode: '',
    address: '',
    attachment: '',
  })
  const [onProcess, setProcess] = useState(false)
  const [isSuccess, setSuccess] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    setProcess(true)

    // prepare transaction data
    const transaction = new FormData()
    transaction.append('name', form.name)
    transaction.append('email', form.email)
    transaction.append('phone', form.phone)
    transaction.append('possCode', form.possCode)
    transaction.append('address', form.address)
    transaction.append('total', total)
    transaction.append('attachment', form.attachment, form.attachment.name)

    // store transaction data to DB
    const response = await API.post('/transaction', transaction, configFormData)
    if (response.data.status === 'failed') {
      // if failed, abort this function
      // and set the error message
      setError(response.data.message)
      return setProcess(false)
    }

    // if success, get the transaction data we successfully added before
    const addedTransaction = response.data.data

    // store cart data to DB, check error
    const msg = storeCarts(addedTransaction._id)
    if (msg?.error) console.log(msg.error)

    // if transaction and cart added successfully
    // clean previous error (if exist)
    setError('')
    // show popup
    setProcess(false)
    setSuccess(true)
    setTimeout(() => {
      setSuccess(false)
      cleanCarts() // clean up state and localStorage
    }, 3000)

    // redirect to profile page
    setTimeout(() => {
      window.location.href = '/profile'
    }, 5000)
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleFile = (e) => {
    const { name, files } = e.target

    setForm({
      ...form,
      [name]: files[0],
    })

    const preview = document.querySelector('.preview-attachment')
    if (files && files[0]) {
      const reader = new FileReader()

      reader.onload = (e) => {
        preview.setAttribute('src', e.target.result)
      }

      reader.readAsDataURL(files[0])
    }

    const previewText = document.querySelector('.form-item-image p')
    previewText.textContent = files[0].name
  }

  if (onProcess) {
    return (
      <OnProcess msg='Tunggu sebentar ya saat kami memproses pesanan anda, jangan refresh halaman ini' />
    )
  }

  if (totalQty === 0) {
    return (
      <p className='alert alert-info'>
        Silahkan{' '}
        <Link to='/' className='alert-link'>
          order kopi
        </Link>{' '}
        terlebih dahulu!
      </p>
    )
  }

  return (
    <>
      <form className='form form-checkout' onSubmit={handleSubmit}>
        {error && (
          <div className='form-alert alert alert-danger'>
            <p>{error}</p>
          </div>
        )}
        <div className='form-item'>
          <input
            type='text'
            name='name'
            id='name'
            value={form.name}
            onChange={handleChange}
            placeholder='Name'
            required
          />
        </div>
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
            type='text'
            name='phone'
            id='phone'
            value={form.phone}
            onChange={handleChange}
            placeholder='Phone'
            required
          />
        </div>
        <div className='form-item'>
          <input
            type='text'
            name='possCode'
            id='possCode'
            value={form.possCode}
            onChange={handleChange}
            placeholder='Poss Code'
            required
          />
        </div>
        <div className='form-item'>
          <textarea
            name='address'
            id='address'
            value={form.address}
            onChange={handleChange}
            placeholder='Address'
            maxLength='250'
            rows='5'
            required
          ></textarea>
        </div>
        <div className='form-item'>
          <label htmlFor='attachment' className='form-item-image'>
            <p>Attache of Transaction</p> <img src={pin} alt='' />
          </label>
          <input
            type='file'
            name='attachment'
            id='attachment'
            accept='image/*'
            onChange={handleFile}
            className='input-image'
            required
          />
        </div>
        <img src='' alt='' className='preview-attachment' />
        <button className='form-submit btn w-100' type='submit'>
          Pay
        </button>
      </form>
      <PopUp
        msg='Thank you for ordering in us, please wait 1 x 24 hours to verify you order'
        invoke={isSuccess}
      />
    </>
  )
}

export default Checkout
