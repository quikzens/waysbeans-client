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
      setError(response.data.message)
      return setProcess(false)
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

    const previewText = document.querySelector('.form-item-image p')
    previewText.textContent = files[0].name
  }

  if (onProcess) {
    return (
      <OnProcess msg='Kami sedang menambahkan produk, jangan refresh halaman ini ya!' />
    )
  }

  return (
    <>
      <form className='form form-addproduct' onSubmit={handleSubmit}>
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
            type='number'
            name='stock'
            id='stock'
            value={form.stock}
            onChange={handleChange}
            placeholder='Stock'
            required
          />
        </div>
        <div className='form-item'>
          <input
            type='number'
            name='price'
            id='price'
            value={form.price}
            onChange={handleChange}
            placeholder='Price'
            required
          />
        </div>
        <div className='form-item'>
          <textarea
            name='description'
            id='description'
            value={form.description}
            onChange={handleChange}
            placeholder='Description'
            maxLength='250'
            required
          ></textarea>
        </div>
        <div className='form-item'>
          <label htmlFor='photo' className='form-item-image'>
            <p>Photo Product</p> <img src={pin} alt='' />
          </label>
          <input
            type='file'
            name='photo'
            id='photo'
            accept='image/*'
            className='input-image'
            onChange={handleFile}
            required
          />
        </div>

        <button className='form-submit btn w-100' type='submit'>
          Add Product
        </button>
      </form>
      <PopUp msg='Success Add Product' invoke={isSuccess} />
    </>
  )
}

export default AddNewProduct
