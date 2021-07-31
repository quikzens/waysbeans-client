import React from 'react'

const ProductItem = (props) => {
  const { _id, photo, name, price, stock } = props.product

  return (
    <div className='product-item'>
      <img src={photo} alt={name} className='product-item-image' />
      <h3 className='product-item-name'>
        <a href={`/product/${_id}`}>{name}</a>
      </h3>
      <p className='product-item-price'>Rp. {price}</p>
      <p className='product-item-stock'>Stock: {stock}</p>
    </div>
  )
}

export default ProductItem
