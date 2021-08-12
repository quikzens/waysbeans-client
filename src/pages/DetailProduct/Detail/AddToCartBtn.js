import React from 'react'
import { useCart } from '../../../contexts/CartContext'

const AddToCartBtn = (props) => {
  // init context
  const { addCart } = useCart()

  // init props
  const { productId, price, product } = props

  const handleClick = (productId, price, product) => {
    addCart(productId, price, product)
  }

  return (
    <button
      className='detail-product-cta btn w-100'
      onClick={() => handleClick(productId, price, product)}
    >
      Add to Cart
    </button>
  )
}

export default AddToCartBtn
