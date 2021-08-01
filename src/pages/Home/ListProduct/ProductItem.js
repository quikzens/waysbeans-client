import React from 'react'
import { Link } from 'react-router-dom'

const ProductItem = (props) => {
  // init props
  const { _id, photo, name, price, stock } = props.product

  return (
    <div className='product-item'>
      <img src={photo} alt={name} className='product-item-image' />
      <h3 className='product-item-name'>
        <Link to={`/product/${_id}`}>{name}</Link>
      </h3>
      <p className='product-item-price'>Rp. {price}</p>
      <p className='product-item-stock'>Stock: {stock}</p>
    </div>
  )
}

export default ProductItem
