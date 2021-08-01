import React, { useState, useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { API, configFormData } from '../../config/api'
import OnProcess from '../OnProcess/OnProcess'
import PopUp from '../PopUp/PopUp'
import { pin } from '../../utils/icons'
import './Form.css'

const Checkout = () => {
  // init context
  const { storeCarts, total } = useContext(CartContext)

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
    console.log(form)

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
      return setError(response.data.message)
    }

    // if success, get the transaction data we successfully added before
    const addedTransaction = response.data.data

    // store cart data to DB, check error
    const msg = storeCarts(addedTransaction._id)
    if (msg?.error) console.log(msg.error)

    // if transaction and cart added successfully
    // show popup
    // redirect to profile page
    setProcess(false)
    setSuccess(true)
    setTimeout(() => {
      setSuccess(false)
    }, 3000)
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
  }

  if (onProcess) {
    return (
      <OnProcess msg='Tunggu sebentar ya saat kami memproses pesanan anda, jangan refresh halaman ini' />
    )
  }

  return (
    <>
      <form className='form form-checkout' onSubmit={handleSubmit}>
        {error && (
          <div className='form-alert'>
            <p>{error}</p>
          </div>
        )}
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            id='name'
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
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
          <label htmlFor='phone'>Phone</label>
          <input
            type='text'
            name='phone'
            id='phone'
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='possCode'>Poss Code</label>
          <input
            type='text'
            name='possCode'
            id='possCode'
            value={form.possCode}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='address'>Address</label>
          <textarea
            name='address'
            id='address'
            value={form.address}
            onChange={handleChange}
            placeholder='Max 250 karakter'
            required
          ></textarea>
        </div>
        <div className='form-group'>
          <label htmlFor='attachment'>
            Attache of Transaction <img src={pin} alt='' />
          </label>
          <input
            type='file'
            name='attachment'
            id='attachment'
            accept='image/*'
            onChange={handleFile}
            required
          />
        </div>
        <img src='' alt='' className='preview-attachment' />
        <button className='form-submit' type='submit'>
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
