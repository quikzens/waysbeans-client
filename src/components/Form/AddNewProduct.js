import React, { useState } from 'react'
import { API, configFormData } from '../../config/api'
import PopUp from '../PopUp/PopUp'
import OnProcess from '../OnProcess/OnProcess'
import { pin } from '../../utils/icons'
import './Form.css'

const AddNewProduct = () => {
  // init state
  const [form, setForm] = useState({
    name: '',
    stock: '',
    price: '',
    description: '',
    photo: '',
  })
  const [onProcess, setProcess] = useState(false)
  const [isSuccess, setSuccess] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(form)

    setProcess(true)

    // prepare product data
    const product = new FormData()
    product.append('name', form.name)
    product.append('stock', form.stock)
    product.append('price', form.price)
    product.append('description', form.description)
    product.append('photo', form.photo, form.photo.name)

    // store product data to DB
    const response = await API.post('/product', product, configFormData)
    if (response.data.status === 'failed') {
      // if failed, abort this function
      // and set the error message
      return setError(response.data.message)
    }

    // if product added successfully
    // show popup
    // redirect to home page
    setProcess(false)
    setSuccess(true)
    setTimeout(() => {
      setSuccess(false)
    }, 3000)
    setTimeout(() => {
      window.location.href = '/'
    }, 4000)
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

    const preview = document.querySelector('.admin-addproduct-image')
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
      <OnProcess msg='Tunggu sebentar saat kami menambahkan produk, jangan refresh halaman ini ya!' />
    )
  }

  return (
    <>
      <form className='form form-addproduct' onSubmit={handleSubmit}>
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
          <label htmlFor='stock'>Stock</label>
          <input
            type='number'
            name='stock'
            id='stock'
            value={form.stock}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='price'>Price</label>
          <input
            type='number'
            name='price'
            id='price'
            value={form.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='description'>Address</label>
          <textarea
            name='description'
            id='description'
            value={form.description}
            onChange={handleChange}
            placeholder='Max 250 karakter'
            maxLength='250'
            required
          ></textarea>
        </div>
        <div className='form-group'>
          <label htmlFor='photo'>
            Photo Product <img src={pin} alt='' />
          </label>
          <input
            type='file'
            name='photo'
            id='photo'
            accept='image/*'
            onChange={handleFile}
            required
          />
        </div>

        <button className='form-submit' type='submit'>
          Add Product
        </button>
      </form>
      <PopUp msg='Success Add Product' invoke={isSuccess} />
    </>
  )
}

export default AddNewProduct
