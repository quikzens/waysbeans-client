import React from 'react'

import AddNewProduct from '../../components/Form/AddNewProduct'
import ImagePreview from './ImagePreview/ImagePreview'

import './AddProduct.css'

const AddProduct = () => {
  return (
    <div className='admin-addproduct flex'>
      <div>
        <h2>Add Product</h2>
        <AddNewProduct />
      </div>
      <ImagePreview />
    </div>
  )
}

export default AddProduct
