import React from 'react'
import { Link } from 'react-router-dom'
import formatPrice from '../../../utils/formatPrice'

const ProductItem = (props) => {
  // init props
  const { _id, photo, name, price, stock } = props.product

  return (
    <Link to={`/product/${_id}`} className='product-item d-block'>
      <img src={photo} alt={name} className='product-item-image' />
      <div className='product-item-description'>
        <h3 className='product-item-name'>{name}</h3>
        <p className='product-item-price'>Rp. {formatPrice(price)}</p>
        <p className='product-item-stock'>Stock: {stock}</p>
      </div>
    </Link>
  )
}

export default ProductItem
