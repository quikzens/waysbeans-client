import React from 'react'

import AddNewProduct from '../../components/Form/AddNewProduct'
import ImagePreview from './ImagePreview/ImagePreview'

import './AddProduct.css'

const AddProduct = () => {
  return (
    <div className='admin-addproduct container flex'>
      <div className='grow-1'>
        <h2>Add Product</h2>
        <AddNewProduct />
      </div>
      <div>
        <ImagePreview />
      </div>
    </div>
  )
}

export default AddProduct
